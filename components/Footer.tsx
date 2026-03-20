'use client';

export default function Footer() {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-logo">
                    <span className="logo-bracket">&lt;</span>SRD<span className="logo-bracket">/&gt;</span>
                </div>
                <div className="footer-links">
                    <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
                    <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
                </div>
                <div className="footer-copy">
                    © {new Date().getFullYear()} Sagar Ramesh Dubile. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
