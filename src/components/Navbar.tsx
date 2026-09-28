import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-border bg-background/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Início">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-secondary font-mono text-xs font-medium transition-colors group-hover:border-primary/60">
            DA
          </span>
          <span className="text-sm font-medium tracking-tight">Diêgo Axel</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Vamos conversar
          </a>
          <button
            className="grid h-9 w-9 place-items-center rounded-lg border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="container mx-auto overflow-hidden md:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block border-t border-border py-4 text-lg">
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <motion.div className="absolute inset-x-0 bottom-0 h-px origin-left bg-primary" style={{ scaleX: progress }} />
    </motion.header>
  );
};

export default Navbar;
