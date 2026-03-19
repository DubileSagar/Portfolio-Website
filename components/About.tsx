'use client';

import { useEffect, useRef } from 'react';

export default function About() {
    const terminalBodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Reveal all elements in component with .reveal class
        const revealObs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('visible');
                        revealObs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        document.querySelectorAll('#about .reveal').forEach((el) => revealObs.observe(el));

        // Terminal sequence animation
        const tBody = terminalBodyRef.current;
        if (tBody) {
            const lines = Array.from(tBody.querySelectorAll('.t-line')) as HTMLElement[];
            lines.forEach((l) => {
                l.style.opacity = '0';
                l.style.transform = 'translateX(-10px)';
                l.style.transition = 'opacity .3s ease, transform .3s ease';
            });

            const tObs = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        lines.forEach((l, i) =>
                            setTimeout(() => {
                                l.style.opacity = '1';
                                l.style.transform = 'translateX(0)';
                            }, i * 110)
                        );
                        tObs.disconnect();
                    }
                },
                { threshold: 0.3 }
            );
            tObs.observe(tBody);
        }

        return () => revealObs.disconnect();
    }, []);

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-label">01 — WHO I AM</div>
                <div className="about-grid">
                    <div className="about-text reveal">
                        <h2 className="section-heading">
                            Turning <span className="accent-ai">Data</span> into<br />
                            <span className="accent-chain">Decisions</span>, and Code<br />
                            into <span className="accent-data">Impact</span>
                        </h2>
                        <p>
                            I&apos;m a final-year B.Tech Computer Science student at VIT Andhra Pradesh with a 8.81 CGPA,
                            specializing across four high-demand domains — AI/ML, Data Science, Data Analytics, and
                            Blockchain engineering.
                        </p>
                        <p>
                            I build end-to-end systems: from training neural networks and building semantic search engines,
                            to deploying Ethereum smart contracts and creating civic-tech platforms that serve real
                            communities.
                        </p>
                        <p>
                            As a <strong>Smart India Hackathon 2025 Finalist</strong>, I&apos;ve shipped production-grade work
                            under pressure — and I love doing it.
                        </p>
                        <div className="about-tags">
                            <span className="tag tag-ai">🧠 Machine Learning</span>
                            <span className="tag tag-data">📊 Data Science</span>
                            <span className="tag tag-analytics">📈 Analytics</span>
                            <span className="tag tag-chain">⛓ Smart Contracts</span>
                            <span className="tag tag-ai">🔍 Semantic Search</span>
                            <span className="tag tag-data">👁 Computer Vision</span>
                            <span className="tag tag-chain">🌐 DApps</span>
                            <span className="tag tag-analytics">🗄 SQL / EDA</span>
                        </div>
                    </div>
                    <div className="about-terminal reveal">
                        <div className="terminal-header">
                            <span className="t-btn t-red"></span>
                            <span className="t-btn t-yellow"></span>
                            <span className="t-btn t-green"></span>
                            <span className="t-title">sagar@portfolio ~ </span>
                        </div>
                        <div className="terminal-body" ref={terminalBodyRef}>
                            <div className="t-line">
                                <span className="t-prompt">$</span> <span className="t-cmd">python profile.py</span>
                            </div>
                            <div className="t-line t-output t-json">{'{'}</div>
                            <div className="t-line t-output t-json">
                                {'  '}<span className="t-key">&quot;name&quot;</span>: <span className="t-val">&quot;Sagar Ramesh Dubile&quot;</span>,
                            </div>
                            <div className="t-line t-output t-json">
                                {'  '}<span className="t-key">&quot;focus&quot;</span>: <span className="t-val">[&quot;AI/ML&quot;,&quot;Data Science&quot;,&quot;Blockchain&quot;]</span>,
                            </div>
                            <div className="t-line t-output t-json">
                                {'  '}<span className="t-key">&quot;stack&quot;</span>: <span className="t-val">&quot;Python · TF · Solidity · AWS&quot;</span>,
                            </div>
                            <div className="t-line t-output t-json">
                                {'  '}<span className="t-key">&quot;cgpa&quot;</span>: <span className="t-val">8.81</span>,
                            </div>
                            <div className="t-line t-output t-json">
                                {'  '}<span className="t-key">&quot;hacks&quot;</span>: <span className="t-val">&quot;SIH 2025 Finalist&quot;</span>
                            </div>
                            <div className="t-line t-output t-json">{'}'}</div>
                            <div className="t-line">
                                <span className="t-prompt">$</span> <span className="t-cmd">echo $STATUS</span>
                            </div>
                            <div className="t-line t-output t-green-text">🟢 Open to opportunities</div>
                            <div className="t-line t-blink">
                                <span className="t-prompt">$</span> <span className="t-cursor">▌</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
