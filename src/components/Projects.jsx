import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import projects from "../data/projects";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected work" title="Projects I've worked on." description=" " />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${project.visual}`}>
                <span className="text-4xl font-extrabold tracking-[0.2em] text-neutral-700/70">{project.symbol}</span>
              </div>
              <div className="p-7">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{project.category}</span>
                  <span className="text-sm text-neutral-400">{project.number}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-950">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-500">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-md bg-neutral-100 px-2.5 py-1.5 text-xs text-neutral-600">{tech}</span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-neutral-100 pt-5">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 transition hover:text-blue-600">
                      <Github size={17} /> Source code <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                      Live demo <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
