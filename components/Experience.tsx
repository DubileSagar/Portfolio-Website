'use client';
import { useEffect } from 'react';

export default function Experience() {
    useEffect(() => {
        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    revealObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('#experience .reveal').forEach(el => revealObs.observe(el));
        return () => revealObs.disconnect();
    }, []);

    return (
        <section id="experience" className="section section-dark">
            <div className="container">
                <div className="section-label">04 — EXPERIENCE</div>
                <h2 className="section-heading reveal">Where I&apos;ve <span className="accent">Worked</span></h2>

                <div className="timeline reveal">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-card">
                            <div className="tc-header">
                                <div>
                                    <h3 className="tc-title">Blockchain Engineer Intern</h3>
                                    <div className="tc-company">Shamgar Software Solutions</div>
                                </div>
                                <div className="tc-meta">
                                    <span className="tc-badge">Remote, India</span>
                                    <span className="tc-date">Nov 2025 – Mar 2026</span>
                                </div>
                            </div>
                            <ul className="tc-points">
                                <li>Developed and reviewed Ethereum smart contracts with focus on <strong>secure logic</strong> and gas optimization</li>
                                <li>Supported decentralized application workflows and blockchain solution design</li>
                                <li>Designed smart contract modules with <strong>vulnerability assessment</strong> and comprehensive testing</li>
                                <li>Implemented unit testing and contract validation pipelines to prevent logic vulnerabilities</li>
                            </ul>
                            <div className="tc-tags">
                                <span className="tag-chain-badge">Solidity</span>
                                <span className="tag-chain-badge">Ethereum</span>
                                <span className="tag-chain-badge">Hardhat</span>
                                <span className="tag-chain-badge">Smart Contracts</span>
                                <span className="tag-chain-badge">DApps</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
