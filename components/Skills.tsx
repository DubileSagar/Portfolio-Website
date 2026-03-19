'use client';

import { useState, useEffect, useRef } from 'react';

const skillsData = [
    // AI/ML
    { cat: 'ai', icon: '🔥', name: 'TensorFlow', sfClass: 'sf-ai', w: '88%' },
    { cat: 'ai', icon: '⚡', name: 'PyTorch', sfClass: 'sf-ai', w: '82%' },
    { cat: 'ai', icon: '🤖', name: 'Scikit-learn', sfClass: 'sf-ai', w: '85%' },
    { cat: 'ai', icon: '💬', name: 'NLP / Transformers', sfClass: 'sf-ai', w: '80%' },
    { cat: 'ai', icon: '👁', name: 'Computer Vision', sfClass: 'sf-ai', w: '78%' },
    // Data Science
    { cat: 'data', icon: '🐼', name: 'Pandas / NumPy', sfClass: 'sf-data', w: '90%' },
    { cat: 'data', icon: '🔍', name: 'ChromaDB', sfClass: 'sf-data', w: '77%' },
    { cat: 'data', icon: '📐', name: 'PCA / Clustering', sfClass: 'sf-data', w: '80%' },
    { cat: 'data', icon: '📓', name: 'Jupyter Notebooks', sfClass: 'sf-data', w: '88%' },
    // Analytics
    { cat: 'analytics', icon: '📊', name: 'Power BI', sfClass: 'sf-analytics', w: '82%' },
    { cat: 'analytics', icon: '🗄️', name: 'SQL', sfClass: 'sf-analytics', w: '80%' },
    { cat: 'analytics', icon: '🧹', name: 'Data Cleaning / EDA', sfClass: 'sf-analytics', w: '85%' },
    { cat: 'analytics', icon: '📈', name: 'KPI Dashboards', sfClass: 'sf-analytics', w: '78%' },
    // Blockchain
    { cat: 'blockchain', icon: '📝', name: 'Solidity', sfClass: 'sf-chain', w: '87%' },
    { cat: 'blockchain', icon: '🔷', name: 'Ethereum / DApps', sfClass: 'sf-chain', w: '85%' },
    { cat: 'blockchain', icon: '🛠', name: 'Hardhat / Remix', sfClass: 'sf-chain', w: '82%' },
    // Languages
    { cat: 'dev', icon: '🐍', name: 'Python', sfClass: 'sf-ai', w: '92%' },
    { cat: 'dev', icon: '☕', name: 'Java', sfClass: 'sf-ai', w: '70%' },
    { cat: 'dev', icon: '⚡', name: 'FastAPI / n8n', sfClass: 'sf-data', w: '78%' },
    { cat: 'dev', icon: '☁️', name: 'AWS', sfClass: 'sf-analytics', w: '75%' },
];

export default function Skills() {
    const [activeCat, setActiveCat] = useState('all');
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Reveal headers
        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    revealObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('#skills .reveal').forEach(el => revealObs.observe(el));

        // Skill bar animation
        const sg = gridRef.current;
        if (sg) {
            const skillObs = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    sg.querySelectorAll('.skill-fill').forEach((b) => b.classList.add('animate'));
                    skillObs.disconnect();
                }
            }, { threshold: 0.15 });
            skillObs.observe(sg);
            return () => skillObs.disconnect();
        }
    }, [activeCat]); // Re-trigger potentially if skills change visibility

    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-label">03 — TECH STACK</div>
                <h2 className="section-heading reveal">Tools &amp; <span className="accent">Technologies</span></h2>

                <div className="skills-categories reveal">
                    <button className={`skill-cat-btn ${activeCat === 'all' ? 'active' : ''}`} onClick={() => setActiveCat('all')}>All</button>
                    <button className={`skill-cat-btn ${activeCat === 'ai' ? 'active' : ''}`} onClick={() => setActiveCat('ai')}>AI / ML</button>
                    <button className={`skill-cat-btn ${activeCat === 'data' ? 'active' : ''}`} onClick={() => setActiveCat('data')}>Data Science</button>
                    <button className={`skill-cat-btn ${activeCat === 'analytics' ? 'active' : ''}`} onClick={() => setActiveCat('analytics')}>Analytics</button>
                    <button className={`skill-cat-btn ${activeCat === 'blockchain' ? 'active' : ''}`} onClick={() => setActiveCat('blockchain')}>Blockchain</button>
                    <button className={`skill-cat-btn ${activeCat === 'dev' ? 'active' : ''}`} onClick={() => setActiveCat('dev')}>Languages</button>
                </div>

                <div className="skills-grid reveal" id="skills-grid" ref={gridRef}>
                    {skillsData.filter(s => activeCat === 'all' || s.cat === activeCat).map((skill, idx) => (
                        <div key={idx} className="skill-card" data-cat={skill.cat}>
                            <div className="skill-icon">{skill.icon}</div>
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-bar">
                                <div className={`skill-fill ${skill.sfClass} animate`} style={{ '--w': skill.w } as React.CSSProperties}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
