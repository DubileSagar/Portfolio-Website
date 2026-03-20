'use client';

import { useEffect, useState, useRef } from 'react';

const phrases = [
    'AI/ML pipelines.',
    'semantic search engines.',
    'smart contracts.',
    'data-driven insights.',
    'neural networks.',
    'Ethereum DApps.',
    'predictive models.',
    'analytics dashboards.',
];

const pnodeColors = ['rgba(0,229,255,.4)', 'rgba(249,115,22,.4)', 'rgba(168,85,247,.4)', 'rgba(34,197,94,.4)'];

export default function Hero() {
    const typewriterRef = useRef<HTMLSpanElement>(null);
    const [pActive, setPActive] = useState(0);
    const [bActive, setBActive] = useState(2);
    const [counts, setCounts] = useState({ projects: 0, cgpa: 0, certs: 0, domains: 0 });

    useEffect(() => {
        const revealObs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('visible');
                        revealObs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));
        return () => revealObs.disconnect();
    }, []);

    useEffect(() => {
        // Typewriter (Ref-based to bypass React state batching delays)
        let pi = 0, ci = 0, deleting = false;
        let timer: NodeJS.Timeout;

        function type() {
            if (!typewriterRef.current) return;
            const p = phrases[pi];
            if (deleting) {
                ci--;
            } else {
                ci++;
            }
            typewriterRef.current.textContent = p.slice(0, ci);

            const speed = deleting ? 42 : ci > p.length ? 2200 : 76;

            if (!deleting && ci > p.length) {
                deleting = true;
                timer = setTimeout(type, speed);
                return;
            }
            if (deleting && ci <= 0) {
                deleting = false;
                pi = (pi + 1) % phrases.length;
                timer = setTimeout(type, 380);
                return;
            }
            timer = setTimeout(type, speed);
        }

        // Start immediately but type normally letter by letter
        timer = setTimeout(type, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let current = { projects: 0, cgpa: 0, certs: 0, domains: 0 };
        const targets = { projects: 3, cgpa: 8, certs: 3, domains: 4 };

        const timer = setInterval(() => {
            let done = true;
            if (current.projects < targets.projects) { current.projects += 1; done = false; }
            if (current.cgpa < targets.cgpa) { current.cgpa += 1; done = false; }
            if (current.certs < targets.certs) { current.certs += 1; done = false; }
            if (current.domains < targets.domains) { current.domains += 1; done = false; }

            setCounts({ ...current });
            if (done) clearInterval(timer);
        }, 80);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const pTimer = setInterval(() => setPActive((p) => (p + 1) % 4), 900);
        const bTimer = setInterval(() => setBActive((b) => (b + 1) % 3), 2500);

        return () => {
            clearInterval(pTimer);
            clearInterval(bTimer);
        };
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-dot"></span> Open to Opportunities
                </div>

                <h1 className="hero-name">
                    <span className="name-line name-line-1">Sagar</span>
                    <span className="name-line name-line-2">Ramesh</span>
                    <span className="name-line name-line-3">Dubile</span>
                </h1>

                <div className="hero-title-wrap">
                    <span className="hero-title-prefix">I build</span>
                    <span className="hero-typewriter" id="typewriter" ref={typewriterRef}></span>
                    <span className="cursor-blink">|</span>
                </div>

                <div className="hero-domain-pills">
                    <span className="domain-pill pill-ai">🧠 AI / ML</span>
                    <span className="domain-pill pill-data">📊 Data Science</span>
                    <span className="domain-pill pill-analytics">📈 Data Analytics</span>
                    <span className="domain-pill pill-chain">⛓ Blockchain</span>
                </div>

                <p className="hero-desc">
                    Final-year CS student at VIT Andhra Pradesh building intelligent systems
                    that turn raw data into decisions and smart contracts into trust.
                </p>

                <div className="hero-cta">
                    <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="btn-primary" id="view-work-btn">View My Work</a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn-secondary">Get In Touch</a>
                    <a
                        href="https://drive.google.com/file/d/1A9vXaBrLsf6vVH4yu1153Hw02zjL4DVL/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-resume"
                    >
                        ⬇ Resume
                    </a>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">{counts.projects}</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">{counts.cgpa}</span>
                        <span className="stat-suffix">.81</span>
                        <span className="stat-label">CGPA / 10</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">{counts.certs}</span>
                        <span className="stat-label">Certifications</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">{counts.domains}</span>
                        <span className="stat-label">Domains</span>
                    </div>
                </div>
            </div>

            <div className="hero-visual">
                <div className="hud-cluster">
                    <div className="hud-widget hud-main">
                        <div className="hud-header">
                            <span className="hud-dot bg-cyan"></span>
                            <span className="hud-title">AI Engine</span>
                        </div>
                        <div className="hud-core-container">
                            <div className="hud-core-ring ring-ext"></div>
                            <div className="hud-core-ring ring-int"></div>
                            <div className="hud-core-center">🧠</div>
                        </div>
                        <div className="hud-status">Status: <span>Optimal</span></div>
                    </div>

                    <div className="hud-widget hud-side1">
                        <div className="hud-header">
                            <span className="hud-title">Analytics</span>
                        </div>
                        <div className="hud-bars">
                            <div className="hud-bar"><div className="hud-fill fill-1"></div></div>
                            <div className="hud-bar"><div className="hud-fill fill-2"></div></div>
                            <div className="hud-bar"><div className="hud-fill fill-3"></div></div>
                            <div className="hud-bar"><div className="hud-fill fill-4"></div></div>
                        </div>
                    </div>

                    <div className="hud-widget hud-side2">
                        <div className="hud-header">
                            <span className="hud-dot bg-purple"></span>
                            <span className="hud-title">Ledger Sync</span>
                        </div>
                        <div className="hud-ledger">
                            <div className="ledger-line">0x8fB... verified</div>
                            <div className="ledger-line">0x2aC... verified</div>
                            <div className="ledger-line pending">0x9dE... pending</div>
                        </div>
                    </div>

                    <div className="hud-widget hud-side3">
                        <div className="hud-stat-circle">
                            <svg viewBox="0 0 36 36" className="hud-circular-chart">
                                <path className="hud-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="hud-circle" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                            <div className="hud-stat-value">85%</div>
                        </div>
                        <div className="hud-stat-label">Model Acc.</div>
                    </div>
                </div>
            </div>

            <div className="scroll-hint">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}
