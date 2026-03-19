'use client';

import { useEffect } from 'react';

export default function Specializations() {
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
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        document.querySelectorAll('#what-i-do .reveal').forEach((el) => revealObs.observe(el));
        return () => revealObs.disconnect();
    }, []);

    return (
        <section id="what-i-do" className="section section-dark">
            <div className="container">
                <div className="section-label">02 — EXPERTISE</div>
                <h2 className="section-heading reveal">Four Domains, <span className="accent">One Engineer</span></h2>
                <div className="spec-grid reveal">

                    <div className="spec-card spec-ai">
                        <div className="spec-icon-wrap"><span className="spec-icon">🧠</span></div>
                        <h3>AI / Machine Learning</h3>
                        <p>
                            Building end-to-end ML pipelines — from data preprocessing and model training to evaluation and
                            deployment. Specializing in NLP, semantic search, and computer vision systems.
                        </p>
                        <ul className="spec-list">
                            <li>Model Training &amp; Evaluation</li>
                            <li>NLP · Transformers · Embeddings</li>
                            <li>Facial Recognition (94% accuracy)</li>
                            <li>Fuzzy C-Means Clustering</li>
                        </ul>
                        <div className="spec-tools">
                            <span>TensorFlow</span><span>PyTorch</span><span>Scikit-learn</span><span>Sentence Transformers</span>
                        </div>
                    </div>

                    <div className="spec-card spec-data">
                        <div className="spec-icon-wrap"><span className="spec-icon">📊</span></div>
                        <h3>Data Science</h3>
                        <p>
                            Designing and implementing data pipelines, semantic corpora, and vector databases. Applying
                            statistical methods and unsupervised learning to derive meaningful insights from complex
                            datasets.
                        </p>
                        <ul className="spec-list">
                            <li>EDA &amp; Statistical Analysis</li>
                            <li>Vector Search · ChromaDB</li>
                            <li>PCA &amp; Dimensionality Reduction</li>
                            <li>Cosine Similarity &amp; Retrieval</li>
                        </ul>
                        <div className="spec-tools">
                            <span>Pandas</span><span>NumPy</span><span>ChromaDB</span><span>Jupyter</span>
                        </div>
                    </div>

                    <div className="spec-card spec-analytics">
                        <div className="spec-icon-wrap"><span className="spec-icon">📈</span></div>
                        <h3>Data Analytics</h3>
                        <p>
                            Creating KPI dashboards, district-wise analytics, and SLA tracking systems. Turning raw civic and
                            operational data into clarity for decision-makers via interactive visualizations.
                        </p>
                        <ul className="spec-list">
                            <li>Power BI KPI Dashboards</li>
                            <li>District-wise Analytics (JanVAni)</li>
                            <li>Data Cleaning &amp; Transformation</li>
                            <li>SLA &amp; Lifecycle Tracking</li>
                        </ul>
                        <div className="spec-tools">
                            <span>Power BI</span><span>Excel</span><span>SQL</span><span>Python</span>
                        </div>
                    </div>

                    <div className="spec-card spec-chain">
                        <div className="spec-icon-wrap"><span className="spec-icon">⛓</span></div>
                        <h3>Blockchain Engineering</h3>
                        <p>
                            Developing and auditing Ethereum smart contracts with gas optimization and security-first design.
                            Building decentralized application workflows and contract validation pipelines.
                        </p>
                        <ul className="spec-list">
                            <li>Solidity Smart Contracts</li>
                            <li>Gas Optimization &amp; Auditing</li>
                            <li>DApp Architecture &amp; Design</li>
                            <li>Unit Testing &amp; Validation</li>
                        </ul>
                        <div className="spec-tools">
                            <span>Solidity</span><span>Ethereum</span><span>Hardhat</span><span>Remix</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
