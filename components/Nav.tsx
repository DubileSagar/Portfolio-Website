'use client';

import { useState, useEffect } from 'react';

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);

            const sections = ['about', 'what-i-do', 'skills', 'projects', 'education', 'contact'];
            let current = '';
            for (const s of sections) {
                const el = document.getElementById(s);
                if (el && window.scrollY >= el.offsetTop - 130) {
                    current = s;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setMenuOpen(false);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav id="nav" className={scrolled ? 'scrolled' : ''}>
                <div className="nav-logo">
                    <span className="logo-bracket">&lt;</span>SRD<span className="logo-bracket">/&gt;</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => handleClick(e, 'about')}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#what-i-do" className={activeSection === 'what-i-do' ? 'active' : ''} onClick={(e) => handleClick(e, 'what-i-do')}>
                            Expertise
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={(e) => handleClick(e, 'skills')}>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => handleClick(e, 'projects')}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={(e) => handleClick(e, 'education')}>
                            Education
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => handleClick(e, 'contact')}>
                            Contact
                        </a>
                    </li>
                </ul>
                <button className="nav-menu-btn" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
                <ul>
                    <li><a href="#about" onClick={(e) => handleClick(e, 'about')} className="mobile-link">About</a></li>
                    <li><a href="#what-i-do" onClick={(e) => handleClick(e, 'what-i-do')} className="mobile-link">Expertise</a></li>
                    <li><a href="#skills" onClick={(e) => handleClick(e, 'skills')} className="mobile-link">Skills</a></li>
                    <li><a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="mobile-link">Projects</a></li>
                    <li><a href="#education" onClick={(e) => handleClick(e, 'education')} className="mobile-link">Education</a></li>
                    <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="mobile-link">Contact</a></li>
                </ul>
            </div>
        </>
    );
}
