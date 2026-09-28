import { ArrowUp } from "lucide-react";
import { socials } from "@/data/portfolio";

const Footer = () => (
  <footer className="border-t border-border/60">
    <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Diêgo Axel · Desenvolvedor Full Stack
      </p>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href={socials.github} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-foreground">GitHub</a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-foreground">LinkedIn</a>
        <a href="#top" className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-foreground/40 hover:text-foreground" aria-label="Voltar ao topo">
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
