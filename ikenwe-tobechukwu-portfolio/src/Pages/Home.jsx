import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

export default function Home() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section: The first thing people see */}
      <Hero />

      {/* Projects Section: Your work grid */}
      <section id="projects" className="py-12 bg-white">
        <Projects />
      </section>

      {/* Contact Section: Let people reach out */}
      <section id="contact" className="py-12 bg-gray-50">
        <Contacts />
      </section>
    </div>
  );
}