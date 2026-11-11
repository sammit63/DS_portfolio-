import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-2xl"
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-7 text-neutral-500">{description}</p>
      )}
    </motion.div>
  );
}
