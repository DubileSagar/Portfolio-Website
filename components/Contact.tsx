'use client';
import { useState, useEffect } from 'react';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    revealObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('#contact .reveal').forEach(el => revealObs.observe(el));
        return () => revealObs.disconnect();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            // Submitting via our internal Next.js API route
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(data)),
            });

            if (res.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="section-label">07 — GET IN TOUCH</div>
                <h2 className="section-heading reveal">Let&apos;s Build Something <span className="accent">Together</span></h2>

                <div className="contact-layout reveal">
                    <div className="contact-info">
                        <p className="contact-sub">Whether it&apos;s an AI pipeline, a data science project, or a blockchain system — I&apos;m all ears. Drop me a message and I&apos;ll get back within 24 hours.</p>
                        <div className="cinfo-cards">
                            <a href="mailto:dubile.sagarr@gmail.com" className="cinfo-card">
                                <span className="cinfo-icon">📧</span>
                                <div>
                                    <div className="cinfo-label">Email</div>
                                    <div className="cinfo-val">dubile.sagarr@gmail.com</div>
                                </div>
                            </a>
                            <a href="tel:+917588348800" className="cinfo-card">
                                <span className="cinfo-icon">📱</span>
                                <div>
                                    <div className="cinfo-label">Phone</div>
                                    <div className="cinfo-val">+91 75883 48800</div>
                                </div>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cinfo-card">
                                <span className="cinfo-icon">💼</span>
                                <div>
                                    <div className="cinfo-label">LinkedIn</div>
                                    <div className="cinfo-val">Connect with me →</div>
                                </div>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="cinfo-card">
                                <span className="cinfo-icon">🐙</span>
                                <div>
                                    <div className="cinfo-label">GitHub</div>
                                    <div className="cinfo-val">View my code →</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="cf-name">Full Name</label>
                                <input type="text" id="cf-name" name="name" placeholder="Sagar Ramesh" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cf-phone">Phone Number</label>
                                <input type="tel" id="cf-phone" name="phone" placeholder="+91 XXXXX XXXXX" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cf-email">Email Address</label>
                            <input type="email" id="cf-email" name="email" placeholder="you@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cf-subject">Subject</label>
                            <input type="text" id="cf-subject" name="subject" placeholder="AI project, internship, collaboration..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cf-message">Message</label>
                            <textarea id="cf-message" name="message" rows={5} placeholder="Tell me what you have in mind..." required></textarea>
                        </div>

                        <button type="submit" className="form-submit" disabled={status === 'loading'}>
                            {status === 'loading' ? 'Sending…' : 'Send Message →'}
                        </button>

                        {status === 'success' && (
                            <div className="form-success">✅ Message sent! I&apos;ll reply within 24 hours.</div>
                        )}
                        {status === 'error' && (
                            <div className="form-error">❌ Something went wrong. Please email me directly.</div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
