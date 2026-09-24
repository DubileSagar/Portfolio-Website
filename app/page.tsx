"use client";

import { useEffect, useState, useRef } from "react";

const PROJECT_SENTRIX = {
  id: "sentrix", name: "Sentrix", type: "// Hybrid ML-Powered Web Application Firewall",
  readout: <>PRECISION <span className="metric stat-success" data-value="97.3">0</span>% · RECALL <span className="metric stat-success" data-value="96.8">0</span>% · LATENCY <span className="metric">&lt;</span><span className="metric" data-value="50">0</span>ms · <span className="metric" data-value="1000">0</span>+ req/s</>,
  desc: "Combines 60+ regex signatures with a fine-tuned DistilBERT transformer to catch zero-day SQLi, XSS, path traversal, command injection across 50,000+ requests. Real-time WebSocket dashboard, Docker Compose + Kubernetes/GKE manifests.",
  tags: ["DistilBERT", "FastAPI", "Docker", "Kubernetes", "Streamlit"],
  links: { gh: "https://github.com/DubileSagar" }, lens: 'engineer'
};

const PROJECT_KASTACK = {
  id: "kastack", name: "KaStack", type: "// RAG + Persona System over 11K Conversations",
  readout: <><span className="metric" data-value="11000">0</span>+ CONVERSATIONS · 2-STAGE FAISS RETRIEVAL · BUILT FROM SCRATCH</>,
  desc: "No LangChain/LlamaIndex — topic-boundary detection via cosine similarity drift, two-stage FAISS retrieval, 3-pass persona extraction, cost-optimized model routing (Haiku for bulk, Sonnet for chat). Shipped as a containerized FastAPI microservice with monitoring hooks.",
  tags: ["FAISS", "FastAPI", "AWS", "LLMs", "Sentence Transformers"],
  links: { gh: "https://github.com/DubileSagar" }, lens: 'engineer'
};

const PROJECT_NEURAL = {
  id: "neural-search", name: "Neural Semantic Search Engine", type: "// Retrieval System",
  readout: <><span className="metric stat-success" data-value="71.4">0</span>% CACHE HIT RATE · <span className="metric" data-value="18">0</span>K DOCS · O(n/k) LOOKUP</>,
  desc: "Semantic retrieval over 20 Newsgroups. Fuzzy C-Means clusters power a cluster-bucketed cache index; PCA to 50 dims pre-clustering; automated k-selection via FPC sweep (k=5–25).",
  tags: ["Fuzzy C-Means", "PCA", "ChromaDB", "FastAPI"],
  links: { gh: "https://github.com/DubileSagar/Neural-Semantic-Search-RAG-Engine-" }, lens: 'engineer'
};

const PROJECT_TRACEID = {
  id: "traceid", name: "TraceID", type: "// Frame-wise CCTV Facial Recognition",
  readout: <><span className="metric stat-success" data-value="94">0</span>% ACCURACY · <span className="metric" data-value="15">0</span>+ FPS · <span className="metric">&lt;</span><span className="metric" data-value="2">0</span>s DETECTION-TO-ALERT</>,
  desc: "Real-time facial recognition across 500 identities with automated alerting, 35% throughput improvement via batch inference and infra-level tuning.",
  tags: ["OpenCV", "Deep Learning", "Computer Vision"],
  links: { gh: "https://github.com/DubileSagar" }, lens: 'engineer'
};

const PROJECT_JANVAANI = {
  id: "janvaani", name: "JanVaani", type: "// AI-Powered Civic Grievance Platform",
  readout: <>+<span className="metric stat-success" data-value="45">0</span>% PRIORITIZATION ACCURACY · +<span className="metric stat-success" data-value="60">0</span>% ENGAGEMENT · -<span className="metric stat-success" data-value="35">0</span>% RESOLUTION TIME</>,
  desc: "Product built for real accountability: citizens report issues, AI auto-classifies and prioritizes, district-level RBAC dashboards track every complaint through its lifecycle with SLA monitoring. Smart India Hackathon 2025 National Finalist (36-hour build, judged by government and industry judges).",
  tags: ["Product Thinking", "NLP", "RBAC Dashboards", "Stakeholder Design"],
  links: { gh: "https://github.com/DubileSagar/SIH2025Finals_63008_SANKALP_SIH25031" }, lens: 'analyst'
};

const PROJECT_ATLIQ = {
  id: "atliq", name: "AtliQ Sales Insight Analysis", type: "// Power BI + SQL",
  readout: <>SALES INSIGHT DASHBOARD · POWER BI + SQL</>,
  desc: "End-to-end sales analytics build: SQL data modeling feeding an interactive Power BI dashboard for business decision-making.",
  tags: ["Power BI", "SQL", "Data Storytelling"],
  links: {}, lens: 'analyst'
};

const PROJECT_B2B = {
  id: "b2b-saas", name: "B2B SaaS Customer Analytics", type: "// Retention Optimization",
  readout: <>ITSM / OBSERVABILITY DATA · RETENTION-FOCUSED ANALYSIS</>,
  desc: "Simulates and analyzes a realistic B2B SaaS platform (IT operations / observability) to demonstrate business-analysis skills: transforming raw operational data into retention and customer-health insight.",
  tags: ["Business Analysis", "Python/Jupyter", "SaaS Metrics"],
  links: {}, lens: 'analyst'
};

const ENGINEER_PROJECTS = [PROJECT_SENTRIX, PROJECT_KASTACK, PROJECT_NEURAL, PROJECT_TRACEID];
const ANALYST_PROJECTS = [PROJECT_JANVAANI, PROJECT_ATLIQ, PROJECT_B2B];
const ALL_PROJECTS = [...ENGINEER_PROJECTS, ...ANALYST_PROJECTS];

const THREAT_LOGS = [
  { type: 'blocked', text: '[BLOCKED] SQLi attempt · 203.0.113.4 · confidence 0.98' },
  { type: 'blocked', text: '[BLOCKED] XSS payload · <script> tag detected · 47ms' },
  { type: 'allowed', text: '[ALLOWED] GET /api/v1/health · 12ms' },
  { type: 'blocked', text: '[BLOCKED] path traversal · ../../etc/passwd · 31ms' }
];

const KPI_LOGS = [
  { type: 'up', text: '[UP] prioritization accuracy · +45%' },
  { type: 'up', text: '[UP] citizen engagement · +60%' },
  { type: 'down', text: '[DOWN] resolution time · -35%' },
  { type: 'synced', text: '[SYNCED] sales insight dashboard · Power BI + SQL' }
];

const CMDK_ACTIONS = [
  { id: 'nav-about', label: 'Go to About', type: 'Navigation' },
  { id: 'nav-projects', label: 'Go to Projects', type: 'Navigation' },
  { id: 'nav-experience', label: 'Go to Experience', type: 'Navigation' },
  { id: 'nav-stack', label: 'Go to Stack', type: 'Navigation' },
  { id: 'nav-contact', label: 'Go to Contact', type: 'Navigation' },
  { id: 'switch-engineer', label: 'Switch to Engineer Lens', type: 'Lens Toggle' },
  { id: 'switch-analyst', label: 'Switch to Analyst Lens', type: 'Lens Toggle' },
  { id: 'proj-sentrix', label: 'Project: Sentrix', type: 'Jump to Project' },
  { id: 'proj-kastack', label: 'Project: KaStack', type: 'Jump to Project' },
  { id: 'proj-traceid', label: 'Project: TraceID', type: 'Jump to Project' },
  { id: 'proj-janvaani', label: 'Project: JanVaani', type: 'Jump to Project' },
  { id: 'proj-atliq', label: 'Project: AtliQ', type: 'Jump to Project' },
  { id: 'act-resume', label: 'Download Resume', type: 'Action' },
  { id: 'act-email', label: 'Email Sagar', type: 'Action' },
  { id: 'act-github', label: 'Open GitHub', type: 'Action' },
  { id: 'act-linkedin', label: 'Open LinkedIn', type: 'Action' }
];

export default function Home() {
  const [time, setTime] = useState("00:00:00");
  const [uptime, setUptime] = useState(0);
  const observerTargetRefs = useRef<(HTMLElement | null)[]>([]);

  // Feature State
  const [isBooting, setIsBooting] = useState(true);
  const [bootLog, setBootLog] = useState("");
  
  // lens state can be 'engineer', 'analyst', or null (fork screen)
  const [lens, setLens] = useState<'engineer' | 'analyst' | null>(null);

  const [cmdKOpen, setCmdKOpen] = useState(false);
  const [cmdKQuery, setCmdKQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const cmdKInputRef = useRef<HTMLInputElement>(null);

  // === Boot Sequence Effect ===
  useEffect(() => {
    const hasBooted = localStorage.getItem("booted");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasBooted === "true" || prefersReducedMotion) {
      setIsBooting(false);
      return;
    }

    const bootSequence = [
      "INITIALIZING SDUBILE.SYS...",
      "LOADING MODULES: ml_core · rag_pipeline · waf_engine · smart_contracts · analytics_core... OK",
      "DETECTING VISITOR INTENT...",
      "BOOT COMPLETE — CHOOSE YOUR PATH"
    ];

    let currentLine = 0;
    let currentChar = 0;
    let currentText = "";
    
    const typeInterval = setInterval(() => {
      if (currentLine >= bootSequence.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIsBooting(false);
          localStorage.setItem("booted", "true");
        }, 800);
        return;
      }
      
      const line = bootSequence[currentLine];
      if (currentChar < line.length) {
        currentText += line[currentChar];
        setBootLog(currentText + "_");
        currentChar++;
      } else {
        currentText += "\n";
        setBootLog(currentText);
        currentLine++;
        currentChar = 0;
      }
    }, 15);

    const handleSkip = () => {
      clearInterval(typeInterval);
      setIsBooting(false);
      localStorage.setItem("booted", "true");
    };

    window.addEventListener("keydown", handleSkip);
    window.addEventListener("click", handleSkip);
    
    return () => {
      clearInterval(typeInterval);
      window.removeEventListener("keydown", handleSkip);
      window.removeEventListener("click", handleSkip);
    };
  }, []);

  // Update body class for themes
  useEffect(() => {
    if (lens === 'analyst') {
      document.body.classList.add('theme-analyst');
    } else {
      document.body.classList.remove('theme-analyst');
    }
  }, [lens]);

  // === Core Interactions (Clock, Scroll Counters, Nav) ===
  useEffect(() => {
    if (isBooting || lens === null) return;

    // Clock
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'
      }));
    };
    const clockInterval = setInterval(updateClock, 1000);
    updateClock();

    // Uptime
    const startDate = new Date('2022-01-01T00:00:00Z');
    const updateUptime = () => {
      const diffDays = Math.floor(Math.abs(Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      setUptime(diffDays);
    };
    updateUptime();

    // Scroll Counters - Needs to re-run if lens changes to attach to new elements?
    // Using MutationObserver or re-running on lens change
  }, [isBooting, lens]);

  useEffect(() => {
    if (lens === null) return;

    const countUp = (el: HTMLElement) => {
      const target = parseFloat(el.getAttribute('data-value') || '0');
      if (isNaN(target)) return;
      let current = 0;
      const duration = 1500;
      const increment = target / (duration / 16);
      const isFloat = target % 1 !== 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          el.textContent = isFloat ? target.toFixed(1) : target.toString();
        } else {
          el.textContent = isFloat ? current.toFixed(1) : Math.floor(current).toString();
        }
      }, 16);
    };

    const metricsObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const els = entry.target.querySelectorAll('.metric');
          els.forEach(el => {
            const htmlEl = el as HTMLElement;
            if (!htmlEl.classList.contains('counted') && htmlEl.hasAttribute('data-value')) {
              countUp(htmlEl);
              htmlEl.classList.add('counted');
            }
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    // Clean up old counted classes so they recount if needed? No, standard is once.
    document.querySelectorAll('.service-card').forEach(card => metricsObserver.observe(card));

    // Nav Rail Sync
    const navItems = document.querySelectorAll('.nav-item');
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-target') === id) item.classList.add('active');
          });
        }
      });
    }, { threshold: 0.3 });

    observerTargetRefs.current.forEach(section => { if (section) navObserver.observe(section); });

    return () => {
      metricsObserver.disconnect();
      navObserver.disconnect();
    }
  }, [lens]);

  // === Cmd+K Palette Effect ===
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdKOpen(prev => !prev);
      }
      if (e.key === 'Escape' && cmdKOpen) {
        setCmdKOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cmdKOpen]);

  useEffect(() => {
    if (cmdKOpen && cmdKInputRef.current) {
      cmdKInputRef.current.focus();
    } else {
      setCmdKQuery("");
    }
  }, [cmdKOpen]);

  const handleAction = (id: string) => {
    setCmdKOpen(false);
    
    if (id === 'switch-engineer') setLens('engineer');
    else if (id === 'switch-analyst') setLens('analyst');
    else if (id.startsWith('nav-')) {
      const section = id.split('-')[1];
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    } else if (id.startsWith('proj-')) {
      const projId = id.substring(5);
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const projEl = document.getElementById(`proj-card-${projId}`);
        if (projEl) {
          projEl.classList.remove('highlight');
          void projEl.offsetWidth; 
          projEl.classList.add('highlight');
          projEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    } else if (id === 'act-resume') {
      alert('Downloading Resume...');
    } else if (id === 'act-email') {
      window.location.href = "mailto:dubile.sagarr@gmail.com";
    } else if (id === 'act-github') {
      window.open("https://github.com/DubileSagar", "_blank");
    } else if (id === 'act-linkedin') {
      window.open("https://www.linkedin.com/in/sagar-dubile-2079b0306", "_blank");
    }
  };

  const filteredCmdK = CMDK_ACTIONS.filter(a => a.label.toLowerCase().includes(cmdKQuery.toLowerCase()));

  // === RAG Search logic ===
  const handleRagSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 2) {
      const q = query.toLowerCase();
      const match = ALL_PROJECTS.find(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
      if (match) {
        setSearchResult(match.id);
      } else {
        setSearchResult(null);
      }
    } else {
      setSearchResult(null);
    }
  };

  const setRef = (index: number) => (el: HTMLElement | null) => {
    observerTargetRefs.current[index] = el;
  };

  if (isBooting) {
    return (
      <div className="boot-sequence">
        <pre>{bootLog}</pre>
      </div>
    );
  }

  if (lens === null) {
    return (
      <div className="fork-container">
        <div className="fork-panel fork-panel-engineer" onClick={() => setLens('engineer')}>
          <h2 className="fork-headline">ENGINEER</h2>
          <div className="fork-subline">AI/ML · RAG systems · security · blockchain</div>
          <p className="fork-teaser">I build systems that catch zero-day attacks, retrieve answers from 11,000+ conversations, and ship audited smart contracts.</p>
          <div className="fork-footer">Same person. Two lenses. Switch anytime.</div>
        </div>
        <div className="fork-panel fork-panel-analyst" onClick={() => setLens('analyst')}>
          <h2 className="fork-headline">ANALYST</h2>
          <div className="fork-subline">Product thinking · business analysis · data storytelling</div>
          <p className="fork-teaser">I turn raw data into decisions — sales insight dashboards, retention analytics, and civic-impact platforms judged by real stakeholders.</p>
          <div className="fork-footer">Same person. Two lenses. Switch anytime.</div>
        </div>
      </div>
    );
  }

  // Derive dynamic content based on lens
  const isAnalyst = lens === 'analyst';
  const orderedProjects = isAnalyst 
    ? [...ANALYST_PROJECTS, ...ENGINEER_PROJECTS] 
    : [...ENGINEER_PROJECTS, ...ANALYST_PROJECTS];
  const activeLogs = isAnalyst ? KPI_LOGS : THREAT_LOGS;

  return (
    <>
      <header className="status-bar" id="status-bar">
        <div className="status-left" style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
          <span className="sys-name">SAGAR_DUBILE.SYS</span>
          <div className="lens-toggle">
            <span className={`lens-btn ${!isAnalyst ? 'active' : ''}`} onClick={() => setLens('engineer')}>BUILD</span>
            <span className="lens-divider">|</span>
            <span className={`lens-btn ${isAnalyst ? 'active' : ''}`} onClick={() => setLens('analyst')}>ANALYZE</span>
          </div>
        </div>
        <div className="status-right">
          <span className="uptime-counter" id="uptime-counter">UPTIME: {uptime} DAYS</span>
          <span className="clock" id="ist-clock">IST: {time}</span>
          <span className="status-badge">STATUS: OPEN TO FULL-TIME / INTERNSHIP <span className="status-dot"></span></span>
          <button className="cmd-k-btn" onClick={() => setCmdKOpen(true)}>[ ⌘K ]</button>
        </div>
      </header>

      {/* Cmd+K Modal */}
      {cmdKOpen && (
        <div className="cmd-k-overlay" onClick={() => setCmdKOpen(false)}>
          <div className="cmd-k-modal" onClick={e => e.stopPropagation()}>
            <div className="cmd-k-input-wrapper">
              <span style={{color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)'}}>&gt;</span>
              <input 
                ref={cmdKInputRef}
                className="cmd-k-input" 
                placeholder="Search commands..." 
                value={cmdKQuery}
                onChange={e => setCmdKQuery(e.target.value)}
              />
            </div>
            <div className="cmd-k-list">
              {filteredCmdK.length > 0 ? filteredCmdK.map(action => (
                <div key={action.id} className="cmd-k-item" onClick={() => handleAction(action.id)}>
                  <span>{action.label}</span>
                  <span className="cmd-k-item-type">{action.type}</span>
                </div>
              )) : (
                <div className="cmd-k-item">No matches found.</div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="app-container">
        <nav className="nav-rail" id="nav-rail">
          <div className="nav-line"></div>
          <ul className="nav-markers">
            <li><a href="#about" className="nav-item active" data-target="about">[ 01 ]</a></li>
            <li><a href="#projects" className="nav-item" data-target="projects">[ 02 ]</a></li>
            <li><a href="#experience" className="nav-item" data-target="experience">[ 03 ]</a></li>
            <li><a href="#stack" className="nav-item" data-target="stack">[ 04 ]</a></li>
            <li><a href="#credentials" className="nav-item" data-target="credentials">[ 05 ]</a></li>
            <li><a href="#contact" className="nav-item" data-target="contact">[ 06 ]</a></li>
          </ul>
        </nav>

        <main className="main-content" id="main-content">
          <section id="about" className="panel section-module observer-target" ref={setRef(0)}>
            <div className="panel-header">
              <span className="panel-label">[ 01 // ABOUT ]</span>
            </div>
            <div className="panel-content">
              <h1 className="hero-title">
                {isAnalyst 
                  ? <>Turning raw data into decisions that hold up in the real <span className="accent-primary">world.</span><span className="cursor">_</span></>
                  : <>Building systems that work in the real world — not just <span className="accent-primary">demos.</span><span className="cursor">_</span></>
                }
              </h1>
              <p className="hero-subhead">
                Final-year CS student at VIT-AP (CGPA 8.76–8.81/10), AWS Certified Solutions Architect – Associate. I move between building AI/security/blockchain systems from data to deployment, and analyzing data to drive product and business decisions — Smart India Hackathon 2025 National Finalist.
              </p>
              
              <div className="status-strip">
                <div className="status-row"><span className="label">LOCATION</span><span className="arrow">→</span><span className="value">Chhatrapati Sambhaji Nagar, India</span></div>
                <div className="status-row"><span className="label">EDUCATION</span><span className="arrow">→</span><span className="value">B.Tech CS · VIT-AP · Final Year (Grad 2027)</span></div>
                <div className="status-row"><span className="label">FOCUS</span><span className="arrow">→</span><span className="value">AI Engineering · Security · Blockchain · Business Analysis</span></div>
                <div className="status-row"><span className="label">STATUS</span><span className="arrow">→</span><span className="value">Open to full-time / internship roles</span></div>
              </div>

              <div className="hero-actions">
                <a href="#projects" className="btn-primary">[ View Projects ]</a>
                <a href="#" className="btn-secondary" onClick={(e) => { e.preventDefault(); handleAction('act-resume'); }}>[ Download Résumé ]</a>
              </div>

              {/* Ticker */}
              <div className="threat-ticker-wrapper">
                <div className="threat-ticker">
                  {[...activeLogs, ...activeLogs, ...activeLogs].map((log, i) => (
                    <span key={i} className={`threat-log ${log.type}`}>{log.text}</span>
                  ))}
                </div>
              </div>
              <div className="threat-caption">
                {isAnalyst 
                  ? "Sample readouts from JanVaani and AtliQ Sales Insight. Not a live feed."
                  : "Sample log format from Sentrix — my ML-powered WAF. Not a live feed."
                }
              </div>

              {/* RAG Search */}
              <div className="rag-search" style={{ marginTop: '40px' }}>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)'}}>ASK ABOUT MY WORK</label>
                <input 
                  type="text" 
                  placeholder="> query_projects('which project deals with security?')" 
                  value={searchQuery}
                  onChange={handleRagSearch}
                />
                {searchResult && (() => {
                  const match = ALL_PROJECTS.find(p => p.id === searchResult);
                  if (!match) return null;
                  const crossLens = match.lens !== lens;
                  return (
                    <div className="rag-result-card p-4 border border-[var(--accent-primary)] bg-[rgba(0,212,255,0.05)] text-[var(--text-primary)]">
                      <div style={{fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center'}}>
                        SYSTEM MATCH: {searchResult.toUpperCase()}
                        {crossLens && <span className="cross-lens-badge">[CROSS-LENS RESULT]</span>}
                      </div>
                      <p style={{fontSize: '0.9rem'}}>{match.desc}</p>
                      <button className="mt-2 text-xs font-mono text-[var(--accent-secondary)] hover:underline" onClick={() => handleAction(`proj-${searchResult}`)}>
                        [ View Full Project Details ]
                      </button>
                    </div>
                  );
                })()}
              </div>
            </div>
          </section>

          <section id="projects" className="panel section-module observer-target" ref={setRef(1)}>
            <div className="panel-header">
              <span className="panel-label">[ 02 // PROJECTS ]</span>
            </div>
            <div className="panel-content">
              {orderedProjects.map(proj => (
                <div id={`proj-card-${proj.id}`} className="service-card group" key={proj.id}>
                  <div className="service-header">
                    <h3 className="service-name">{proj.name} <span className="service-type">{proj.type}</span></h3>
                    {proj.links?.gh && (
                      <div className="service-links">
                        <a href={proj.links.gh} target="_blank" aria-label="GitHub Repo">[ GH ]</a>
                      </div>
                    )}
                  </div>
                  <div className="service-readout">
                    <span className="readout-text">{proj.readout}</span>
                    <span className="hover-ping hidden">LAST DEPLOY: ACTIVE</span>
                  </div>
                  <p className="service-desc">{proj.desc}</p>
                  <div className="service-tags">
                    {proj.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="panel section-module observer-target" ref={setRef(2)}>
            <div className="panel-header">
              <span className="panel-label">[ 03 // EXPERIENCE ]</span>
            </div>
            <div className="panel-content">
              <div className="experience-block">
                <div className="exp-header">
                  <h3 className="exp-role">Blockchain Engineer Intern <span className="exp-company">— Shamgar Software Solutions</span></h3>
                  <span className="exp-meta">Nov 2025 – Mar 2026 · Remote, India</span>
                </div>
                <ul className="exp-bullets">
                  <li>Designed smart contract modules focused on secure, exploit-resistant logic</li>
                  <li>Ran gas optimization passes and vulnerability assessments on existing codebases</li>
                  <li>Built unit testing pipelines that caught logic flaws pre-deployment</li>
                  <li>Contributed to dApp architecture and security-first code reviews</li>
                </ul>
                <div className="service-tags exp-tags">
                  <span className="tag">Solidity</span>
                  <span className="tag">Ethereum</span>
                  <span className="tag">Hardhat</span>
                  <span className="tag">Remix</span>
                  <span className="tag">Gas Optimization</span>
                </div>
              </div>
            </div>
          </section>

          <section id="stack" className="panel section-module observer-target" ref={setRef(3)}>
            <div className="panel-header">
              <span className="panel-label">[ 04 // STACK ]</span>
            </div>
            <div className="panel-content">
              <div className="stack-grid">
                <div className="stack-row">
                  <div className="stack-label">AI · ML · SECURITY</div>
                  <div className="stack-arrow">→</div>
                  <div className="stack-items">Python · PyTorch · TensorFlow · HuggingFace · Scikit-learn</div>
                </div>
                <div className="stack-row">
                  <div className="stack-label">RAG · SEARCH · NLP</div>
                  <div className="stack-arrow">→</div>
                  <div className="stack-items">Sentence Transformers · FAISS · ChromaDB</div>
                </div>
                <div className="stack-row">
                  <div className="stack-label">BLOCKCHAIN · WEB3</div>
                  <div className="stack-arrow">→</div>
                  <div className="stack-items">Solidity · Ethereum · Hardhat · Web3.js</div>
                </div>
                <div className="stack-row">
                  <div className="stack-label">APIS · CLOUD · INFRA</div>
                  <div className="stack-arrow">→</div>
                  <div className="stack-items">FastAPI · Docker · Kubernetes · AWS (Certified SAA) · Git · SQL</div>
                </div>
                <div className="stack-row">
                  <div className="stack-label">ANALYTICS · BUSINESS</div>
                  <div className="stack-arrow">→</div>
                  <div className="stack-items">Power BI · SQL · Data Storytelling · Requirement & Design Docs</div>
                </div>
              </div>
            </div>
          </section>

          <section id="credentials" className="panel section-module observer-target" ref={setRef(4)}>
            <div className="panel-header">
              <span className="panel-label">[ 05 // CREDENTIALS ]</span>
            </div>
            <div className="panel-content">
              <ul className="cred-list">
                <li>AWS Certified Solutions Architect – Associate</li>
                <li>Smart India Hackathon 2025 — National Finalist</li>
                <li>IBM Blockchain Developer Certification</li>
                <li>B.Tech CS, VIT-AP — CGPA 8.76/10 (Final Year, Expected 2027)</li>
              </ul>
            </div>
          </section>

          <section id="contact" className="panel section-module observer-target" ref={setRef(5)}>
            <div className="panel-header">
              <span className="panel-label">[ 06 // CONTACT ]</span>
            </div>
            <div className="panel-content">
              <div className="terminal-contact">
                <div className="terminal-header">
                  <span>user@sagardubile:~$</span> <span className="accent-primary">send_message()</span>
                </div>
                
                <div className="contact-links">
                  <div className="contact-row">
                    <span className="contact-key">EMAIL</span>
                    <span className="contact-val"><a href="mailto:dubile.sagarr@gmail.com">dubile.sagarr@gmail.com</a></span>
                  </div>
                  <div className="contact-row">
                    <span className="contact-key">GITHUB</span>
                    <span className="contact-val"><a href="https://github.com/DubileSagar" target="_blank">github.com/DubileSagar</a></span>
                  </div>
                  <div className="contact-row">
                    <span className="contact-key">LINKEDIN</span>
                    <span className="contact-val"><a href="https://www.linkedin.com/in/sagar-dubile-2079b0306" target="_blank">linkedin.com/in/sagar-dubile-2079b0306</a></span>
                  </div>
                  <div className="contact-row">
                    <span className="contact-key">PREV_SITE</span>
                    <span className="contact-val"><a href="https://sagardubile.dev" target="_blank">sagardubile.dev</a> (legacy)</span>
                  </div>
                </div>
                
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label htmlFor="name">&gt; name:</label>
                    <input type="text" id="name" placeholder="_" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">&gt; email:</label>
                    <input type="email" id="email" placeholder="_" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">&gt; message:</label>
                    <textarea id="message" rows={3} placeholder="_" required></textarea>
                  </div>
                  <button type="submit" className="btn-submit">[ Execute ]</button>
                </form>
              </div>
            </div>
          </section>

          <footer className="footer">
            <p>© 2026 SAGAR DUBILE — BUILT BECAUSE PROBLEMS BOTHER ME UNTIL THEY'RE SOLVED.</p>
          </footer>

        </main>
      </div>
    </>
  );
}
