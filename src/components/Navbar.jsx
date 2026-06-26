import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { personal } from "../data/personal.js";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Achievements", "achievements"],
  ["Contact", "contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/72 shadow-2xl shadow-black/25 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <button
          className="font-display text-lg font-semibold tracking-wide text-white"
          onClick={() => goTo("home")}
        >
          Nir<span className="text-cyan">.</span>Geron
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="text-sm font-medium text-white/70 transition hover:text-cyan"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="btn-primary" href={personal.resumeUrl} download>
            <Download size={17} />
            Download Resume
          </a>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/94 px-5 py-5 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {links.map(([label, id]) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className="rounded-xl px-4 py-3 text-left text-sm font-medium text-white/75 transition hover:bg-white/[0.08] hover:text-cyan"
              >
                {label}
              </button>
            ))}
            <a className="btn-primary mt-2 justify-center" href={personal.resumeUrl} download>
              <Download size={17} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
