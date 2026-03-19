'use client';
import { useEffect, useCallback } from 'react';

export default function Projects() {
    useEffect(() => {
        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    revealObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('#projects .reveal').forEach(el => revealObs.observe(el));
        return () => revealObs.disconnect();
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const r = card.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width - 0.5;
        const cy = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-6px) rotateY(${cx * 7}deg) rotateX(${-cy * 7}deg)`;
    }, []);

    const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        card.style.transform = '';
    }, []);

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-label">05 — PROJECTS</div>
                <h2 className="section-heading reveal">Things I&apos;ve <span className="accent">Built</span></h2>

                <div className="projects-grid">
                    {/* JanVAni */}
                    <div className="project-card reveal proj-ai-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <div className="proj-domain-bar bar-ai"></div>
                        <div className="proj-top-row">
                            <div className="proj-number">01</div>
                            <div className="proj-domains">
                                <span className="pd-badge pd-ai">AI/ML</span>
                                <span className="pd-badge pd-analytics">Analytics</span>
                            </div>
                        </div>
                        <h3 className="proj-title">JanVAni</h3>
                        <p className="proj-subtitle">AI-Powered Civic Issue Reporting &amp; Resolution Platform</p>
                        <p className="proj-desc">Smart civic grievance platform with real-time tracking, map-based visualization, and AI autofill — improving prioritization by 45% and engagement by 60%.</p>
                        <div className="proj-impact">
                            <div className="impact-item">
                                <span className="impact-value" style={{ color: 'var(--cyan)' }}>45%</span>
                                <span className="impact-label">Better Prioritization</span>
                            </div>
                            <div className="impact-item">
                                <span className="impact-value" style={{ color: 'var(--orange)' }}>60%</span>
                                <span className="impact-label">More Engagement</span>
                            </div>
                            <div className="impact-item">
                                <span className="impact-value" style={{ color: 'var(--green)' }}>35%</span>
                                <span className="impact-label">Faster Resolution</span>
                            </div>
                        </div>
                        <ul className="proj-bullets">
                            <li>RBAC dashboards with district-wise analytics</li>
                            <li>AI autofill for issue categorization</li>
                            <li><strong>Smart India Hackathon 2025 — Finalist 🏆</strong></li>
                        </ul>
                        <div className="proj-stack">
                            <span>Python</span><span>FastAPI</span><span>AI</span><span>RBAC</span><span>Maps</span>
                        </div>
                    </div>

                    {/* Neural Semantic Search */}
                    <div className="project-card reveal proj-data-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <div className="proj-domain-bar bar-data"></div>
                        <div className="proj-top-row">
                            <div className="proj-number">02</div>
                            <div className="proj-domains">
                                <span className="pd-badge pd-data">Data Science</span>
                                <span className="pd-badge pd-ai">NLP</span>
                            </div>
                        </div>
                        <h3 className="proj-title">Neural Semantic Search</h3>
                        <p className="proj-subtitle">Transformer-powered semantic retrieval at scale</p>
                        <p className="proj-desc">Semantic search engine using Sentence Transformers, ChromaDB, and cosine similarity with PCA &amp; Fuzzy C-Means clustering for intelligent topic organization.</p>

                        <div className="search-demo-inline">
                            <div className="sdemo-query">
                                <span className="sdemo-icon">🔍</span>
                                <span className="sdemo-text">&quot;semantic document retrieval...&quot;</span>
                            </div>
                            <div className="sdemo-results">
                                <div className="sdemo-row">
                                    <div className="sdemo-bar" style={{ width: '93%' }}></div><span>93%</span>
                                </div>
                                <div className="sdemo-row">
                                    <div className="sdemo-bar" style={{ width: '81%', opacity: 0.7 }}></div><span>81%</span>
                                </div>
                                <div className="sdemo-row">
                                    <div className="sdemo-bar" style={{ width: '67%', opacity: 0.5 }}></div><span>67%</span>
                                </div>
                            </div>
                        </div>

                        <ul className="proj-bullets">
                            <li>Custom semantic cache for low-latency queries</li>
                            <li>FastAPI service with performance monitoring</li>
                            <li>Soft topic assignment via Fuzzy C-Means</li>
                        </ul>
                        <div className="proj-stack">
                            <span>Transformers</span><span>ChromaDB</span><span>FastAPI</span><span>PCA</span>
                        </div>
                    </div>

                    {/* TraceID */}
                    <div className="project-card reveal proj-cv-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <div className="proj-domain-bar bar-green"></div>
                        <div className="proj-top-row">
                            <div className="proj-number">03</div>
                            <div className="proj-domains">
                                <span className="pd-badge pd-cv">Computer Vision</span>
                                <span className="pd-badge pd-ai">AI/ML</span>
                            </div>
                        </div>
                        <h3 className="proj-title">TraceID</h3>
                        <p className="proj-subtitle">Frame-wise CCTV Monitoring System</p>
                        <p className="proj-desc">Python facial recognition system achieving 94% accuracy for identifying missing individuals from CCTV feeds with automated detection and timestamp logging.</p>
                        <div className="proj-impact">
                            <div className="impact-item">
                                <span className="impact-value" style={{ color: 'var(--green)' }}>94%</span>
                                <span className="impact-label">Accuracy</span>
                            </div>
                            <div className="impact-item">
                                <span className="impact-value" style={{ color: 'var(--cyan)' }}>70%</span>
                                <span className="impact-label">Less Manual Effort</span>
                            </div>
                        </div>
                        <ul className="proj-bullets">
                            <li>Frame-wise detection with timestamp logging</li>
                            <li>Optimized face-matching pipeline — real-time</li>
                            <li>Automated detection reducing manual work by 70%</li>
                        </ul>
                        <div className="proj-stack">
                            <span>Python</span><span>OpenCV</span><span>Face Recognition</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
