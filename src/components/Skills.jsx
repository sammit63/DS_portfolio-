import { motion } from "framer-motion";
import skills from "../data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Technical skills" title="Tools I work with." description="A selection of technologies across programming, analytics and application development. Update this list to reflect your current proficiency." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ title, icon: Icon, items }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-neutral-200 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <Icon size={28} className="mb-5 text-blue-600" />
              <h3 className="mb-5 text-lg font-bold">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-lg bg-neutral-100 px-3 py-2 text-xs font-medium text-neutral-600">{item}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
