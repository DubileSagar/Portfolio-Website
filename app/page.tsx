"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Code2, Database, Shield, LayoutDashboard, Terminal, BrainCircuit, Network, LineChart, ExternalLink, Mail } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const PROJECTS = [
  {
    id: "sentrix",
    title: "Sentrix WAF",
    category: "Security & ML",
    desc: "Hybrid Web Application Firewall combining 60+ regex signatures with a fine-tuned DistilBERT transformer. Catches zero-day SQLi, XSS, and command injection.",
    stats: [
      { label: "Precision", value: "97.3%" },
      { label: "Latency", value: "<50ms" },
      { label: "Traffic", value: "1K+ req/s" }
    ],
    icon: Shield,
    link: "https://github.com/DubileSagar"
  },
  {
    id: "kastack",
    title: "KaStack RAG",
    category: "AI Engineering",
    desc: "Production-grade RAG system over 11K conversations. Built from scratch without LangChain. Features 2-stage FAISS retrieval and topic-boundary detection.",
    stats: [
      { label: "Data", value: "11K+ Chats" },
      { label: "Routing", value: "Cost-Optimized" }
    ],
    icon: BrainCircuit,
    link: "https://github.com/DubileSagar"
  },
  {
    id: "janvaani",
    title: "JanVaani Platform",
    category: "Product & Analytics",
    desc: "AI-powered civic grievance platform with intelligent autofill, district-level RBAC dashboards, and SLA monitoring. National Hackathon Finalist.",
    stats: [
      { label: "Accuracy", value: "+45%" },
      { label: "Engagement", value: "+60%" }
    ],
    icon: LayoutDashboard,
    link: "https://github.com/DubileSagar/SIH2025Finals_63008_SANKALP_SIH25031"
  },
  {
    id: "traceid",
    title: "TraceID CCTV",
    category: "Computer Vision",
    desc: "Real-time facial recognition pipeline across 500 identities with automated alerting. Achieved massive throughput gains via batch inference tuning.",
    stats: [
      { label: "Accuracy", value: "94%" },
      { label: "Speed", value: "15+ FPS" }
    ],
    icon: Network,
    link: "https://github.com/DubileSagar"
  },
  {
    id: "atliq",
    title: "AtliQ Sales Insights",
    category: "Data Storytelling",
    desc: "End-to-end sales analytics build: SQL data modeling feeding an interactive Power BI dashboard for real-time business decision-making.",
    stats: [
      { label: "Stack", value: "Power BI + SQL" }
    ],
    icon: LineChart,
    link: "#"
  }
];

export default function SpatialPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });
  const yHero = useTransform(smoothProgress, [0, 1], [0, -400]);
  const opacityHero = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  
  return (
    <main ref={containerRef} className="relative min-h-screen">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-sm tracking-widest font-bold"
        >
          S.DUBILE
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-6 text-sm font-medium"
        >
          <a href="#work" className="hover:text-[var(--accent)] transition-colors">Work</a>
          <a href="#about" className="hover:text-[var(--accent)] transition-colors">About</a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-6 relative">
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="max-w-4xl w-full flex flex-col items-center text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-panel px-6 py-2 mb-8 inline-flex items-center gap-2"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent)]"></span>
            </span>
            <span className="text-sm font-medium text-[var(--text-muted)]">Available for Opportunities</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            I engineer <span className="gradient-text-accent glow-text">intelligent</span> <br className="hidden md:block" /> systems.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed"
          >
            Bridging the gap between raw data and real-world impact. From zero-day catching WAFs and 11K+ conversation RAGs, to business-driving analytics dashboards.
          </motion.p>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ArrowRight className="rotate-90" />
        </div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="py-32 px-6 lg:px-24 max-w-[1600px] mx-auto z-10 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <p className="text-[var(--text-muted)] text-lg">Deployed services and analytical tools.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-panel p-8 md:p-10 flex flex-col group relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-glow)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-[var(--accent)]">
                  <proj.icon size={28} />
                </div>
                <span className="text-xs font-mono tracking-wider text-[var(--text-muted)] uppercase border border-white/10 px-3 py-1 rounded-full">
                  {proj.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 relative z-10">{proj.title}</h3>
              <p className="text-[var(--text-muted)] leading-relaxed mb-8 flex-grow relative z-10">
                {proj.desc}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                {proj.stats.map(stat => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-2xl font-semibold gradient-text">{stat.value}</span>
                    <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>

              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[var(--accent)] transition-colors relative z-10 w-max">
                View Project <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stack & Experience */}
      <section id="about" className="py-32 px-6 lg:px-24 max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12">Engineering Stack</h2>
            <div className="space-y-8">
              <div className="glass-panel p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Terminal className="text-[var(--accent)]" />
                  <h3 className="text-xl font-semibold">AI & Machine Learning</h3>
                </div>
                <p className="text-[var(--text-muted)] leading-relaxed">Python, PyTorch, TensorFlow, HuggingFace, Scikit-learn, Sentence Transformers, FAISS, ChromaDB.</p>
              </div>
              <div className="glass-panel p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Database className="text-[var(--accent)]" />
                  <h3 className="text-xl font-semibold">Backend & Infrastructure</h3>
                </div>
                <p className="text-[var(--text-muted)] leading-relaxed">FastAPI, Docker, Kubernetes, AWS (Certified SAA), SQL, Git.</p>
              </div>
              <div className="glass-panel p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Code2 className="text-[var(--accent)]" />
                  <h3 className="text-xl font-semibold">Blockchain & Web3</h3>
                </div>
                <p className="text-[var(--text-muted)] leading-relaxed">Solidity, Ethereum, Hardhat, Web3.js, Gas Optimization.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12">Experience</h2>
            <div className="glass-panel p-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-[var(--accent)]"></div>
              <span className="text-[var(--accent)] font-mono text-sm mb-2 block">Nov 2025 – Mar 2026</span>
              <h3 className="text-2xl font-bold mb-1">Blockchain Engineer Intern</h3>
              <p className="text-[var(--text-muted)] mb-6">Shamgar Software Solutions</p>
              <ul className="space-y-4 text-[var(--text-muted)]">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div>
                  <p>Designed smart contract modules focused on secure, exploit-resistant logic.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div>
                  <p>Ran gas optimization passes and vulnerability assessments on existing codebases.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div>
                  <p>Built unit testing pipelines that caught logic flaws pre-deployment.</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Connect */}
      <footer className="relative z-10 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(94,92,230,0.1)] to-transparent pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-6 relative z-10"
        >
          <h2 className="text-4xl font-bold mb-8">Let's build something.</h2>
          <div className="flex justify-center gap-6 mb-16">
            <a href="mailto:dubile.sagarr@gmail.com" className="p-4 rounded-full glass-panel hover:bg-white/10 transition-colors group">
              <Mail className="text-[var(--text-muted)] group-hover:text-white transition-colors" />
            </a>
            <a href="https://github.com/DubileSagar" target="_blank" className="p-4 rounded-full glass-panel hover:bg-white/10 transition-colors group">
              <span className="text-[var(--text-muted)] group-hover:text-white transition-colors"><GithubIcon /></span>
            </a>
            <a href="https://www.linkedin.com/in/sagar-dubile-2079b0306" target="_blank" className="p-4 rounded-full glass-panel hover:bg-white/10 transition-colors group">
              <span className="text-[var(--text-muted)] group-hover:text-white transition-colors"><LinkedinIcon /></span>
            </a>
          </div>
          <p className="font-mono text-sm text-[var(--text-muted)]">
            © 2026 SAGAR DUBILE.<br/>BUILT BECAUSE PROBLEMS BOTHER ME UNTIL THEY'RE SOLVED.
          </p>
        </motion.div>
      </footer>
    </main>
  );
}
