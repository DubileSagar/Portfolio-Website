"use client";

import { ArrowRight, Code2, Database, Shield, LayoutDashboard, Terminal, BrainCircuit, Network, LineChart, ExternalLink, Mail, CheckCircle2 } from "lucide-react";

// Lucide Brand Icon Replacements since they aren't directly exported in this version
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const PROJECTS = [
  {
    id: "sentrix",
    title: "Sentrix WAF",
    category: "Security",
    desc: "Hybrid Web Application Firewall combining 60+ regex signatures with a fine-tuned DistilBERT transformer. Catches zero-day SQLi, XSS, and command injection.",
    metrics: ["97.3% Precision", "<50ms Latency"],
    icon: Shield,
    link: "https://github.com/DubileSagar"
  },
  {
    id: "kastack",
    title: "KaStack RAG",
    category: "AI Engineering",
    desc: "Production-grade RAG system over 11K conversations. Built from scratch without LangChain. Features 2-stage FAISS retrieval.",
    metrics: ["11K+ Chats", "FAISS Search"],
    icon: BrainCircuit,
    link: "https://github.com/DubileSagar"
  },
  {
    id: "janvaani",
    title: "JanVaani",
    category: "Analytics Platform",
    desc: "AI-powered civic grievance platform with intelligent autofill, district-level RBAC dashboards, and SLA monitoring.",
    metrics: ["+45% Accuracy", "+60% Engagement"],
    icon: LayoutDashboard,
    link: "https://github.com/DubileSagar/SIH2025Finals_63008_SANKALP_SIH25031"
  },
  {
    id: "traceid",
    title: "TraceID CCTV",
    category: "Computer Vision",
    desc: "Real-time facial recognition pipeline across 500 identities with automated alerting. Achieved massive throughput gains via batch inference.",
    metrics: ["94% Accuracy", "15+ FPS"],
    icon: Network,
    link: "https://github.com/DubileSagar"
  },
  {
    id: "atliq",
    title: "AtliQ Insights",
    category: "Data Storytelling",
    desc: "End-to-end sales analytics build: SQL data modeling feeding an interactive Power BI dashboard for real-time business decision-making.",
    metrics: ["Power BI", "SQL Modeling"],
    icon: LineChart,
    link: "#"
  }
];

export default function SaaSPortfolio() {
  return (
    <main className="min-h-screen relative overflow-hidden text-[var(--text-primary)]">
      
      {/* Background Gradients */}
      <div className="saas-gradient-bg"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[var(--bg-app)]/50 backdrop-blur-md border-b border-white/5">
        <div className="font-semibold tracking-tight text-lg flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg shadow-blue-500/20"></div>
          Sagar Dubile
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-[var(--text-secondary)]">
          <a href="#platform" className="hover:text-white transition-colors">Platform</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#infrastructure" className="hover:text-white transition-colors">Infrastructure</a>
        </div>
        <a href="mailto:dubile.sagarr@gmail.com" className="saas-btn-secondary !py-2 !px-4 text-sm hidden md:block">
          Contact Sales
        </a>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for Full-time & Internships
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          Intelligent systems,<br/>
          <span className="text-gradient-accent">built for production.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mb-10 leading-relaxed">
          Bridging the gap between raw data and real-world impact. From zero-day catching WAFs to business-driving analytics dashboards.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#features" className="saas-btn-primary flex items-center justify-center gap-2">
            Explore Platform <ArrowRight size={18} />
          </a>
          <a href="https://github.com/DubileSagar" target="_blank" className="saas-btn-secondary flex items-center justify-center gap-2">
            <GithubIcon /> View Source
          </a>
        </div>
      </section>

      {/* Dashboard Preview / Trusted By (SaaS trope) */}
      <section id="platform" className="px-6 max-w-6xl mx-auto mb-32">
        <div className="saas-card p-1">
          <div className="bg-[#0f1219] rounded-[20px] overflow-hidden border border-white/5 relative h-64 md:h-96 flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-t from-[#0f1219] to-transparent z-10"></div>
             {/* Abstract Dashboard Mockup */}
             <div className="w-full h-full p-8 opacity-40">
                <div className="flex gap-4 mb-6">
                  <div className="h-4 w-1/4 bg-indigo-500/20 rounded"></div>
                  <div className="h-4 w-1/2 bg-blue-500/20 rounded"></div>
                </div>
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="h-24 bg-white/5 rounded-xl"></div>
                  <div className="h-24 bg-white/5 rounded-xl"></div>
                  <div className="h-24 bg-white/5 rounded-xl"></div>
                </div>
                <div className="h-48 bg-indigo-500/10 rounded-xl"></div>
             </div>
             <div className="absolute z-20 text-center">
                <p className="font-medium text-lg text-white drop-shadow-md">Powering data-driven solutions.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Grid (Projects) */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Core Capabilities</h2>
          <p className="text-[var(--text-secondary)] text-lg">Robust microservices and analytical engines ready to scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj, i) => (
            <div key={proj.id} className="saas-card p-8 flex flex-col h-full relative group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <proj.icon size={24} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-[var(--text-secondary)] mb-6 flex-grow text-sm leading-relaxed">
                {proj.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.metrics.map(metric => (
                  <span key={metric} className="text-xs font-medium px-2 py-1 bg-white/5 rounded-md text-white/80 border border-white/10">
                    {metric}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/5">
                <a href={proj.link} target="_blank" className="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors">
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure / Stack */}
      <section id="infrastructure" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="saas-card p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Built on modern infrastructure.</h2>
            <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
              Experience designing scalable, secure architectures and optimizing gas on the EVM. Equipped with the right tools to turn prototypes into production-grade systems.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle2 className="text-indigo-500" size={20} />
                <span>AWS Certified Solutions Architect – Associate</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle2 className="text-indigo-500" size={20} />
                <span>IBM Blockchain Developer Certification</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle2 className="text-indigo-500" size={20} />
                <span>B.Tech CS, VIT-AP (CGPA 8.76/10)</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0f1219] border border-white/5 p-6 rounded-2xl flex flex-col gap-3 hover:border-indigo-500/30 transition-colors">
                <Terminal className="text-indigo-400" size={24} />
                <h4 className="font-semibold text-sm">AI & ML</h4>
                <p className="text-xs text-[var(--text-secondary)]">PyTorch, TensorFlow, HuggingFace, Scikit-learn</p>
              </div>
              <div className="bg-[#0f1219] border border-white/5 p-6 rounded-2xl flex flex-col gap-3 hover:border-blue-500/30 transition-colors">
                <Database className="text-blue-400" size={24} />
                <h4 className="font-semibold text-sm">Backend</h4>
                <p className="text-xs text-[var(--text-secondary)]">FastAPI, Docker, Kubernetes, SQL</p>
              </div>
              <div className="bg-[#0f1219] border border-white/5 p-6 rounded-2xl flex flex-col gap-3 hover:border-purple-500/30 transition-colors">
                <Code2 className="text-purple-400" size={24} />
                <h4 className="font-semibold text-sm">Blockchain</h4>
                <p className="text-xs text-[var(--text-secondary)]">Solidity, Hardhat, Web3.js, EVM</p>
              </div>
              <div className="bg-[#0f1219] border border-white/5 p-6 rounded-2xl flex flex-col gap-3 hover:border-sky-500/30 transition-colors">
                <LineChart className="text-sky-400" size={24} />
                <h4 className="font-semibold text-sm">Analytics</h4>
                <p className="text-xs text-[var(--text-secondary)]">Power BI, RAG, FAISS, ChromaDB</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA / Footer */}
      <footer className="border-t border-white/5 mt-12 bg-black/20">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to scale?</h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
            Currently open to full-time and internship roles. Let's build secure, intelligent systems together.
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:dubile.sagarr@gmail.com" className="saas-btn-primary">Get in Touch</a>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-indigo-500 to-blue-500"></div>
              <span>© 2026 Sagar Dubile. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/DubileSagar" target="_blank" className="hover:text-white transition-colors"><GithubIcon /></a>
              <a href="https://www.linkedin.com/in/sagar-dubile-2079b0306" target="_blank" className="hover:text-white transition-colors"><LinkedinIcon /></a>
              <a href="mailto:dubile.sagarr@gmail.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
