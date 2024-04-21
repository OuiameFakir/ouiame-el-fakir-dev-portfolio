"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from "./components/contact";
import Projects from "./components/projects";
import About from "./components/about";
import Skills from "./components/skills";
import Navbar from "./components/Navbar";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <main>
      <Navbar lng={lng} />

      <section id="about" className="section">
        <About lng={lng} />
      </section>
      <section id="projects" className="section">
        <Projects lng={lng} />
      </section>
      <section id="skills" className="section">
        <Skills lng={lng} />
      </section>
      <section id="contact" className="section">
        <Contact lng={lng} />
      </section>
    </main>
  );
}
