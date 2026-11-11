import { useState } from "react";
import { Menu, X } from "lucide-react";
import profile from "../data/profile";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-100 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-extrabold tracking-tight text-neutral-950">
          {profile.name.split(" ")[0]}<span className="text-blue-600">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-neutral-600 transition hover:text-blue-600">
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 md:inline-flex">
          Let's talk
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-neutral-800 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-neutral-100 bg-white px-6 py-4 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-neutral-700"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
