"use client";

import { useEffect, useState, useRef, FormEvent } from "react";

const PROJECTS_DATA = [
  { id: "sentrix", name: "Sentrix", desc: "Hybrid WAF combining 60+ regex signatures with a fine-tuned DistilBERT transformer to catch zero-day SQLi, XSS, path traversal, and command injection." },
  { id: "kastack", name: "KaStack", desc: "Retrieval-augmented generation system with no LangChain/LlamaIndex — topic-boundary detection, two-stage FAISS retrieval, 3-pass persona extraction." },
  { id: "neural-search", name: "Neural Semantic Search Engine", desc: "Semantic retrieval system over the 20 Newsgroups dataset. Fuzzy C-Means topic clusters power a cluster-bucketed cache index." },
  { id: "janvaani", name: "JanVaani", desc: "NLP-powered civic complaint platform with intelligent autofill and issue classification, district-level RBAC dashboards." },
  { id: "traceid", name: "TraceID", desc: "Real-time facial recognition pipeline across 500 identities with automated alerting and a 35% throughput improvement." }
];

const THREAT_LOGS = [
  { type: 'blocked', text: '[BLOCKED] SQLi attempt · 203.0.113.4 · confidence 0.98' },
  { type: 'blocked', text: '[BLOCKED] XSS payload · <script> tag detected · 47ms' },
  { type: 'allowed', text: '[ALLOWED] GET /api/v1/health · 12ms' },
  { type: 'blocked', text: '[BLOCKED] path traversal · ../../etc/passwd · 31ms' }
];

const CMDK_ACTIONS = [
  { id: 'nav-about', label: 'Go to About', type: 'Navigation' },
  { id: 'nav-projects', label: 'Go to Projects', type: 'Navigation' },
  { id: 'nav-experience', label: 'Go to Experience', type: 'Navigation' },
  { id: 'nav-stack', label: 'Go to Stack', type: 'Navigation' },
  { id: 'nav-contact', label: 'Go to Contact', type: 'Navigation' },
  { id: 'proj-sentrix', label: 'Project: Sentrix', type: 'Jump to Project' },
  { id: 'proj-kastack', label: 'Project: KaStack', type: 'Jump to Project' },
  { id: 'proj-traceid', label: 'Project: TraceID', type: 'Jump to Project' },
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
      "LOADING MODULES: ml_core · rag_pipeline · waf_engine · smart_contracts... OK",
      "AUTH: OPEN_TO_WORK = TRUE",
      "BOOT COMPLETE — WELCOME"
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

  // === Core Interactions (Clock, Scroll Counters, Nav) ===
  useEffect(() => {
    if (isBooting) return;

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

    // Scroll Counters
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

    return () => clearInterval(clockInterval);
  }, [isBooting]);

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
    
    if (id.startsWith('nav-')) {
      const section = id.split('-')[1];
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    } else if (id.startsWith('proj-')) {
      const projId = id.split('-')[1];
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      // Brief highlight effect
      setTimeout(() => {
        const projEl = document.getElementById(`proj-card-${projId}`);
        if (projEl) {
          projEl.classList.remove('highlight');
          void projEl.offsetWidth; // trigger reflow
          projEl.classList.add('highlight');
        }
      }, 500);
    } else if (id === 'act-resume') {
      // dummy action
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
      const match = PROJECTS_DATA.find(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
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

  return (
    <>
      <header className="status-bar" id="status-bar">
        <div className="status-left">
          <span className="sys-name">SAGAR_DUBILE.SYS</span>
        </div>
        <div className="status-right">
          <span className="uptime-counter" id="uptime-counter">UPTIME: {uptime} DAYS</span>
          <span className="clock" id="ist-clock">IST: {time}</span>
          <span className="status-badge">STATUS: OPEN TO WORK <span className="status-dot"></span></span>
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
                Building systems that work in the real world — not just <span className="accent-primary">demos.</span><span className="cursor">_</span>
              </h1>
              <p className="hero-subhead">
                Final-year CS student at VIT-AP (CGPA 8.76–8.81/10), AWS Certified Solutions Architect – Associate. I ship AI/ML, security, and blockchain systems from data to deployment — two production RAG systems built from scratch, a zero-day-catching WAF, and audited Ethereum smart contracts.
              </p>
              
              <div className="status-strip">
                <div className="status-row"><span className="label">LOCATION</span><span className="arrow">→</span><span className="value">Chhatrapati Sambhaji Nagar, India</span></div>
                <div className="status-row"><span className="label">EDUCATION</span><span className="arrow">→</span><span className="value">B.Tech CS · VIT-AP · Final Year (Grad 2027)</span></div>
                <div className="status-row"><span className="label">FOCUS</span><span className="arrow">→</span><span className="value">AI Engineering · Security · Blockchain</span></div>
                <div className="status-row"><span className="label">STATUS</span><span className="arrow">→</span><span className="value">Open to full-time / internship roles</span></div>
              </div>

              <div className="hero-actions">
                <a href="#projects" className="btn-primary">[ View Projects ]</a>
                <a href="#" className="btn-secondary" onClick={(e) => { e.preventDefault(); handleAction('act-resume'); }}>[ Download Résumé ]</a>
              </div>

              {/* Threat Ticker (Feature B) */}
              <div className="threat-ticker-wrapper">
                <div className="threat-ticker">
                  {/* Repeat logs multiple times to ensure seamless infinite scroll visually */}
                  {[...THREAT_LOGS, ...THREAT_LOGS, ...THREAT_LOGS].map((log, i) => (
                    <span key={i} className={`threat-log ${log.type}`}>{log.text}</span>
                  ))}
                </div>
              </div>
              <div className="threat-caption">Sample log format from Sentrix — my ML-powered WAF. Not a live feed.</div>

              {/* RAG Search (Feature D) */}
              <div className="rag-search" style={{ marginTop: '40px' }}>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)'}}>ASK ABOUT MY WORK</label>
                <input 
                  type="text" 
                  placeholder="> query_projects('which project deals with security?')" 
                  value={searchQuery}
                  onChange={handleRagSearch}
                />
                {searchResult && (
                  <div className="rag-result-card p-4 border border-[var(--accent-primary)] bg-[rgba(0,212,255,0.05)] text-[var(--text-primary)]">
                    <div style={{fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-primary)', marginBottom: '8px'}}>SYSTEM MATCH: {searchResult.toUpperCase()}</div>
                    <p style={{fontSize: '0.9rem'}}>{PROJECTS_DATA.find(p => p.id === searchResult)?.desc}</p>
                    <button className="mt-2 text-xs font-mono text-[var(--accent-secondary)] hover:underline" onClick={() => document.getElementById(`proj-card-${searchResult}`)?.scrollIntoView({behavior: 'smooth'})}>
                      [ View Full Project Details ]
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section id="projects" className="panel section-module observer-target" ref={setRef(1)}>
            <div className="panel-header">
              <span className="panel-label">[ 02 // PROJECTS ]</span>
            </div>
            <div className="panel-content">
              
              {/* Sentrix */}
              <div id="proj-card-sentrix" className="service-card group">
                <div className="service-header">
                  <h3 className="service-name">Sentrix <span className="service-type">// Hybrid ML-Powered Web Application Firewall</span></h3>
                  <div className="service-links">
                    <a href="https://github.com/DubileSagar" target="_blank" aria-label="GitHub Repo">[ GH ]</a>
                  </div>
                </div>
                <div className="service-readout">
                  <span className="readout-text">PRECISION <span className="metric stat-success" data-value="97.3">0</span>% · RECALL <span className="metric stat-success" data-value="96.8">0</span>% · LATENCY <span className="metric">&lt;</span><span className="metric" data-value="50">0</span>ms · <span className="metric" data-value="1000">0</span>+ req/s</span>
                  <span className="hover-ping hidden">LAST DEPLOY: ACTIVE</span>
                </div>
                <p className="service-desc">
                  Hybrid WAF combining 60+ regex signatures with a fine-tuned DistilBERT transformer to catch zero-day SQLi, XSS, path traversal, and command injection across 50,000+ requests. Real-time WebSocket dashboard, Docker Compose + Kubernetes/GKE manifests.
                </p>
                <div className="service-tags">
                  <span className="tag">DistilBERT</span>
                  <span className="tag">FastAPI</span>
                  <span className="tag">Docker</span>
                  <span className="tag">Kubernetes</span>
                  <span className="tag">Streamlit</span>
                </div>
              </div>

              {/* KaStack */}
              <div id="proj-card-kastack" className="service-card group">
                <div className="service-header">
                  <h3 className="service-name">KaStack <span className="service-type">// RAG + Persona System over 11K Conversations</span></h3>
                  <div className="service-links">
                    <a href="https://github.com/DubileSagar" target="_blank" aria-label="GitHub Repo">[ GH ]</a>
                  </div>
                </div>
                <div className="service-readout">
                  <span className="readout-text"><span className="metric" data-value="11000">0</span>+ CONVERSATIONS · 2-STAGE FAISS RETRIEVAL · BUILT FROM SCRATCH</span>
                  <span className="hover-ping hidden">LAST DEPLOY: ACTIVE</span>
                </div>
                <p className="service-desc">
                  Retrieval-augmented generation system with no LangChain/LlamaIndex — topic-boundary detection via cosine similarity drift, two-stage FAISS retrieval, 3-pass persona extraction. Cost-optimized model routing (Haiku for bulk, Sonnet for chat). Shipped as a containerized FastAPI microservice with latency/throughput monitoring hooks.
                </p>
                <div className="service-tags">
                  <span className="tag">FAISS</span>
                  <span className="tag">FastAPI</span>
                  <span className="tag">AWS</span>
                  <span className="tag">LLMs</span>
                  <span className="tag">Sentence Transformers</span>
                </div>
              </div>

              {/* Neural Semantic Search Engine */}
              <div id="proj-card-neural-search" className="service-card group">
                <div className="service-header">
                  <h3 className="service-name">Neural Semantic Search Engine <span className="service-type">// Retrieval System</span></h3>
                  <div className="service-links">
                    <a href="https://github.com/DubileSagar/Neural-Semantic-Search-RAG-Engine-" target="_blank" aria-label="GitHub Repo">[ GH ]</a>
                  </div>
                </div>
                <div className="service-readout">
                  <span className="readout-text"><span className="metric stat-success" data-value="71.4">0</span>% CACHE HIT RATE · <span className="metric" data-value="18">0</span>K DOCS · O(n/k) LOOKUP</span>
                  <span className="hover-ping hidden">LAST DEPLOY: ACTIVE</span>
                </div>
                <p className="service-desc">
                  Semantic retrieval system over the 20 Newsgroups dataset. Fuzzy C-Means topic clusters power a cluster-bucketed cache index; PCA to 50 dims before clustering; automated k-selection via FPC sweep (k=5–25).
                </p>
                <div className="service-tags">
                  <span className="tag">Fuzzy C-Means</span>
                  <span className="tag">PCA</span>
                  <span className="tag">ChromaDB</span>
                  <span className="tag">FastAPI</span>
                </div>
              </div>

              {/* JanVaani */}
              <div id="proj-card-janvaani" className="service-card group">
                <div className="service-header">
                  <h3 className="service-name">JanVaani <span className="service-type">// AI-Powered Civic Grievance Platform</span></h3>
                  <div className="service-links">
                    <a href="https://github.com/DubileSagar/SIH2025Finals_63008_SANKALP_SIH25031" target="_blank" aria-label="GitHub Repo">[ GH ]</a>
                  </div>
                </div>
                <div className="service-readout">
                  <span className="readout-text">+<span className="metric stat-success" data-value="45">0</span>% PRIORITIZATION ACCURACY · +<span className="metric stat-success" data-value="60">0</span>% ENGAGEMENT · -<span className="metric stat-success" data-value="35">0</span>% RESOLUTION TIME</span>
                  <span className="hover-ping hidden">LAST DEPLOY: ACTIVE</span>
                </div>
                <p className="service-desc">
                  NLP-powered civic complaint platform with intelligent autofill and issue classification (trained on 8,000+ complaints), district-level RBAC dashboards with SLA monitoring, supporting 500+ concurrent submissions. Built as a Smart India Hackathon 2025 finalist project (national).
                </p>
                <div className="service-tags">
                  <span className="tag">NLP</span>
                  <span className="tag">FastAPI</span>
                  <span className="tag">RBAC</span>
                  <span className="tag">ML Classification</span>
                </div>
              </div>

              {/* TraceID */}
              <div id="proj-card-traceid" className="service-card group">
                <div className="service-header">
                  <h3 className="service-name">TraceID <span className="service-type">// Frame-wise CCTV Facial Recognition</span></h3>
                  <div className="service-links">
                    <a href="https://github.com/DubileSagar" target="_blank" aria-label="GitHub Repo">[ GH ]</a>
                  </div>
                </div>
                <div className="service-readout">
                  <span className="readout-text"><span className="metric stat-success" data-value="94">0</span>% ACCURACY · <span className="metric" data-value="15">0</span>+ FPS · <span className="metric">&lt;</span><span className="metric" data-value="2">0</span>s DETECTION-TO-ALERT</span>
                  <span className="hover-ping hidden">LAST DEPLOY: ACTIVE</span>
                </div>
                <p className="service-desc">
                  Real-time facial recognition pipeline across 500 identities with automated alerting and a 35% throughput improvement via batch inference and infra-level tuning.
                </p>
                <div className="service-tags">
                  <span className="tag">OpenCV</span>
                  <span className="tag">Deep Learning</span>
                  <span className="tag">Computer Vision</span>
                </div>
              </div>
              
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
