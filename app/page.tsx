"use client";

import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "sentrix",
    title: "SENTRIX WAF",
    category: "SECURITY / ML",
    desc: "Hybrid Web Application Firewall combining 60+ regex signatures with a fine-tuned DistilBERT transformer. Catches zero-day SQLi, XSS, and command injection.",
    stats: "PRECISION: 97.3% | LATENCY: <50MS",
    link: "https://github.com/DubileSagar"
  },
  {
    id: "kastack",
    title: "KASTACK RAG",
    category: "AI ENGINEERING",
    desc: "Production-grade RAG system over 11K conversations. Built from scratch without LangChain. Features 2-stage FAISS retrieval and topic-boundary detection.",
    stats: "DATA: 11K+ CHATS | ROUTING: COST-OPTIMIZED",
    link: "https://github.com/DubileSagar"
  },
  {
    id: "janvaani",
    title: "JANVAANI",
    category: "PRODUCT / ANALYTICS",
    desc: "AI-powered civic grievance platform with intelligent autofill, district-level RBAC dashboards, and SLA monitoring. National Hackathon Finalist.",
    stats: "ACCURACY: +45% | ENGAGEMENT: +60%",
    link: "https://github.com/DubileSagar/SIH2025Finals_63008_SANKALP_SIH25031"
  },
  {
    id: "traceid",
    title: "TRACEID CCTV",
    category: "COMPUTER VISION",
    desc: "Real-time facial recognition pipeline across 500 identities with automated alerting. Achieved massive throughput gains via batch inference tuning.",
    stats: "ACCURACY: 94% | SPEED: 15+ FPS",
    link: "https://github.com/DubileSagar"
  },
  {
    id: "atliq",
    title: "ATLIQ INSIGHTS",
    category: "DATA STORYTELLING",
    desc: "End-to-end sales analytics build: SQL data modeling feeding an interactive Power BI dashboard for real-time business decision-making.",
    stats: "STACK: POWER BI + SQL",
    link: "#"
  }
];

export default function BrutalistPortfolio() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      
      {/* Top Nav / Status Bar */}
      <nav className="fixed top-0 left-0 w-full bg-[var(--bg)] brutalist-border-b z-50 flex flex-col md:flex-row justify-between items-stretch text-sm font-mono uppercase tracking-widest font-bold">
        <div className="p-4 brutalist-border-r flex-grow md:flex-grow-0">
          SAGAR DUBILE ( 2026 )
        </div>
        <div className="p-4 brutalist-border-r flex-grow md:flex-grow-0 hidden md:block">
          STATUS: OPEN FOR OPPORTUNITIES
        </div>
        <div className="p-4 flex gap-8">
          <a href="#work" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4">WORK</a>
          <a href="#about" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4">ABOUT</a>
          <a href="#contact" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-12 flex flex-col justify-end min-h-[80vh] brutalist-border-b">
        <h1 className="text-[12vw] leading-[0.85] font-black uppercase max-w-full break-words">
          I ENGINEER<br/>
          <span className="text-[var(--accent)]">INTELLIGENT</span><br/>
          SYSTEMS.
        </h1>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 brutalist-border-t pt-8">
          <div className="col-span-1 md:col-span-2 text-xl md:text-3xl font-medium uppercase leading-tight tracking-tight">
            Bridging the gap between raw data and real-world impact. From zero-day catching WAFs and 11K+ conversation RAGs, to business-driving analytics dashboards.
          </div>
          <div className="font-mono text-sm uppercase flex flex-col justify-between">
            <p>
              [ LOCATION ] INDIA<br/>
              [ EDUCATION ] B.TECH CS, VIT-AP<br/>
              [ FOCUS ] AI ENG, SECURITY, ANALYTICS
            </p>
            <a href="#work" className="mt-8 md:mt-0 inline-flex items-center gap-2 bg-[var(--text)] text-[var(--bg)] px-6 py-4 brutalist-shadow hover:bg-[var(--accent)] w-max font-bold text-lg">
              VIEW PROJECTS <ArrowUpRight size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="marquee-container">
        <div className="marquee-content">
          ++ BUILDING SYSTEMS THAT WORK IN THE REAL WORLD ++ NOT JUST DEMOS ++ TURNING RAW DATA INTO DECISIONS ++ 
          BUILDING SYSTEMS THAT WORK IN THE REAL WORLD ++ NOT JUST DEMOS ++ TURNING RAW DATA INTO DECISIONS ++
        </div>
      </div>

      {/* Projects Directory */}
      <section id="work" className="brutalist-border-b">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          <div className="col-span-1 lg:col-span-3 brutalist-border-r p-8 bg-[var(--bg)] lg:sticky lg:top-14 h-max z-10">
            <h2 className="text-5xl font-black mb-4">INDEX</h2>
            <p className="font-mono text-sm uppercase mb-8">Selected works & deployments.</p>
          </div>

          <div className="col-span-1 lg:col-span-9 flex flex-col">
            {PROJECTS.map((proj, idx) => (
              <a key={proj.id} href={proj.link} target="_blank" rel="noopener noreferrer" className={`group flex flex-col md:flex-row items-stretch border-b-2 border-[var(--border)] last:border-b-0 hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors`}>
                
                <div className="w-full md:w-1/4 p-6 md:p-8 brutalist-border-r md:border-b-0 border-b-2 flex flex-col justify-between">
                  <span className="font-mono text-sm font-bold block mb-4">[{String(idx + 1).padStart(2, '0')}]</span>
                  <span className="font-mono text-sm font-bold">{proj.category}</span>
                </div>
                
                <div className="w-full md:w-3/4 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl md:text-6xl font-black mb-6">{proj.title}</h3>
                    <p className="text-lg md:text-xl font-medium uppercase leading-snug mb-8 max-w-3xl">
                      {proj.desc}
                    </p>
                  </div>
                  <div className="flex justify-between items-end font-mono text-sm font-bold">
                    <span>{proj.stats}</span>
                    <ArrowUpRight size={32} className="transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </div>
                </div>

              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Stack & Experience */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-2 brutalist-border-b">
        
        <div className="p-8 md:p-12 brutalist-border-r border-b-2 md:border-b-0">
          <h2 className="text-6xl font-black mb-12">STACK</h2>
          
          <div className="space-y-8 font-mono text-sm font-bold uppercase">
            <div className="brutalist-border p-6 brutalist-shadow bg-white">
              <span className="block text-[var(--accent)] mb-2">/ AI & MACHINE LEARNING /</span>
              <p className="text-lg">Python, PyTorch, TensorFlow, HuggingFace, Scikit-learn, Sentence Transformers, FAISS, ChromaDB.</p>
            </div>
            
            <div className="brutalist-border p-6 brutalist-shadow bg-white">
              <span className="block text-[var(--accent)] mb-2">/ BACKEND & INFRA /</span>
              <p className="text-lg">FastAPI, Docker, Kubernetes, AWS (Certified SAA), SQL, Git.</p>
            </div>
            
            <div className="brutalist-border p-6 brutalist-shadow bg-white">
              <span className="block text-[var(--accent)] mb-2">/ BLOCKCHAIN & WEB3 /</span>
              <p className="text-lg">Solidity, Ethereum, Hardhat, Web3.js, Gas Optimization.</p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-6xl font-black mb-12">XP</h2>
          
          <div className="brutalist-border p-8 bg-[var(--text)] text-[var(--bg)] brutalist-shadow shadow-[var(--accent)]">
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-3xl font-black text-[var(--accent)]">BLOCKCHAIN ENG</h3>
              <span className="font-mono text-sm font-bold">NOV 25 - MAR 26</span>
            </div>
            <p className="font-mono text-sm uppercase mb-8 opacity-80">SHAMGAR SOFTWARE SOLUTIONS</p>
            
            <ul className="space-y-4 font-medium text-lg leading-tight">
              <li className="flex items-start gap-4">
                <span className="text-[var(--accent)] font-black">{">"}</span>
                <p>Designed smart contract modules focused on secure, exploit-resistant logic.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[var(--accent)] font-black">{">"}</span>
                <p>Ran gas optimization passes and vulnerability assessments on existing codebases.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[var(--accent)] font-black">{">"}</span>
                <p>Built unit testing pipelines that caught logic flaws pre-deployment.</p>
              </li>
            </ul>
          </div>
        </div>

      </section>

      {/* Footer / Connect */}
      <footer id="contact" className="p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 bg-[var(--text)] text-[var(--bg)]">
        
        <div>
          <h2 className="text-5xl md:text-8xl font-black mb-4">INITIATE<br/>CONTACT.</h2>
        </div>
        
        <div className="flex flex-col gap-6 w-full md:w-auto font-mono font-bold text-xl uppercase">
          <a href="mailto:dubile.sagarr@gmail.com" className="brutalist-border border-white p-6 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--bg)] flex justify-between items-center transition-colors">
            EMAIL <ArrowUpRight />
          </a>
          <a href="https://github.com/DubileSagar" target="_blank" className="brutalist-border border-white p-6 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--bg)] flex justify-between items-center transition-colors">
            GITHUB <ArrowUpRight />
          </a>
          <a href="https://www.linkedin.com/in/sagar-dubile-2079b0306" target="_blank" className="brutalist-border border-white p-6 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--bg)] flex justify-between items-center transition-colors">
            LINKEDIN <ArrowUpRight />
          </a>
        </div>

      </footer>
      
      <div className="font-mono text-xs font-bold text-center p-4 bg-[var(--bg)] text-[var(--text)] uppercase border-t-2 border-[var(--border)]">
        © 2026 SAGAR DUBILE. BUILT BECAUSE PROBLEMS BOTHER ME UNTIL THEY'RE SOLVED.
      </div>

    </main>
  );
}
