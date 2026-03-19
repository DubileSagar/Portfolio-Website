'use client';
import { useEffect } from 'react';

export default function Education() {
    useEffect(() => {
        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    revealObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('#education .reveal').forEach(el => revealObs.observe(el));
        return () => revealObs.disconnect();
    }, []);

    return (
        <section id="education" className="section section-dark">
            <div className="container">
                <div className="section-label">06 — EDUCATION</div>
                <h2 className="section-heading reveal">Academic <span className="accent">Journey</span></h2>

                <div className="edu-grid reveal">
                    <div className="edu-card edu-main">
                        <div className="edu-icon">🎓</div>
                        <div className="edu-content">
                            <h3>B.Tech in Computer Science</h3>
                            <div className="edu-inst">VIT Andhra Pradesh</div>
                            <div className="edu-cgpa"><span className="cgpa-label">CGPA</span><span className="cgpa-value">8.81 / 10</span></div>
                        </div>
                        <div className="edu-badge">Current</div>
                    </div>
                    <div className="edu-card">
                        <div className="edu-icon">📚</div>
                        <div className="edu-content">
                            <h3>12th Science</h3>
                            <div className="edu-inst">Super Thirty Higher Secondary School</div>
                            <div className="edu-cgpa"><span className="cgpa-label">Score</span><span className="cgpa-value">82.67%</span></div>
                        </div>
                    </div>
                    <div className="edu-card">
                        <div className="edu-icon">🏫</div>
                        <div className="edu-content">
                            <h3>10th CBSE</h3>
                            <div className="edu-inst">Podar International School</div>
                            <div className="edu-cgpa"><span className="cgpa-label">Score</span><span className="cgpa-value">95.80%</span></div>
                        </div>
                    </div>
                </div>

                <div className="certs-section reveal">
                    <h3 className="certs-heading">Certifications &amp; Achievements</h3>
                    <div className="certs-grid">
                        <div className="cert-card cert-chain">
                            <div className="cert-icon">🔗</div>
                            <div className="cert-name">IBM Blockchain Developer</div>
                            <div className="cert-issuer">IBM</div>
                        </div>
                        <div className="cert-card cert-aws">
                            <div className="cert-icon">☁️</div>
                            <div className="cert-name">AWS Cloud Foundation</div>
                            <div className="cert-issuer">Amazon Web Services</div>
                        </div>
                        <div className="cert-card cert-aws">
                            <div className="cert-icon">🏗</div>
                            <div className="cert-name">AWS Cloud Architecting</div>
                            <div className="cert-issuer">Amazon Web Services</div>
                        </div>
                        <div className="cert-card cert-highlight">
                            <div className="cert-icon">🥇</div>
                            <div className="cert-name">Smart India Hackathon 2025</div>
                            <div className="cert-issuer">Finalist — Government of India</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
