"use client";

import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

export default function Home() {
  return (
    <>
      <header className="relative z-50">
        <Navbar />
      </header>
      <main className="relative z-40">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
