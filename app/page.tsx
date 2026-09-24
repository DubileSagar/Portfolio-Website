"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const PROJECT_SENTRIX = {
  id: "sentrix", name: "Sentrix WAF", category: "Security & ML",
  desc: "Hybrid Web Application Firewall combining 60+ regex signatures with a fine-tuned DistilBERT transformer. Catches zero-day SQLi, XSS, and command injection.",
  metrics: "97.3% Precision / <50ms Latency",
  link: "https://github.com/DubileSagar"
};

const PROJECT_KASTACK = {
  id: "kastack", name: "KaStack RAG", category: "AI Engineering",
  desc: "Production-grade RAG system over 11K conversations. Built from scratch without LangChain. Features 2-stage FAISS retrieval and topic-boundary detection.",
  metrics: "11K+ Chats / FAISS Retrieval",
  link: "https://github.com/DubileSagar"
};

const PROJECT_TRACEID = {
  id: "traceid", name: "TraceID", category: "Computer Vision",
  desc: "Real-time facial recognition pipeline across 500 identities with automated alerting. Achieved massive throughput gains via batch inference tuning.",
  metrics: "94% Accuracy / 15+ FPS",
  link: "https://github.com/DubileSagar"
};

const PROJECT_JANVAANI = {
  id: "janvaani", name: "JanVaani", category: "Product / Platform",
  desc: "AI-powered civic grievance platform with intelligent autofill, district-level RBAC dashboards, and SLA monitoring. National Hackathon Finalist.",
  metrics: "+45% Accuracy / +60% Engagement",
  link: "https://github.com/DubileSagar/SIH2025Finals_63008_SANKALP_SIH25031"
};

const PROJECT_ATLIQ = {
  id: "atliq", name: "AtliQ Insights", category: "Business Analytics",
  desc: "End-to-end sales analytics build: SQL data modeling feeding an interactive Power BI dashboard for real-time business decision-making.",
  metrics: "Power BI / SQL",
  link: "#"
};

const PROJECT_B2B = {
  id: "b2b", name: "SaaS Analytics", category: "Consulting Analysis",
  desc: "Simulates and analyzes a realistic B2B SaaS platform to demonstrate business-analysis skills: transforming raw operational data into retention and customer-health insight.",
  metrics: "Retention Optimization / Python",
  link: "#"
};

const ENGINEER_PROJECTS = [PROJECT_SENTRIX, PROJECT_KASTACK, PROJECT_TRACEID];
const ANALYST_PROJECTS = [PROJECT_JANVAANI, PROJECT_ATLIQ, PROJECT_B2B];

export default function MinimalPortfolio() {
  const [lens, setLens] = useState<'tech' | 'analytics' | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Optional: read from localStorage to remember choice
    const saved = localStorage.getItem('portfolio-lens');
    if (saved === 'tech' || saved === 'analytics') {
      setLens(saved);
    }
  }, []);

  useEffect(() => {
    if (lens === 'tech') {
      document.body.classList.add('lens-tech');
      localStorage.setItem('portfolio-lens', 'tech');
    } else {
      document.body.classList.remove('lens-tech');
      if (lens === 'analytics') {
        localStorage.setItem('portfolio-lens', 'analytics');
      }
    }
  }, [lens]);

  if (!mounted) return null;

  if (lens === null) {
    return (
      <div className="fork-container">
        <div className="fork-panel fork-panel-tech" onClick={() => setLens('tech')}>
          <h2 className="fork-title">ENGINEERING</h2>
          <p className="fork-subtitle">AI / ML / Blockchain / Security</p>
          <div className="fork-footer">Select Path</div>
        </div>
        <div className="fork-panel fork-panel-analytics" onClick={() => setLens('analytics')}>
          <h2 className="fork-title">ANALYTICS</h2>
          <p className="fork-subtitle">Product Management / Consulting / Business Analysis</p>
          <div className="fork-footer">Select Path</div>
        </div>
      </div>
    );
  }

  const isTech = lens === 'tech';
  const projects = isTech ? ENGINEER_PROJECTS : ANALYST_PROJECTS;
  const oppositeProjects = isTech ? ANALYST_PROJECTS : ENGINEER_PROJECTS;

  return (
    <main className="min-h-screen px-6 md:px-12 max-w-6xl mx-auto">
      
      {/* Header */}
      <header className="py-8 minimal-border-b flex justify-between items-center text-xs uppercase tracking-widest">
        <div>Sagar Dubile / 2026</div>
        <div className="flex gap-4">
          <button 
            onClick={() => setLens('tech')} 
            className={`hover:opacity-100 transition-opacity ${isTech ? 'font-bold opacity-100' : 'opacity-40'}`}
          >
            Engineering
          </button>
          <span>/</span>
          <button 
            onClick={() => setLens('analytics')} 
            className={`hover:opacity-100 transition-opacity ${!isTech ? 'font-bold opacity-100' : 'opacity-40'}`}
          >
            Analytics
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-32 md:py-48 minimal-border-b">
        <h1 className="text-4xl md:text-6xl font-light mb-8 max-w-4xl leading-tight">
          {isTech 
            ? "I engineer intelligent systems that work in the real world." 
            : "I turn raw data into strategic decisions that hold up in the real world."}
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mb-12">
          {isTech 
            ? "Specializing in AI/ML infrastructure, zero-day catching WAFs, and production RAG systems. AWS Certified and Ethereum audited." 
            : "Specializing in product analysis, sales insight dashboards, and civic-impact platforms. Combining business intuition with deep data fluency."}
        </p>
        <a href="#work" className="minimal-btn">
          View Selected Work <ArrowRight size={16} />
        </a>
      </section>

      {/* Primary Projects */}
      <section id="work" className="py-24">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-[var(--text-secondary)] mb-2">Selected Works</h2>
          <h3 className="text-2xl font-light">{isTech ? 'Engineering & AI' : 'Product & Analytics'}</h3>
        </div>

        <div>
          {projects.map((proj) => (
            <div key={proj.id} className="project-row group">
              <div className="project-meta">
                <h4 className="text-xl mb-2">{proj.name}</h4>
                <span className="pill mb-4 md:mb-0">{proj.category}</span>
              </div>
              <div className="project-content">
                <p className="text-[var(--text-secondary)] mb-6 text-lg">{proj.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-wider font-semibold opacity-70">{proj.metrics}</span>
                  <a href={proj.link} target="_blank" className="flex items-center gap-1 text-xs uppercase tracking-wider hover:opacity-70 transition-opacity">
                    View <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Opposite Lens Projects (Honesty principle) */}
      <section className="py-24 minimal-border-t">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-[var(--text-secondary)] mb-2">Cross-Domain Context</h2>
          <h3 className="text-2xl font-light">
            {isTech ? 'Also shipped in Product & Analytics' : 'Also shipped in Engineering & AI'}
          </h3>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">
            I believe strong engineers need product intuition, and strong analysts need technical depth. Here is my work in the other domain.
          </p>
        </div>

        <div>
          {oppositeProjects.map((proj) => (
            <div key={proj.id} className="project-row group opacity-80 hover:opacity-100">
              <div className="project-meta">
                <h4 className="text-xl mb-2">{proj.name}</h4>
              </div>
              <div className="project-content">
                <p className="text-[var(--text-secondary)] mb-4">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 minimal-border-t flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-[var(--text-secondary)]">
        <div>© 2026 Sagar Dubile</div>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="mailto:dubile.sagarr@gmail.com" className="hover:text-[var(--text-primary)] transition-colors">Email</a>
          <a href="https://github.com/DubileSagar" target="_blank" className="hover:text-[var(--text-primary)] transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/sagar-dubile-2079b0306" target="_blank" className="hover:text-[var(--text-primary)] transition-colors">LinkedIn</a>
        </div>
      </footer>

    </main>
  );
}
