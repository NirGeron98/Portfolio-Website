import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import { personal } from "../data/personal.js";

export default function Contact() {
  return (
    <section id="contact" className="section-wrap pb-16">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="contact-panel">
          <SectionTitle eyebrow="Contact" title="Let's Build Something Great">
            I am always open to interesting software engineering opportunities, backend
            and cloud projects, data-oriented systems, and meaningful product ideas.
          </SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            <a className="contact-row" href={`mailto:${personal.email}`}>
              <Mail size={20} />
              {personal.email}
            </a>
            <a className="contact-row" href={`tel:${personal.phone}`}>
              <Phone size={20} />
              {personal.phone}
            </a>
            <a className="contact-row" href={personal.githubUrl} target="_blank" rel="noreferrer">
              <Github size={20} />
              {personal.githubUser}
            </a>
            <a className="contact-row" href={personal.linkedinUrl} target="_blank" rel="noreferrer">
              <Linkedin size={20} />
              {personal.linkedinLabel}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a className="btn-primary" href={`mailto:${personal.email}`}>
              <Mail size={18} />
              Send Email
            </a>
            <a className="btn-secondary" href={personal.githubUrl} target="_blank" rel="noreferrer">
              <Github size={18} />
              GitHub
            </a>
            <a className="btn-secondary" href={personal.linkedinUrl} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a className="btn-secondary" href={personal.resumeUrl} download>
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
