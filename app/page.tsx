import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Specializations from '@/components/Specializations';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BgCanvas from '@/components/BgCanvas';
import CursorGlow from '@/components/CursorGlow';

export default function Home() {
    return (
        <>
            <CursorGlow />
            <BgCanvas />
            <Nav />
            <main>
                <Hero />
                <Marquee />
                <About />
                <Specializations />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
