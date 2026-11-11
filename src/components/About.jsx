import { motion } from "framer-motion";
import { BarChart3, Code2, Lightbulb, Target } from "lucide-react";
import profile from "../data/profile";
import SectionHeading from "./SectionHeading";

const highlights = [
  { icon: Code2, title: "Python", text: "Programming & automation" },
  { icon: BarChart3, title: "Analytics", text: "Exploring data & insights" },
  { icon: Lightbulb, title: "Problem solving", text: "Practical technical solutions" },
  { icon: Target, title: "Continuous learning", text: "Building skills through projects" },
];

export default function About() {
  return (
    <section id="about" className="bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About me" title="A little about my journey." description="My interests, approach and what motivates me." />
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="mb-4 text-2xl font-bold tracking-tight">Turning data into meaningful insights.</h3>
            <p className="leading-8 text-neutral-600">{profile.about}</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-neutral-200 bg-white p-5">
                <Icon size={24} className="mb-4 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-neutral-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
