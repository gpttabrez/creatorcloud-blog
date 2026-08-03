"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {

  // Read once safely during mount
  const getStored = () => {
    try {
      return localStorage.getItem("cookieConsent");
    } catch {
      return null;
    }
  };

  const [stored, setStored] = useState<string | null>(getStored);
  const [stage, setStage] = useState<"full" | "shrink" | "hidden">(stored ? "hidden" : "full");
  // full → shrink → hidden

  /* ==========================================================
     🔥 Auto-shrink after 8 seconds (only if not accepted)
  ========================================================== */
  useEffect(() => {
    if (!stored) {
      setStage("full");

      const timer = setTimeout(() => {
        if (!localStorage.getItem("cookieConsent")) {
          setStage("shrink");
        }
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [stored]);

  /* ==========================================================
     User clicks view → open full → shrink again after 8s
  ========================================================== */
  const handleView = () => {
    setStage("full");
    setTimeout(() => {
      setStage(prev => (prev === "full" ? "shrink" : prev));
    }, 8000);
  };

  /* ==========================================================
     Accept / Decline
  ========================================================== */
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setStored("accepted");
    setStage("hidden");
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setStored("declined");
    setStage("hidden");
  };


  return (
    <>
      {/* ================= FULL BANNER ================= */}
      {stage === "full" && (
        <div
          className="
            fixed bottom-10 left-1/2 -translate-x-1/2 z-[999]
            max-w-xl w-[92%] sm:w-[480px] text-white p-6 rounded-2xl
            backdrop-blur-xl border border-white/15 bg-white/10
            shadow-[0_0_30px_rgba(0,255,255,0.4)] animate-fadeIn
          "
        >
          <p className="text-sm text-gray-200 leading-relaxed">
            🍪 We use cookies to improve your experience, analyse usage
            & enable personalised ads when required.
          </p>

          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={handleDecline}
              className="px-4 py-2 rounded-md bg-white/10 border border-white/30 hover:bg-white/20"
            >
              Decline
            </button>

            <button
              onClick={handleAccept}
              className="
                px-5 py-2 rounded-md font-semibold
                bg-gradient-to-r from-cyan-400 to-purple-500 hover:scale-105 shadow-lg
              "
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* ================= SHRINK FLOAT BUTTONS ================= */}
      {stage === "shrink" && (
        <div
          className="
            fixed left-4 top-1/2 -translate-y-1/2 z-[999]
            flex flex-col gap-3 animate-slideLeft
          "
        >
          <button
            onClick={handleAccept}
            className="
              px-3 py-2 rounded-lg bg-gradient-to-b from-blue-500 to-cyan-500
              text-white text-xs shadow-lg hover:scale-110
            "
          >
            ✔ Accept
          </button>

          <button
            onClick={handleDecline}
            className="
              px-3 py-2 rounded-lg bg-white/20 text-white text-xs
              border border-white/30 hover:scale-110
            "
          >
            ✖ Decline
          </button>

          <button
            onClick={handleView}
            className="
              px-3 py-2 rounded-lg bg-purple-500/80 text-white text-xs
              hover:bg-purple-500 shadow-md hover:scale-110
            "
          >
            🔍 View
          </button>
        </div>
      )}

      {/* ================= ANIMATIONS ================= */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn .7s ease; }

          @keyframes slideLeft {
            from { transform: translate(-20px,-50%); opacity: 0; }
            to   { transform: translate(0,-50%); opacity: 1; }
          }
          .animate-slideLeft { animation: slideLeft .7s ease; }
        `}
      </style>
    </>
  );
}
