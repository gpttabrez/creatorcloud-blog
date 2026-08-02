"use client";
// Note: next/image was tried for this page's images (profile photo, project
// cards, modal) and fully reverted back to plain <img> after live testing
// found it unreliable in this environment (intermittent load failures,
// plus a separate stacking-context bug on the profile photo specifically)
// -- see the final verification report for the full evidence trail.
import type { CSSProperties, RefObject } from "react";

import {
  Smartphone,
  Globe,
  Bot,
  Settings,
  TrendingUp,
  Map,
  Target,
  Zap,
  Mail,
  Link,
  PackageCheck
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaThreads,
  FaWhatsapp,
  FaPhone,
  FaTelegram
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */
const PROJECTS = [
  { img:"/portfolio/assets/frentis.png",          title:"Frentis Android App",         desc:"Production-ready Android app used by real users on Play Store.",         link:"https://play.google.com/store/apps/details?id=com.frentis.fresh",                        label:"View →" },
  { img:"/portfolio/assets/harmain-app.png",       title:"Harmain+ App",                desc:"Daily-use Islamic app with Qibla, Tasbih, and Quran features.",          link:"https://play.google.com/store/apps/details?id=com.harmain.plus",                        label:"View →" },
  { img:"/portfolio/assets/ventra-system.png",     title:"Ventra Ride System",          desc:"Real-time ride & delivery system with live tracking.",                   link:"#",                                                                                     label:"View →" },
  { img:"/portfolio/assets/discord-bot.png",       title:"Discord Automation Bot",      desc:"Automated workflow system with smart matching.",                         link:"#",                                                                                     label:"View →" },
  { img:"/portfolio/assets/trading-system.png",    title:"Trading Automation System",   desc:"Automated trading engine with real-time execution.",                     link:"#",                                                                                     label:"View →" },
  { img:"/portfolio/assets/creatorcloud.png",      title:"Creator Cloud Platform",       desc:"Online tools for file conversion, compression, and PDFs.",               link:"https://creatorcloud.in",                                                               label:"Visit →" },
  { img:"/portfolio/assets/memory-gpt.png",        title:"Memory GPT System",           desc:"AI system that remembers conversations for better responses.",           link:"https://chatgpt.com/g/g-6981efbc30bc81918f192a24efd98033-memory-gpt",                 label:"View →" },
  { img:"/portfolio/assets/ai-avatar.png",         title:"AI Avatar Video System",      desc:"Transforms images into realistic talking AI videos.",                    link:"#",                                                                                     label:"View →" },
  { img:"/portfolio/assets/automation-system.png", title:"Business Automations", desc:"Automation for WhatsApp, social media, email, and AI chatbots.",        link:"#",                                                                                     label:"Saves Time • Improves Efficiency →" },
];

const TECH         = ["HTML","CSS","Java","JavaScript","Python","SQL"];
const ORBIT_LABELS = [
  "ANDROID",
  "AI",
  "BOTS",
  "TRACKING",
  "TRADING",
  "SAAS"
];
const WA_LINK      = "https://wa.me/919738841367?text=Hi%20Tabrez,%20I%20want%20to%20discuss%20a%20project";

const SKILLS = [
  { cat:"Android",        color:"#60a5fa", items:["Java","Kotlin","Firebase","Retrofit","Android SDK","GPS & Maps","Authentication","Payment Flows"] },
  { cat:"Web & Frontend", color:"#34d399", items:["React","JavaScript","HTML5","CSS3","Tailwind CSS","Responsive Design"] },
  { cat:"Backend & APIs", color:"#f472b6", items:["Python","REST APIs","Firebase Firestore","Firebase Realtime DB","SQLite","JSON Architectures"] },
  { cat:"AI & Automation",color:"#a78bfa", items:["ChatGPT API","Groq API","Discord Bots","Selenium","Workflow Automation","AI Avatars","Trading Bots"] },
  { cat:"Mapping & Geo",  color:"#fbbf24", items:["MapLibre","Google Maps SDK","GPS Tracking","Polygon Zones","Route Visualization","Distance Matrix"] },
  { cat:"Creative",       color:"#fb923c", items:["Graphic Design","2D Animation","Video Editing","Blender","Branding","Visual Assets"] },
];

const SERVICES = [
  { icon:<Smartphone className="tp-glow-icon" size={24} />, color:"#60a5fa",title:"Android App Development",  desc:"Full-cycle Android apps in Java/Kotlin — Firebase, maps, payments, Play Store deployment. I've shipped apps with real users." },
  { 
  icon:<Globe className="tp-glow-icon" size={24} />, 
  color:"#22d3ee",
  title:"Website Design & Development",
  desc:"Modern responsive websites, landing pages, business dashboards, SaaS platforms, and custom web solutions using React, HTML, CSS, JavaScript, Firebase, and API integrations." 
},
  { icon:<Bot className="tp-glow-icon" size={24} />, color:"#a78bfa",title:"AI Integration",           desc:"Wire GPT, Groq, or custom AI models into your product — chatbots, assistants, memory systems, avatar pipelines." },
  { icon:<Settings className="tp-glow-icon" size={24} />, color:"#fb923c",title:"Business Automation",      desc:"Automate WhatsApp, email, social media, Discord workflows, and internal processes so your team focuses on what matters." },
  { icon:<TrendingUp className="tp-glow-icon" size={24} />, color:"#4ade80",title:"Trading Systems",          desc:"Automated trading bots with signal detection, multi-timeframe analysis, cross-exchange arbitrage, and real-time execution." },
  { icon:<Map className="tp-glow-icon" size={24} />, color:"#facc15",title:"Mapping & Tracking",      desc:"Real-time GPS tracking, polygon service areas, route optimization, distance matrix — built on MapLibre and Google Maps SDK." },
];

const WORKFLOW = [
  {
    step:"01",
    color:"#60a5fa",
    title:"Requirement Discussion",
    desc:"Understand the business problem, feature requirements, target users, and technical scope before development begins."
  },

  {
    step:"02",
    color:"#22d3ee",
    title:"UI / System Planning",
    desc:"Plan architecture, workflows, databases, APIs, UI structure, automation logic, and deployment strategy."
  },

  {
    step:"03",
    color:"#a78bfa",
    title:"Development & Updates",
    desc:"Build the system in production-focused stages with regular progress updates, testing, and optimization."
  },

  {
    step:"04",
    color:"#4ade80",
    title:"Delivery & Support",
    desc:"Deploy the final system, provide fixes if needed, and support future upgrades or scaling requirements."
  }
];
const SOCIALS = [
  {
    icon:<MdEmail />,
    label:"Email",
    url:"mailto:gpttabrez@gmail.com"
  },

  {
    icon:<TbWorld />,
    label:"Website",
    url:"https://creatorcloud.in"
  },

  {
    icon:<FaGithub />,
    label:"GitHub",
    url:"https://github.com/gpttabrez"
  },

  {
    icon:<FaLinkedin />,
    label:"LinkedIn",
    url:"https://linkedin.com/in/tabrezandro"
  },

  {
    icon:<FaInstagram />,
    label:"Instagram",
    url:"https://instagram.com/tabrezcreator"
  },

  {
    icon:<FaFacebook />,
    label:"Facebook",
    url:"https://facebook.com/tabrezcreator"
  },

  {
    icon:<FaYoutube />,
    label:"YouTube",
    url:"https://youtube.com/@FrentisOfficial"
  },

  {
    icon:<FaThreads />,
    label:"Threads",
    url:"https://threads.net/@tabrezcreator"
  },

  {
  icon:<FaWhatsapp />,
  label:"WhatsApp",
  url:"https://wa.me/919738841367?text=Hi%20Tabrez,%20I%20want%20to%20discuss%20a%20project"
  },

  {
  icon:<FaTelegram />,
  label:"Telegram",
  url:"https://t.me/tabrezcreator"
  },

  {
  icon:<FaPhone />,
  label:"Call",
  url:"tel:+919738841367"
  },
];

const STATS = [
  { num:"5+", label:"Years Experience" },
  { num:"9+", label:"Projects Shipped" },
  { num:"2",  label:"Live Play Store Apps" },
  { num:"1",  label:"SaaS Platform Live" },
];

const NAV_LINKS = [
  "About",
  "Skills",
  "Projects",
  "Services",
  "Workflow",
  "Contact"
];

/* ═══════════════════════════════════════════════════════════
   SVG
═══════════════════════════════════════════════════════════ */
const WaSvg = ({ size=20 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

/* ═══════════════════════════════════════════════════════════
   HOOKS
═══════════════════════════════════════════════════════════ */
function useParticleCanvas(
  ref: RefObject<HTMLCanvasElement | null>
) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let id: number;
    let mouse  = { x: window.innerWidth/2, y: window.innerHeight/2 };
    let smooth = { x: mouse.x, y: mouse.y };
    const resize = () => { canvas.width=window.innerWidth; canvas.height=window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const onMove = (e: MouseEvent | TouchEvent) => {
  if ("touches" in e) {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
  } else {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }
};
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, {passive:true});
    const isMobile = window.innerWidth < 768;
    const pts = Array.from({length: isMobile?40:110}, ()=>({
      x:Math.random()*window.innerWidth, y:Math.random()*window.innerHeight,
      size:Math.random()*2+1, vx:(Math.random()-0.5)*0.8, vy:(Math.random()-0.5)*0.8,
      hue:190+Math.random()*40,
    }));
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      smooth.x+=(mouse.x-smooth.x)*0.2; smooth.y+=(mouse.y-smooth.y)*0.2;
      pts.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0;
        if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0;
        const dx=p.x-smooth.x,dy=p.y-smooth.y;
        if(Math.hypot(dx,dy)<120){p.x+=dx/18;p.y+=dy/18;}
        ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fillStyle=`hsl(${p.hue},100%,65%)`; ctx.shadowColor=`hsl(${p.hue},100%,75%)`; ctx.shadowBlur=10;
        ctx.fill(); ctx.shadowBlur=0;
      });
      for(let a=0;a<pts.length;a++){
        for(let b=a+1;b<pts.length;b++){
          const dx=pts[a].x-pts[b].x,dy=pts[a].y-pts[b].y,d=Math.hypot(dx,dy);
          if(d<140){
            const op=1-d/140;
            const g=ctx.createLinearGradient(pts[a].x,pts[a].y,pts[b].x,pts[b].y);
            g.addColorStop(0,`rgba(0,240,255,${op*0.8})`); g.addColorStop(1,`rgba(64,196,255,${op*0.4})`);
            ctx.strokeStyle=g; ctx.lineWidth=1;
            ctx.beginPath(); ctx.moveTo(pts[a].x,pts[a].y); ctx.lineTo(pts[b].x,pts[b].y); ctx.stroke();
          }
        }
      }
      id=requestAnimationFrame(draw);
    };
    draw();
    return ()=>{cancelAnimationFrame(id);window.removeEventListener("resize",resize);window.removeEventListener("mousemove",onMove);window.removeEventListener("touchmove",onMove);};
  },[ref]);
}

function useNeuralCanvas(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  centerRef: RefObject<HTMLDivElement | null>,
  nodeRefs: RefObject<(HTMLDivElement | null)[]>
) {
  useEffect(()=>{
    const canvas=canvasRef.current; if(!canvas)return;
    const ctx = canvas.getContext("2d")!;
let id: number;
let pulse = 0;
    const resize=()=>{const r=canvas.parentElement!.getBoundingClientRect();canvas.width=r.width;canvas.height=r.height;};
    resize(); window.addEventListener("resize",resize);
    const draw=()=>{
      ctx.clearRect(0,0,canvas.width,canvas.height);
      const center=centerRef.current,nodes=nodeRefs.current;
      if(!center||!nodes.length){id=requestAnimationFrame(draw);return;}
      const nr=canvas.getBoundingClientRect(),cr=center.getBoundingClientRect();
      const cx=cr.left-nr.left+cr.width/2,cy=cr.top-nr.top+cr.height/2;
      pulse+=0.05;
      nodes.forEach((node: HTMLDivElement | null, i: number)=>{
        if(!node)return;
        const r=node.getBoundingClientRect();
        const nx=r.left-nr.left+r.width/2,ny=r.top-nr.top+r.height/2;
        const g=ctx.createLinearGradient(cx,cy,nx,ny);
        g.addColorStop(0,"rgba(59,130,246,0.05)"); g.addColorStop(1,"rgba(147,197,253,0.85)");
        const centerRadius = center.offsetWidth / 2;
const nodeRadius = node.offsetWidth / 2;

const angle = Math.atan2(ny - cy, nx - cx);

const startX = cx + Math.cos(angle) * centerRadius;
const startY = cy + Math.sin(angle) * centerRadius;

const endX = nx - Math.cos(angle) * nodeRadius;
const endY = ny - Math.sin(angle) * nodeRadius;

ctx.beginPath();
ctx.moveTo(startX, startY);
ctx.lineTo(endX, endY);
        ctx.strokeStyle=g;ctx.lineWidth=1.5;ctx.shadowBlur=8;ctx.shadowColor="#60a5fa";ctx.stroke();ctx.shadowBlur=0;
        const t=(Math.sin(pulse+i)+1)/2;
        ctx.beginPath();ctx.arc(cx+(nx-cx)*t,cy+(ny-cy)*t,3,0,Math.PI*2);
        ctx.fillStyle="#93c5fd";ctx.shadowBlur=10;ctx.shadowColor="#60a5fa";ctx.fill();ctx.shadowBlur=0;
      });
      id=requestAnimationFrame(draw);
    };
    draw();
    return()=>{cancelAnimationFrame(id);window.removeEventListener("resize",resize);};
  },[canvasRef,centerRef,nodeRefs]);
}

function useHeroParallax(
  heroBoxRef: RefObject<HTMLDivElement | null>,
  sphereRefs: RefObject<(HTMLImageElement | null)[]>,
  techRefs: RefObject<(HTMLDivElement | null)[]>,
  ambientRef: RefObject<HTMLDivElement | null>
) {
  useEffect(()=>{
    let mouse={x:window.innerWidth/2,y:window.innerHeight/2};
    let smooth={x:mouse.x,y:mouse.y}; let id: number;
    const onMove=(e: MouseEvent)=>{mouse.x=e.clientX??mouse.x;mouse.y=e.clientY??mouse.y;};
    window.addEventListener("mousemove",onMove);
    const tick=()=>{
      smooth.x+=(mouse.x-smooth.x)*0.2; smooth.y+=(mouse.y-smooth.y)*0.2;
      const x=(smooth.x/window.innerWidth-0.5)*18,y=(smooth.y/window.innerHeight-0.5)*18;
      if(heroBoxRef.current)heroBoxRef.current.style.transform=`rotateY(${x*0.6}deg) rotateX(${-y*0.6}deg)`;
      sphereRefs.current.forEach((el: HTMLImageElement | null, i: number)=>{if(el)el.style.transform=`translate(${x*(i+1.2)}px,${y*(i+1.2)}px)`;});
      techRefs.current.forEach((el: HTMLDivElement | null, i: number)=>{if(el)el.style.transform=`translate(${x*i*0.5}px,${y*i*0.5}px)`;});
      if(ambientRef.current)ambientRef.current.style.transform=`translate(${x*3}px,${y*3}px)`;
      id=requestAnimationFrame(tick);
    };
    tick();
    return()=>{cancelAnimationFrame(id);window.removeEventListener("mousemove",onMove);};
  },[heroBoxRef,sphereRefs,techRefs,ambientRef]);
}

function useScrollReveal(
  refs: RefObject<(HTMLDivElement | null)[]>
) {
  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("tp-show");obs.unobserve(e.target);}});
    },{threshold:0.1});
    refs.current.forEach((el: HTMLDivElement | null)=>{if(el)obs.observe(el);});
    return()=>obs.disconnect();
  },[refs]);
}

function useCardTilt(
  ref: RefObject<HTMLDivElement | null>
) {
  useEffect(()=>{
    const el=ref.current; if(!el)return;
    const leave=()=>{el.style.transform="translateY(0) scale(1) rotateX(0deg) rotateY(0deg)";};
    const move=(e: MouseEvent)=>{
      const r=el.getBoundingClientRect();
      const rx=-((e.clientY-r.top)/r.height-0.5)*10;
      const ry=((e.clientX-r.left)/r.width-0.5)*10;
      el.style.transform=`translateY(-8px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
    };
    el.addEventListener("mouseleave",leave); el.addEventListener("mousemove",move);
    return()=>{el.removeEventListener("mouseleave",leave);el.removeEventListener("mousemove",move);};
  },[ref]);
}

function useSectionReveal(): [
  RefObject<HTMLDivElement | null>,
  boolean
] {
  const ref=useRef(null); const [on,setOn]=useState(false);
  useEffect(()=>{
    const el=ref.current; if(!el)return;
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setOn(true);obs.disconnect();}},{threshold:0.08});
    obs.observe(el); return()=>obs.disconnect();
  },[]);
  return [ref,on];
}

/* ═══════════════════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════════════════ */
function Navbar() {
  const [scrolled,setScrolled]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false);
  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>40);
    window.addEventListener("scroll",fn);
    return()=>window.removeEventListener("scroll",fn);
  },[]);
  const scrollTo=(id:string)=>{
    document.getElementById(id.toLowerCase())?.scrollIntoView({behavior:"smooth"});
    setMenuOpen(false);
  };
  return (
    <>
      <nav className={`tp-nav${scrolled?" tp-nav-scrolled":""}`}>
        <div className="tp-nav-logo" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
          <span className="tp-nav-bracket">[</span>CREATOR_CLOUD<span className="tp-nav-bracket">]</span>
        </div>
        <div className="tp-nav-links-desktop">
          {NAV_LINKS.map(l=>(
            <button key={l} className="tp-nav-link" onClick={()=>scrollTo(l)}>{l}</button>
          ))}
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="tp-nav-cta">Hire Me</a>
        </div>
        <button className="tp-nav-burger" onClick={()=>setMenuOpen(o=>!o)} aria-label="menu">
          <span className={menuOpen?"tp-burger-x1":""}/><span className={menuOpen?"tp-burger-x2":""}/><span className={menuOpen?"tp-burger-x3":""}/>
        </button>
      </nav>
      {menuOpen&&(
        <div className="tp-mobile-menu">
          {NAV_LINKS.map(l=>(
            <button key={l} className="tp-mobile-link" onClick={()=>scrollTo(l)}>{l}</button>
          ))}
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="tp-mobile-cta" onClick={()=>setMenuOpen(false)}>
            <WaSvg size={18}/> Hire Me
          </a>
        </div>
      )}
    </>
  );
}

function SectionHead({
  label,
  title
}:{
  label:string;
  title:string;
}) {

  const [sectionRef, on] = useSectionReveal();

  return (
    <div
      ref={sectionRef}
      className={`tp-section-head${on ? " tp-s-reveal" : ""}`}
    >
      <span className="tp-s-label">// {label}</span>

      <h2 className="tp-s-title">
        {title}
      </h2>

      <div className="tp-s-line"/>
    </div>
  );
}

function SkillBlock({
  skill,
  index
}:{
  skill:any;
  index:number;
}) {
  const [ref,on]=useSectionReveal();
  return (
    <div ref={ref} className={`tp-skill-block${on?" tp-skill-in":""}`}
      style={
  {
    "--delay": `${index * 0.08}s`,
    "--accent": skill.color
  } as CSSProperties
}
>
      <div className="tp-skill-cat" style={{color:skill.color}}>{skill.cat}</div>
      <div className="tp-skill-bar" style={{background:skill.color}}/>
      <div className="tp-skill-pills">
        {skill.items.map((item:any)=>(
          <span key={item} className="tp-skill-pill">{item}</span>
        ))}
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  index
}:{
  service:any;
  index:number;
}) {
  const [ref,on]=useSectionReveal();
  const [hov,setHov]=useState(false);
  return (
    <div ref={ref} className={`tp-svc-card${on?" tp-svc-in":""}`}
      style={
  {
    "--delay": `${index * 0.08}s`
  } as CSSProperties
}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      <span className="tp-svc-icon">{service.icon}</span>
      <div className="tp-svc-num">0{index+1}</div>
      <h3
  className="tp-svc-title"
  style={{color:service.color}}
>
  {service.title}
</h3>
      <p className="tp-svc-desc">{service.desc}</p>
      <div className={`tp-svc-arrow${hov?" tp-svc-arrow-hov":""}`}>→</div>
    </div>
  );
}

function ProjectCard({
  project,
  onOpen
}:{
  project:any;
  onOpen:any;
}) {
  const ref=useRef(null); useCardTilt(ref);
  return (
    <div ref={ref} className="tp-card" onClick={()=>onOpen(project)}>
      <img src={project.img} alt={project.title} className="tp-card-img"/>
      <div className="tp-card-body">
        <h3 className="tp-card-title">{project.title}</h3>
        <p className="tp-card-desc">{project.desc}</p>
        <span className="tp-card-link">{project.label}</span>
      </div>
    </div>
  );
}

function Modal({
  project,
  onClose
}:{
  project:any;
  onClose:any;
}) {
  useEffect(()=>{
    const fn=(e: KeyboardEvent)=>{if(e.key==="Escape")onClose();};
    window.addEventListener("keydown",fn);
    return()=>window.removeEventListener("keydown",fn);
  },[onClose]);
  if(!project)return null;
  return (
    <div className="tp-modal-backdrop" onClick={onClose}>
      <div className="tp-modal" onClick={e=>e.stopPropagation()}>
        <button className="tp-modal-close" onClick={onClose}>×</button>
        <img src={project.img} alt={project.title} className="tp-modal-img"/>
        <h2 className="tp-modal-title">{project.title}</h2>
        <p className="tp-modal-desc">{project.desc}</p>
        {project.link!=="#"?(
          <a href={project.link} target="_blank" rel="noreferrer"
            className="tp-modal-btn" onClick={e=>e.stopPropagation()}>
            Open Project →
          </a>
        ):(
          <span className="tp-modal-btn tp-modal-btn-disabled" aria-disabled="true">
            Private Project — Coming Soon
          </span>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE COMPONENT (Next.js Pages Router default export)
═══════════════════════════════════════════════════════════ */
export default function TabrezPashaN() {
  const particleRef=useRef(null);
  const neuralRef=useRef(null);
  const heroBoxRef=useRef(null);
  const ambientRef=useRef(null);
  const sphereRefs = useRef<(HTMLImageElement | null)[]>([]);
  const techRefs = useRef<(HTMLDivElement | null)[]>([]);
  const centerRef=useRef(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef=useRef(null);
  const [modal,setModal]=useState(null);
  const [headingOn,setHeadingOn]=useState(false);

  useParticleCanvas(particleRef);
  useNeuralCanvas(neuralRef,centerRef,nodeRefs);
  useHeroParallax(heroBoxRef,sphereRefs,techRefs,ambientRef);
  useScrollReveal(cardRefs);

  useEffect(()=>{
    const el=headingRef.current; if(!el)return;
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setHeadingOn(true);obs.disconnect();}},{threshold:0.2});
    obs.observe(el); return()=>obs.disconnect();
  },[]);

  return (
    <>
      <style>{CSS}</style>

      {/* Layer 0: gradient */}
      <div className="tp-bg"/>
      {/* Layer 1: particles */}
      <canvas ref={particleRef} className="tp-particle-canvas"/>

      {/* WhatsApp float */}
      <a href={WA_LINK} target="_blank" rel="noreferrer" className="tp-wa-float" aria-label="Chat on WhatsApp">
        <WaSvg size={24}/>
      </a>

      {/* Layer 2: content */}
      <div className="tp-root">
        <Navbar/>

        {/* ══════════ HERO ══════════ */}
        <section className="tp-hero" id="hero">
          <div ref={ambientRef} className="tp-ambient"/>
          {/* Intentionally left as plain <img>, not next/image: useHeroParallax
              reads/writes these elements' transform style directly via
              sphereRefs in a requestAnimationFrame loop on every mousemove.
              next/image wraps the element and manages its own load/placeholder
              lifecycle; swapping it here risks interfering with that ref
              timing or double-wrapping the transform target, and there's no
              way to verify pixel-perfect parallax behavior without a human
              actually moving a mouse over the live page. Not worth the risk
              for a purely decorative background element with no SEO/loading
              weight (small, already local, non-LCP). */}
          {[0,1,2].map(i=>(
            <img key={i} ref={(el) => {
  sphereRefs.current[i] = el;
}}
              src="/portfolio/assets/sphere.png" alt=""
              className={`tp-sphere tp-sphere-${i}`}/>
          ))}
          {TECH.map((t,i)=>(
            <div key={t} ref={(el) => {
  techRefs.current[i] = el;
}}
              className={`tp-tech tp-tech-${i}`}>{t}</div>
          ))}

          <div className="tp-hero-inner">
            <div className="tp-hero-left">
              <div ref={heroBoxRef} className="tp-hero-box" style={{transformStyle:"preserve-3d"}}>
                <h1 className="tp-hero-h1">Hi, I&apos;m <span className="tp-hero-name">Tabrez</span></h1>
                <p className="tp-hero-sub">Systems &amp; Automation Developer</p>
                <p className="tp-hero-tagline">Building software that <span className="tp-accent">thinks</span>, automates and <span className="tp-accent">scales</span>.</p>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="tp-wa-btn">
                  <WaSvg size={18}/> Chat With Me
                </a>
              </div>
              {/* Plain <img>, not next/image -- see the note at the top of
                  this file's image usages: next/image was fully reverted
                  site-wide after live verification found it unreliable in
                  this environment (this specific image also had its own,
                  separate stacking-context bug on top of that). */}
              <img
                src="/portfolio/assets/profile.png"
                alt="Tabrez Pasha — Systems Developer"
                className="tp-profile"
              />
            </div>

            <div className="tp-hero-right">
              <div className="tp-network">
                <canvas ref={neuralRef} className="tp-neural-canvas"/>
                <div ref={centerRef} className="tp-orbit-center">CORE SYSTEMS</div>
                <div className="tp-orbit">
                  {ORBIT_LABELS.map((label,i)=>(
                    <div key={label} ref={(el) => {
  nodeRefs.current[i] = el;
}}
                      className="tp-orbit-node"
                      style={{transform:`rotate(${i*60}deg) translate(110px) rotate(${-(i*60)}deg) translate(-50%,-50%)`}}>
                      <span style={{animation:"tp-counter-spin 30s linear infinite",display:"block",fontSize:"clamp(7px,1vw,9px)",color:"#cbd5f5"}}>
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="tp-stats">
            {STATS.map(s=>(
              <div key={s.label} className="tp-stat">
                <span className="tp-stat-num">{s.num}</span>
                <span className="tp-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════ ABOUT ══════════ */}
        <section className="tp-section" id="about">
          <SectionHead label="01" title="About Me"/>
          <div className="tp-about-grid">
            <div className="tp-terminal">
              <div className="tp-terminal-bar">
                <span className="tp-dot tp-dot-r"/><span className="tp-dot tp-dot-y"/><span className="tp-dot tp-dot-g"/>
                <span className="tp-terminal-title">tabrez@system:~$</span>
              </div>
              <div className="tp-terminal-body">
                <p><span className="tp-cmd">$</span> <span className="tp-cmd-txt">cat about.txt</span></p><br/>
                <p className="tp-out">Name      : <span className="tp-accent">Tabrez Pasha</span></p>
                <p className="tp-out">Education : <span className="tp-accent">BCA — Bachelor of Computer Applications</span></p>
                <p className="tp-out">Location  : <span className="tp-accent">Bengaluru, India · Remote-Friendly</span></p>
                <p className="tp-out">Languages : <span className="tp-accent">English, Hindi, Kannada, Telugu</span></p>
                <p className="tp-out">Experience: <span className="tp-accent">5+ Years hands-on development</span></p><br/>
                <p><span className="tp-cmd">$</span> <span className="tp-cmd-txt">cat bio.txt</span></p><br/>
                <p className="tp-out tp-bio">
                  Android Developer and Automation Systems Builder with 5+ years of hands-on experience building real-world applications. Focused on <span className="tp-accent">execution-heavy development</span> — not tutorial-level projects. Every system I build solves an operational problem.
                </p><br/>
                <p className="tp-out tp-bio">
                  From GPS-enabled ride systems to <span className="tp-accent">cross-exchange trading bots</span>, Discord automation engines, and a live SaaS platform — I build things that <span className="tp-accent">ship, run, and scale</span>.
                </p><br/>
                <p><span className="tp-cmd">$</span> <span style={{animation:"tp-blink 1s step-end infinite",display:"inline-block"}}>█</span></p>
              </div>
            </div>
            <div className="tp-trait-grid">
              {[
                {icon:<Target className="tp-glow-icon" size={22} />,color:"#60a5fa",t:"Problem-First Thinking", b:"Every project starts with the operational problem, not the tech stack."},
                {icon:<PackageCheck className="tp-glow-icon" size={22} />,color:"#22c55e",t:"Ships Real Products",     b:"2 live Play Store apps, 1 SaaS platform, and multiple live automation systems."},
                {icon:<Bot className="tp-glow-icon" size={22} />,color:"#a78bfa",t:"AI-Native Developer",    b:"GPT, Groq and custom AI models wired directly into products and workflows."},
                {icon:<Zap className="tp-glow-icon" size={22} />,color:"#fb923c",t:"Full-Stack Execution",   b:"Frontend to backend, Android to automation — I handle the entire product."},
                {icon:<Map className="tp-glow-icon" size={22} />,color:"#facc15",t:"Mapping & Geo Systems", b:"Real-time GPS, polygon zones, route logic — built and shipped on MapLibre."},
                {icon:<TrendingUp className="tp-glow-icon" size={22} />,color:"#4ade80",t:"Trading Infrastructure", b:"Automated futures bots, arbitrage systems, and multi-timeframe analysis engines."},
              ].map((c,i)=>(
                <div key={i} className="tp-trait-card">
                  <span className="tp-trait-icon">{c.icon}</span>
                  <h4
  className="tp-trait-title"
  style={{color:c.color}}
>
  {c.t}
</h4>
                  <p className="tp-trait-body">{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ SKILLS ══════════ */}
        <section className="tp-section" id="skills">
          <SectionHead label="02" title="Tech Stack"/>
          <div className="tp-skills-grid">
            {SKILLS.map((s,si)=><SkillBlock key={s.cat} skill={s} index={si}/>)}
          </div>
        </section>

        {/* ══════════ PROJECTS ══════════ */}
        <section className="tp-projects-section" id="projects">
          <SectionHead label="03" title="Systems I've Engineered"/>
          <div className="tp-grid">
            {PROJECTS.map((p,i)=>(
              <div key={p.title} ref={(el) => {
  cardRefs.current[i] = el;
}} className="tp-card-wrap">
                <ProjectCard project={p} onOpen={setModal}/>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════ SERVICES ══════════ */}
        <section className="tp-section" id="services">
          <SectionHead label="04" title="What I Build For You"/>
          <div className="tp-services-grid">
            {SERVICES.map((s,i)=><ServiceCard key={s.title} service={s} index={i}/>)}
          </div>
        </section>

        {/* ══════════ WORKFLOW ══════════ */}
<section className="tp-section" id="workflow">
  <SectionHead label="05" title="How I Work"/>

  <div className="tp-flow-grid">
    {WORKFLOW.map((w,i)=>(
      <div
        key={w.step}
        className="tp-flow-card"
        style={
  {
    "--delay": `${i * 0.08}s`
  } as CSSProperties
}
      >
        <div className="tp-flow-step">{w.step}</div>

        <h3
  className="tp-flow-title"
  style={{color:w.color}}
>
  {w.title}
</h3>

        <p className="tp-flow-desc">
          {w.desc}
        </p>

        {i !== WORKFLOW.length-1 && (
          <div className="tp-flow-line"/>
        )}
      </div>
    ))}
  </div>
</section>

        {/* ══════════ CONTACT ══════════ */}
        <section className="tp-section" id="contact">
          <SectionHead label="06" title="Let's Build Together"/>
          <div className="tp-contact-grid">
            <div className="tp-contact-left">
              <p className="tp-contact-intro">
                Have a project in mind? A system to automate? An app to build? I respond fast and I ship faster. Most projects kick off within <span className="tp-accent">48 hours</span>.
              </p>
              <div className="tp-contact-links">
                {[
                  {icon:<WaSvg size={20}/>, label:"WhatsApp — Chat directly",   href:WA_LINK,                        note:"Fastest response"},
                  {icon:<Mail className="tp-glow-icon" size={20} />,              label:"gpttabrez@gmail.com",       href:"mailto:gpttabrez@gmail.com", note:"For detailed briefs"},
                  {icon:<Link className="tp-glow-icon" size={20} />,              label:"creatorcloud.in",              href:"https://creatorcloud.in",      note:"See my SaaS live"},
                ].map((c,i)=>(
                  <a key={i} href={c.href} target="_blank" rel="noreferrer" className="tp-contact-link">
                    <span className="tp-contact-link-icon">{c.icon}</span>
                    <span className="tp-contact-link-text">
                      <span className="tp-contact-link-label">{c.label}</span>
                      <span className="tp-contact-link-note">{c.note}</span>
                    </span>
                    <span className="tp-contact-arrow">↗</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="tp-contact-right">
              <div className="tp-contact-box">
                <div className="tp-contact-box-tag">READY TO BUILD?</div>
                <h3 className="tp-contact-box-title">Start a Project</h3>
                <p className="tp-contact-box-body">
                  Whether it's an Android app, a web platform, an automation system, or an AI integration — send a message and let's scope it out.
                </p>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="tp-contact-cta">
                  <WaSvg size={18}/> Send a Message
                </a>
                <div className="tp-contact-availability">
                  <span className="tp-avail-dot"/>
                  Available for new projects
                </div>
              </div>
            </div>
          </div>
          <h3 className="tp-social-head">
        Connect Across Platforms
        </h3>

        <div className="tp-socials">
  {SOCIALS.map((s)=>(
    <a
      key={s.label}
      href={s.url}
      target="_blank"
      rel="noreferrer"
      className="tp-social-link"
    >
      <span className="tp-social-icon">
        {s.icon}
      </span>

      <span>{s.label}</span>
    </a>
  ))}
</div>
        </section>

        

        <footer className="tp-footer">
          <span>TABREZ PASHA © {new Date().getFullYear()}</span>
          <span className="tp-footer-dot">◆</span>
          <span>BENGALURU, INDIA</span>
          <span className="tp-footer-dot">◆</span>
          <span>SYSTEMS • AUTOMATION • EXECUTION</span>
        </footer>
      </div>

      <Modal project={modal} onClose={()=>setModal(null)}/>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   CSS
═══════════════════════════════════════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Poppins:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap');

.tp-bg{position:fixed;inset:0;z-index:0;background:linear-gradient(-45deg,#0b1220,#13203f,#1b2b52,#0b1220);background-size:400% 400%;animation:tp-bg-move 12s ease infinite;}
@keyframes tp-bg-move{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}
.tp-particle-canvas{position:fixed;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;}
.tp-wa-float{position:fixed;bottom:24px;right:24px;width:56px;height:56px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;z-index:9999;text-decoration:none;animation:tp-wa-pulse 2s infinite;transition:transform .3s;}
.tp-wa-float:hover{transform:scale(1.12);}
@keyframes tp-wa-pulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,.6);}70%{box-shadow:0 0 0 14px rgba(37,211,102,0);}100%{box-shadow:0 0 0 0 rgba(37,211,102,0);}}
.tp-root{position:relative;z-index:2;font-family:'Poppins',sans-serif;color:white;overflow-x:hidden;min-height:100vh;}

/* NAV */
.tp-nav{position:fixed;top:0;left:0;right:0;z-index:999;display:flex;align-items:center;justify-content:space-between;padding:16px clamp(16px,5vw,60px);transition:background .3s,border-color .3s;}
.tp-nav-scrolled{background:rgba(10,20,50,0.92);backdrop-filter:blur(20px);border-bottom:1px solid rgba(96,165,250,0.15);}
.tp-nav-logo{font-family:'Orbitron',sans-serif;font-size:clamp(15px,2vw,19px);font-weight:700;color:#60a5fa;cursor:pointer;letter-spacing:3px;display:flex;align-items:center;gap:2px;}
.tp-nav-bracket{color:rgba(96,165,250,0.5);}
.tp-nav-links-desktop{display:flex;align-items:center;gap:4px;}
.tp-nav-link{background:none;border:none;cursor:pointer;color:rgba(200,220,255,0.7);font-family:'Poppins',sans-serif;font-size:14px;padding:6px 12px;transition:color .2s;}
.tp-nav-link:hover{color:#60a5fa;}
.tp-nav-cta{margin-left:8px;padding:8px 20px;border:1px solid rgba(96,165,250,0.6);border-radius:8px;color:#60a5fa;font-size:13px;font-weight:600;text-decoration:none;transition:all .2s;}
.tp-nav-cta:hover{background:rgba(96,165,250,0.15);border-color:#60a5fa;}
.tp-nav-burger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px;}
.tp-nav-burger span{display:block;width:24px;height:2px;background:#60a5fa;transition:.3s;}
.tp-burger-x1{transform:rotate(45deg) translate(5px,5px)!important;}
.tp-burger-x2{opacity:0!important;transform:scaleX(0)!important;}
.tp-burger-x3{transform:rotate(-45deg) translate(5px,-5px)!important;}
.tp-mobile-menu{position:fixed;top:0;left:0;right:0;bottom:0;z-index:998;background:rgba(10,20,50,0.97);backdrop-filter:blur(20px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;}
.tp-mobile-link{background:none;border:none;cursor:pointer;color:rgba(200,220,255,0.85);font-family:'Poppins',sans-serif;font-size:20px;letter-spacing:2px;}
.tp-mobile-link:hover{color:#60a5fa;}
.tp-mobile-cta{display:inline-flex;align-items:center;gap:10px;padding:12px 28px;border:1px solid rgba(96,165,250,0.6);border-radius:10px;color:#60a5fa;font-size:16px;font-weight:600;text-decoration:none;}
@media(max-width:768px){.tp-nav-links-desktop{display:none;}.tp-nav-burger{display:flex;}}

/* HERO */
.tp-hero{
  position:relative;
  z-index:2;
  min-height:auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  padding:120px 20px 20px;
  overflow:hidden;
  gap:32px;
}
@media(max-width:768px){
  .tp-hero{
    min-height:auto;
    justify-content:flex-start;
    padding:60px 16px 10px;
  }
}
.tp-ambient{position:absolute;width:min(700px,100vw);height:min(700px,100vw);background:radial-gradient(circle,rgba(59,130,246,.3),transparent 70%);top:-10%;left:-10%;filter:blur(120px);pointer-events:none;z-index:0;}
.tp-sphere{position:absolute;pointer-events:none;mix-blend-mode:screen;opacity:.75;filter:drop-shadow(0 0 30px rgba(59,130,246,.5));z-index:1;will-change:transform;}
.tp-sphere-0{width:clamp(80px,18vw,220px);top:6%;left:3%;animation:tp-f1 8s ease-in-out infinite;}
.tp-sphere-1{width:clamp(55px,11vw,140px);top:8%;right:2%;animation:tp-f2 10s ease-in-out infinite;}
@media(max-width:768px){

  .tp-sphere-0{
    top:18% !important;
    left:-5% !important;
  }

  .tp-sphere-1{
    top:20% !important;
    right:-5% !important;
  }

}
.tp-sphere-2{width:clamp(40px,8vw,95px);bottom:10%;left:18%;animation:tp-f3 12s ease-in-out infinite;}
@keyframes tp-f1{50%{transform:translateY(-18px);}}@keyframes tp-f2{50%{transform:translateY(-26px);}}@keyframes tp-f3{50%{transform:translateY(-12px);}}
.tp-tech{position:absolute;font-size:clamp(10px,1.3vw,13px);color:#93c5fd;opacity:.85;z-index:2;pointer-events:none;white-space:nowrap;}
.tp-tech::before{content:"";position:absolute;left:-15px;top:50%;width:6px;height:6px;background:#60a5fa;border-radius:50%;box-shadow:0 0 8px #60a5fa;transform:translateY(-50%);}
.tp-tech::after{content:"";position:absolute;left:-15px;top:50%;width:15px;height:1px;background:rgba(147,197,253,.5);transform:translateY(-50%);}
.tp-tech-0{top:36%;left:4%;}.tp-tech-1{top:30%;right:26%;}.tp-tech-2{bottom:26%;left:4%;}.tp-tech-3{top:26%;right:4%;}.tp-tech-4{bottom:26%;right:4%;}.tp-tech-5{top:62%;left:28%;}
@media(max-width:480px){.tp-tech{display:none;}}
.tp-hero-inner{position:relative;z-index:10;display:flex;flex-direction:column;align-items:center;width:100%;max-width:1160px;gap:32px;}
@media(min-width:900px){.tp-hero-inner{flex-direction:row;align-items:center;justify-content:center;gap:60px;}}
.tp-hero-left{position:relative;display:flex;flex-direction:column;align-items:center;flex-shrink:0;}
@media(min-width:900px){.tp-hero-left{align-items:flex-start;}}
.tp-hero-box{
  position:relative;
  z-index:10;
  background:rgba(255,255,255,.07);
  backdrop-filter:blur(24px);
  -webkit-backdrop-filter:blur(24px);
  border:1px solid rgba(255,255,255,.12);
  border-radius:24px;
  padding:clamp(22px,4vw,48px);
  padding-right:110px;
  text-align:center;
  width:min(440px,90vw);
  flex-shrink:0;
}

@media(min-width:900px){
  .tp-hero-box{
    text-align:left;
    padding-right:140px;
  }
}
.tp-hero-h1{font-size:clamp(28px,5.5vw,50px);font-weight:700;margin:0 0 10px;line-height:1.2;}
.tp-hero-name{font-family:'Orbitron','Poppins',sans-serif;background:linear-gradient(90deg,#3b82f6,#60a5fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.tp-hero-sub{font-size:clamp(13px,2vw,16px);opacity:.75;margin:0 0 8px;}
.tp-hero-tagline{font-size:clamp(12px,1.6vw,14px);opacity:.6;margin:0 0 22px;font-style:italic;}
.tp-accent{color:#60a5fa;font-style:normal;}
.tp-wa-btn{display:inline-flex;align-items:center;gap:10px;padding:12px 26px;background:linear-gradient(135deg,#25D366,#128C7E);border-radius:12px;color:white;text-decoration:none;font-size:clamp(13px,1.6vw,15px);font-weight:600;box-shadow:0 0 20px rgba(37,211,102,.35);transition:transform .25s,box-shadow .25s;position:relative;z-index:5;}
.tp-wa-btn:hover{transform:scale(1.05);box-shadow:0 0 32px rgba(37,211,102,.6);}
.tp-profile{
  display:block;
  width:clamp(120px,32vw,180px);
  pointer-events:none;
  will-change:transform;
  filter:drop-shadow(0 12px 24px rgba(0,0,0,.35));
  opacity:1;
  z-index:20;
  position:absolute;
  bottom:2px;
  right:-20px;

  -webkit-mask-image:
    radial-gradient(circle at center,
    black 62%,
    rgba(0,0,0,0.9) 72%,
    transparent 100%);

  mask-image:
    radial-gradient(circle at center,
    black 62%,
    rgba(0,0,0,0.9) 72%,
    transparent 100%);
}

@media(min-width:900px){
  .tp-profile{
    width:clamp(150px,16vw,220px);
    bottom:0px;
    right:-35px;
  }
}
.tp-hero-right{display:none;}
@media(min-width:900px){.tp-hero-right{display:flex;align-items:center;justify-content:center;flex-shrink:0;}}
@media(max-width:899px){
  .tp-hero-right{
    position:absolute;
    inset:0;
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100%;
    z-index:1;
    opacity:0.25;
    pointer-events:none;
  }
}
.tp-network{position:relative;width:clamp(260px,32vw,380px);height:clamp(260px,32vw,380px);display:flex;align-items:center;justify-content:center;}
@media(max-width:899px){.tp-network{width:100%;height:100%;}}
.tp-neural-canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;}
.tp-orbit-center{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:clamp(56px,9vw,76px);
  height:clamp(56px,9vw,76px);
  font-size:clamp(8px,1vw,10px);
  border-radius:50%;
  background:rgba(255,255,255,.06);
  backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,.15);
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  line-height:1.2;
  padding:0 6px;
  z-index:2;
}
.tp-orbit{position:absolute;top:50%;left:50%;width:clamp(200px,30vw,260px);height:clamp(200px,30vw,260px);transform:translate(-50%,-50%);animation:tp-spin 30s linear infinite;}
@keyframes tp-spin{from{transform:translate(-50%,-50%) rotate(0deg);}to{transform:translate(-50%,-50%) rotate(360deg);}}
@keyframes tp-counter-spin{from{transform:rotate(0deg);}to{transform:rotate(-360deg);}}
.tp-orbit-node{position:absolute;top:50%;left:50%;width:clamp(38px,6vw,50px);height:clamp(38px,6vw,50px);border-radius:50%;background:rgba(255,255,255,.05);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;}
.tp-stats{position:relative;z-index:10;display:flex;flex-wrap:wrap;justify-content:center;gap:clamp(16px,4vw,48px);padding:clamp(16px,3vw,28px) clamp(20px,5vw,60px);background:rgba(255,255,255,.04);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.08);border-radius:16px;width:min(700px,92vw);}
.tp-stat{display:flex;flex-direction:column;align-items:center;}
.tp-stat-num{font-family:'Orbitron',sans-serif;font-size:clamp(22px,4vw,32px);color:#60a5fa;font-weight:700;line-height:1;}
.tp-stat-label{font-size:clamp(10px,1.3vw,12px);opacity:.65;margin-top:4px;text-align:center;}

/* SECTIONS */
.tp-section{
  max-width:1240px;
  margin:0 auto;
  padding-top:35px;
  padding-right:clamp(16px,5vw,60px);
  padding-bottom:clamp(30px,6vw,80px);
  padding-left:clamp(16px,5vw,60px);
}
.tp-section-head{margin-bottom:clamp(36px,6vw,64px);opacity:0;transform:translateY(28px);transition:opacity .8s ease,transform .8s ease;}
.tp-s-reveal{opacity:1!important;transform:translateY(0)!important;}
.tp-s-label{font-family:'Share Tech Mono',monospace;font-size:clamp(11px,1.3vw,13px);color:#60a5fa;letter-spacing:3px;display:block;margin-bottom:8px;}
.tp-s-title{font-family:'Orbitron',sans-serif;font-size:clamp(24px,4.5vw,44px);font-weight:700;color:white;margin:0 0 14px;letter-spacing:1px;}
.tp-s-line{width:72px;height:3px;background:linear-gradient(90deg,#60a5fa,transparent);border-radius:2px;}
@keyframes tp-blink{50%{opacity:0;}}

/* ABOUT */
.tp-about-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(20px,4vw,48px);align-items:start;}
@media(max-width:860px){.tp-about-grid{grid-template-columns:1fr;}}
.tp-terminal{background:rgba(0,0,0,0.35);border:1px solid rgba(96,165,250,0.2);border-radius:12px;overflow:hidden;}
.tp-terminal-bar{background:rgba(96,165,250,0.08);padding:10px 16px;border-bottom:1px solid rgba(96,165,250,0.12);display:flex;align-items:center;gap:8px;}
.tp-dot{width:10px;height:10px;border-radius:50%;display:inline-block;}
.tp-dot-r{background:#ff5f56;}.tp-dot-y{background:#ffbd2e;}.tp-dot-g{background:#27c93f;}
.tp-terminal-title{font-family:'Share Tech Mono',monospace;font-size:12px;color:rgba(147,197,253,0.6);margin-left:8px;}
.tp-terminal-body{padding:clamp(14px,2.5vw,24px);font-family:'Share Tech Mono',monospace;font-size:clamp(12px,1.4vw,14px);line-height:1.85;}
.tp-cmd{color:#60a5fa;}.tp-cmd-txt{color:#86efac;}.tp-out{color:rgba(200,220,255,0.85);}.tp-bio{line-height:1.7;}
.tp-trait-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(12px,2vw,18px);}
@media(max-width:480px){.tp-trait-grid{grid-template-columns:1fr;}}
.tp-trait-card{background:rgba(255,255,255,0.04);border:1px solid rgba(96,165,250,0.1);border-radius:12px;padding:clamp(14px,2vw,20px);position:relative;overflow:hidden;transition:border-color .3s,background .3s;}
.tp-trait-card::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:#60a5fa;transform:scaleY(0);transition:transform .35s;}
.tp-trait-card:hover{border-color:rgba(96,165,250,0.3);background:rgba(96,165,250,0.06);}
.tp-trait-card:hover::before{transform:scaleY(1);}
.tp-trait-icon{font-size:22px;display:block;margin-bottom:8px;}
.tp-trait-title{font-size:clamp(13px,1.5vw,15px);font-weight:600;color:white;margin:0 0 6px;}
.tp-trait-body{font-size:clamp(12px,1.3vw,13px);opacity:.65;line-height:1.6;margin:0;}

/* SKILLS */
.tp-skills-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(280px,100%),1fr));gap:clamp(14px,2.5vw,24px);}
.tp-skill-block{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:clamp(16px,2.5vw,24px);opacity:0;transform:translateY(36px);transition:opacity .6s ease var(--delay,0s),transform .6s ease var(--delay,0s),border-color .3s;}
.tp-skill-in{opacity:1!important;transform:translateY(0)!important;}
.tp-skill-block:hover{border-color:var(--accent,#60a5fa);}
.tp-skill-cat{font-family:'Share Tech Mono',monospace;font-size:clamp(12px,1.4vw,14px);font-weight:600;margin-bottom:8px;letter-spacing:1px;}
.tp-skill-bar{height:2px;width:40px;border-radius:2px;margin-bottom:14px;opacity:0.7;}
.tp-skill-pills{display:flex;flex-wrap:wrap;gap:8px;}
.tp-skill-pill{padding:4px 10px;border:1px solid rgba(255,255,255,0.1);border-radius:20px;font-size:clamp(11px,1.3vw,12px);color:rgba(200,220,255,0.8);background:rgba(255,255,255,0.04);transition:all .2s;cursor:default;}
.tp-skill-pill:hover{border-color:var(--accent,#60a5fa);color:var(--accent,#60a5fa);background:rgba(96,165,250,0.08);}

/* PROJECTS */
.tp-projects-section{max-width:1240px;margin:0 auto;padding:clamp(60px,10vw,120px) clamp(16px,5vw,60px);}
.tp-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(300px,100%),1fr));gap:clamp(20px,4vw,48px);justify-items:center;}
.tp-card-wrap{width:100%;opacity:0;transform:translateY(60px) scale(.96);transition:opacity .6s ease,transform .6s ease;}
.tp-card-wrap.tp-show{opacity:1;transform:translateY(0) scale(1);}
.tp-card{width:100%;max-width:360px;margin:0 auto;border-radius:22px;overflow:hidden;cursor:pointer;background:rgba(255,255,255,.06);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.08);box-shadow:0 18px 45px rgba(0,0,0,.55);transition:transform .35s ease,box-shadow .35s ease,border-color .35s ease;will-change:transform;}
.tp-card:hover{box-shadow:0 24px 55px rgba(0,0,0,.8);border-color:rgba(255,255,255,.15);}
.tp-card-img{width:100%;height:clamp(150px,22vw,230px);object-fit:cover;display:block;}
.tp-card-body{padding:clamp(14px,2.5vw,22px);}
.tp-card-title{font-size:clamp(15px,2.2vw,20px);font-weight:600;margin:0 0 8px;}
.tp-card-desc{font-size:clamp(12px,1.6vw,14px);opacity:.75;margin:0 0 10px;line-height:1.5;}
.tp-card-link{color:#60a5fa;font-weight:600;font-size:clamp(12px,1.6vw,14px);position:relative;display:inline-block;}
.tp-card-link::after{content:"";position:absolute;left:0;bottom:-2px;width:0;height:2px;background:#60a5fa;transition:width .3s;}
.tp-card:hover .tp-card-link::after{width:100%;}

/* SERVICES */
.tp-services-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(min(280px,100%),1fr));
  gap:clamp(14px,2.5vw,24px);

  align-items:stretch;
}
.tp-svc-card{
  background:rgba(255,255,255,0.04);
  border:1px solid rgba(255,255,255,0.08);
  border-radius:16px;
  padding:clamp(20px,3vw,30px);
  position:relative;
  overflow:hidden;
  opacity:0;
  transform:translateY(40px);
  transition:
    opacity .6s ease var(--delay,0s),
    transform .6s ease var(--delay,0s),
    border-color .3s,
    background .3s;
  cursor:default;

  display:flex;
  flex-direction:column;
  height:100%;
}
.tp-svc-in{opacity:1!important;transform:translateY(0)!important;}
.tp-svc-card::after{content:"";position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#60a5fa,transparent);transform:scaleX(0);transform-origin:left;transition:transform .4s ease;}
.tp-svc-card:hover{border-color:rgba(96,165,250,0.25);background:rgba(96,165,250,0.05);}
.tp-svc-card:hover::after{transform:scaleX(1);}
.tp-svc-icon{font-size:28px;display:block;margin-bottom:10px;}
.tp-svc-num{font-family:'Share Tech Mono',monospace;font-size:11px;color:rgba(96,165,250,0.5);margin-bottom:8px;letter-spacing:1px;}
.tp-svc-title{font-size:clamp(15px,1.8vw,17px);font-weight:600;color:white;margin:0 0 10px;}
.tp-svc-desc{font-size:clamp(12px,1.4vw,14px);opacity:.65;line-height:1.7;margin:0 0 16px;}
.tp-svc-arrow{
  font-size:20px;
  color:#60a5fa;
  transition:transform .25s;
  margin-top:auto;
}
.tp-svc-arrow-hov{transform:translateX(6px);}
/* WORKFLOW */
.tp-flow-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
  gap:clamp(16px,2.5vw,28px);
  position:relative;
}

.tp-flow-card{
  position:relative;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.08);
  border-radius:18px;
  padding:28px 22px;
  overflow:hidden;
  transition:
    transform .3s ease,
    border-color .3s ease,
    background .3s ease;
}

.tp-flow-card:hover{
  transform:translateY(-6px);
  border-color:rgba(96,165,250,.3);
  background:rgba(96,165,250,.05);
}

.tp-flow-step{
  font-family:'Orbitron',sans-serif;
  font-size:32px;
  font-weight:700;
  color:#60a5fa;
  opacity:.9;
  margin-bottom:18px;
}

.tp-flow-title{
  font-size:18px;
  font-weight:600;
  color:white;
  margin:0 0 12px;
}

.tp-flow-desc{
  font-size:14px;
  line-height:1.7;
  color:rgba(220,230,255,.68);
  margin:0;
}

.tp-flow-line{
  position:absolute;
  right:-40px;
  top:50%;
  width:80px;
  height:1px;
  background:
    linear-gradient(
      90deg,
      rgba(96,165,250,.45),
      transparent
    );
}

@media(max-width:768px){
  .tp-flow-line{
    display:none;
  }
}
 
/* CONTACT */
.tp-contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,5vw,64px);}
@media(max-width:760px){.tp-contact-grid{grid-template-columns:1fr;}}
.tp-contact-intro{font-size:clamp(14px,1.7vw,17px);line-height:1.8;color:rgba(200,220,255,0.85);margin:0 0 28px;}
.tp-contact-links{display:flex;flex-direction:column;gap:12px;}
.tp-contact-link{display:flex;align-items:center;gap:14px;padding:14px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(96,165,250,0.12);border-radius:12px;color:white;text-decoration:none;transition:all .25s;position:relative;overflow:hidden;}
.tp-contact-link::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:#60a5fa;transform:scaleY(0);transition:transform .3s;}
.tp-contact-link:hover{border-color:rgba(96,165,250,0.3);background:rgba(96,165,250,0.06);}
.tp-contact-link:hover::before{transform:scaleY(1);}
.tp-contact-link-icon{font-size:20px;color:#60a5fa;display:flex;align-items:center;flex-shrink:0;}
.tp-contact-link-text{display:flex;flex-direction:column;gap:2px;}
.tp-contact-link-label{font-size:clamp(13px,1.5vw,15px);font-weight:500;}
.tp-contact-link-note{font-size:11px;opacity:.5;font-family:'Share Tech Mono',monospace;letter-spacing:1px;}
.tp-contact-arrow{margin-left:auto;font-size:18px;color:#60a5fa;transition:transform .2s;}
.tp-contact-link:hover .tp-contact-arrow{transform:translate(3px,-3px);}
.tp-contact-box{background:rgba(255,255,255,0.04);border:1px solid rgba(96,165,250,0.2);border-radius:16px;padding:clamp(24px,4vw,40px);position:relative;overflow:hidden;}
.tp-contact-box::before{content:"";position:absolute;top:-40%;right:-40%;width:160%;height:160%;background:radial-gradient(circle,rgba(59,130,246,0.07),transparent 60%);pointer-events:none;}
.tp-contact-box-tag{font-family:'Share Tech Mono',monospace;font-size:11px;color:#60a5fa;letter-spacing:3px;margin-bottom:12px;}
.tp-contact-box-title{font-family:'Orbitron',sans-serif;font-size:clamp(20px,2.8vw,28px);color:white;margin:0 0 14px;font-weight:700;}
.tp-contact-box-body{font-size:clamp(13px,1.5vw,15px);opacity:.7;line-height:1.7;margin:0 0 24px;}
.tp-contact-cta{display:inline-flex;align-items:center;gap:10px;padding:13px 28px;background:linear-gradient(135deg,#25D366,#128C7E);border-radius:12px;color:white;text-decoration:none;font-size:clamp(13px,1.5vw,15px);font-weight:600;box-shadow:0 0 24px rgba(37,211,102,0.35);transition:transform .25s,box-shadow .25s;width:fit-content;}
.tp-contact-cta:hover{transform:scale(1.04);box-shadow:0 0 36px rgba(37,211,102,0.55);}
.tp-contact-availability{display:flex;align-items:center;gap:8px;margin-top:16px;font-size:12px;opacity:.6;font-family:'Share Tech Mono',monospace;}
.tp-avail-dot{width:8px;height:8px;border-radius:50%;background:#22c55e;flex-shrink:0;animation:tp-avail-pulse 2s infinite;}
@keyframes tp-avail-pulse{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.5);}50%{box-shadow:0 0 0 6px rgba(34,197,94,0);}}
.tp-social-head{
  text-align:center;
  font-size:14px;
  letter-spacing:2px;
  text-transform:uppercase;
  color:rgba(220,230,255,.55);
  margin:36px 0 18px;
}
.tp-socials{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;

  gap:14px;

  margin-top:32px;
  margin-bottom:60px;
}

.tp-social-link{
  display:flex;
  align-items:center;
  justify-content:center;

  gap:10px;

  min-width:140px;

  padding:12px 18px;

  border-radius:999px;

  background:rgba(255,255,255,.04);

  border:1px solid rgba(255,255,255,.08);

  color:#dbeafe;

  text-decoration:none;

  font-size:13px;

  transition:
    transform .25s ease,
    border-color .25s ease,
    background .25s ease;
}

.tp-social-link:hover{
  transform:translateY(-3px);

  border-color:rgba(96,165,250,.35);

  background:rgba(96,165,250,.08);
}

.tp-social-icon{
  font-size:18px;

  display:flex;
  align-items:center;
  justify-content:center;
}
.tp-social-link:nth-child(1) .tp-social-icon{color:#ea4335;}
.tp-social-link:nth-child(9) .tp-social-icon{color:#25d366;}
.tp-social-link:nth-child(10) .tp-social-icon{color:#60a5fa;}
.tp-social-link:nth-child(2) .tp-social-icon{color:#60a5fa;}
.tp-social-link:nth-child(3) .tp-social-icon{color:#ffffff;}
.tp-social-link:nth-child(4) .tp-social-icon{color:#0a66c2;}
.tp-social-link:nth-child(5) .tp-social-icon{color:#e1306c;}
.tp-social-link:nth-child(6) .tp-social-icon{color:#1877f2;}
.tp-social-link:nth-child(7) .tp-social-icon{color:#ff0000;}
.tp-social-link:nth-child(8) .tp-social-icon{color:#ffffff;}

@media(max-width:768px){

  .tp-socials{
    gap:10px;
    margin-bottom:42px;
  }

  .tp-social-link{
    min-width:auto;
    padding:10px 14px;
    font-size:12px;
  }

  .tp-social-icon{
    font-size:15px;
  }
}
/* FOOTER */
.tp-footer{border-top:1px solid rgba(96,165,250,0.1);padding:clamp(20px,4vw,32px) clamp(16px,5vw,60px);display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:12px;font-family:'Share Tech Mono',monospace;font-size:11px;color:rgba(200,220,255,0.4);letter-spacing:2px;}
.tp-footer-dot{color:#60a5fa;opacity:0.5;}

/* MODAL */
.tp-modal-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.75);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;z-index:10000;padding:20px;}
.tp-modal{background:rgba(15,23,42,.96);border:1px solid rgba(255,255,255,.12);border-radius:24px;max-width:min(520px,94vw);width:100%;padding:clamp(20px,4vw,36px);position:relative;animation:tp-modal-in .25s ease;}
@keyframes tp-modal-in{from{opacity:0;transform:scale(.92) translateY(20px);}to{opacity:1;transform:scale(1) translateY(0);}}
.tp-modal-close{position:absolute;top:14px;right:18px;background:none;border:none;color:white;font-size:28px;cursor:pointer;opacity:.7;line-height:1;padding:0;}
.tp-modal-close:hover{opacity:1;}
.tp-modal-img{width:100%;height:clamp(150px,28vw,230px);object-fit:cover;border-radius:14px;margin-bottom:16px;display:block;}
.tp-modal-title{font-size:clamp(17px,2.8vw,23px);font-weight:700;margin:0 0 10px;}
.tp-modal-desc{opacity:.75;font-size:clamp(13px,1.7vw,15px);line-height:1.6;margin:0 0 20px;}
.tp-modal-btn{display:inline-block;padding:11px 24px;background:linear-gradient(135deg,#3b82f6,#2563eb);border-radius:10px;color:white;text-decoration:none;font-weight:600;font-size:14px;box-shadow:0 4px 16px rgba(59,130,246,.35);transition:transform .2s,box-shadow .2s;}
.tp-modal-btn:hover{transform:scale(1.04);box-shadow:0 6px 24px rgba(59,130,246,.55);}
.tp-modal-btn-disabled{background:rgba(255,255,255,.08);color:rgba(255,255,255,.55);box-shadow:none;cursor:default;border:1px dashed rgba(255,255,255,.2);}
.tp-modal-btn-disabled:hover{transform:none;box-shadow:none;}
.tp-glow-icon{
  color:#60a5fa;

  filter:
    drop-shadow(0 0 4px rgba(96,165,250,.8))
    drop-shadow(0 0 12px rgba(59,130,246,.5));

  transition:
    transform .25s ease,
    filter .25s ease;
}

.tp-svc-card:hover .tp-glow-icon{
  transform:scale(1.15);

  filter:
    drop-shadow(0 0 8px rgba(96,165,250,1))
    drop-shadow(0 0 18px rgba(59,130,246,.8));
}
`;
