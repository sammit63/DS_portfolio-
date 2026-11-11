import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Education" title="My academic background." description="The academic foundation behind my technical journey." />
        <div className="max-w-2xl rounded-2xl border border-neutral-200 p-7">
          <div className="flex items-start gap-5">
            <div className="rounded-xl bg-blue-50 p-4">
              <GraduationCap size={30} className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold">B.Tech in Computer Science and Engineering</h3>
              <p className="mt-2 text-neutral-600">Sambalpur University Institute of Information Technology</p>
              <p className="mt-2 text-sm text-neutral-500">Burla, Odisha</p>
              <p className="mt-4 text-sm leading-6 text-neutral-500">7.5 GPA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
