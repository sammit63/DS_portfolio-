import profile from "../data/profile";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 px-6 pb-8 text-center text-sm text-neutral-500">
      <div className="mx-auto max-w-6xl border-t border-neutral-800 pt-7">
        © {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
      </div>
    </footer>
  );
}
