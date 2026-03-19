export default function Footer() {
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-logo">
                    <span className="logo-bracket">&lt;</span>SRD<span className="logo-bracket">/&gt;</span>
                </div>
                <div className="footer-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-copy">
                    © {new Date().getFullYear()} Sagar Ramesh Dubile. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
