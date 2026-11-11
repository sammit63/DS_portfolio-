import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import profile from "../data/profile";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-[92vh] items-center px-6 pb-20 pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.35fr_0.65fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-medium text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Open to opportunities
          </div>

          <p className="mb-3 text-lg font-medium text-neutral-500">Hello, I'm</p>
          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
            {profile.name}<span className="text-blue-600">.</span>
          </h1>
          <h2 className="mt-5 text-xl font-semibold text-neutral-700 sm:text-2xl">
            {profile.role}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-neutral-500">
            {profile.introduction}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600">
              Explore projects <ArrowDown size={16} />
            </a>
            <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3.5 text-sm font-semibold text-neutral-800 transition hover:border-neutral-950">
              Resume <Download size={16} />
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-neutral-500 transition hover:text-blue-600"><Github size={21} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-neutral-500 transition hover:text-blue-600"><Linkedin size={21} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-neutral-500 transition hover:text-blue-600"><Mail size={21} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hidden justify-center md:flex"
        >
          <div className="flex h-72 w-72 items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* <div className="flex h-52 w-52 items-center justify-center rounded-full border border-white bg-white shadow-xl">
              <span className="text-7xl font-extrabold tracking-tight text-blue-600">SB</span>
            </div> */}
            <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-xl">
              <img
                  src="/images/my_photo_ai.png"
                  alt="Sammit Bhoi"
                  className="h-full w-full object-cover "
                  style={{ objectPosition: "25% 39%" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
