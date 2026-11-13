import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import profile from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Contact" title="Let's build something meaningful ." description="I'm interested in opportunities where I can apply my programming, analytical and problem-solving skills. Feel free to get in touch." />
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500">
              Send an email <Send size={16} />
            </a>
          </div>
          <div className="flex flex-col justify-center gap-7">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-4 text-neutral-300 transition hover:text-white"><Mail className="text-blue-400" />{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-neutral-300 transition hover:text-white"><Github className="text-blue-400" />GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-neutral-300 transition hover:text-white"><Linkedin className="text-blue-400" />LinkedIn</a>
            <div className="flex items-center gap-4 text-neutral-300"><MapPin className="text-blue-400" />{profile.location}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
