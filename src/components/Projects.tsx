import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, Check, Lock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useRef } from "react";
import { featuredProjects, projects, type Project } from "@/data/portfolio";
import { gsap, motionQuery, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { cardReveal, viewportOnce } from "@/lib/motion";

const allProjects = [...featuredProjects, ...projects];

/** Space kept above a pinned card, clearing the fixed navbar. */
const STACK_TOP = 96;

/* Browser-window frame around a project screenshot */
const BrowserFrame = ({ project }: { project: Project }) => (
  <div className="overflow-hidden rounded-xl border border-border bg-secondary/60">
    <div className="flex items-center gap-1.5 border-b border-border px-3 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-muted" />
      <span className="h-2.5 w-2.5 rounded-full bg-muted" />
      <span className="h-2.5 w-2.5 rounded-full bg-muted" />
      <span className="ml-3 truncate font-mono text-[10px] text-muted-foreground">
        {project.demo ? project.demo.replace(/^https?:\/\//, "").replace(/\/$/, "") : project.category}
      </span>
    </div>
    {project.image ? (
      <div className="relative overflow-hidden">
        {/* Screenshots keep their natural aspect ratio so nothing gets cropped */}
        <img
          src={project.image}
          alt={`Captura de tela do projeto ${project.title}`}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
        />
      </div>
    ) : (
      <div className="relative aspect-[16/10] overflow-hidden">
        <DashboardArt />
      </div>
    )}
  </div>
);

/* Illustrative chart for projects whose real screens hold client data */
const DashboardArt = () => {
  const bars = [38, 52, 44, 61, 58, 72, 66, 80, 76, 88, 84, 94];
  return (
    <div className="flex h-full w-full flex-col gap-3 bg-gradient-to-br from-card to-secondary p-5">
      <div className="grid grid-cols-3 gap-3">
        {["Cana processada", "Açúcar", "Etanol"].map((k, i) => (
          <div key={k} className="rounded-lg border border-border bg-background/40 p-2.5">
            <p className="truncate font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{k}</p>
            <div className="mt-2 h-2 rounded bg-foreground/80" style={{ width: `${70 - i * 12}%` }} />
          </div>
        ))}
      </div>
      <div className="flex flex-1 items-end gap-1.5 rounded-lg border border-border bg-background/40 p-3">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-primary/30 to-primary transition-all duration-700 group-hover:opacity-100"
            style={{ height: `${h}%`, opacity: 0.55 + i * 0.03 }}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectLink = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
      >
        {project.demoLabel ?? "Ver projeto ao vivo"} <ArrowUpRight className="h-4 w-4" />
      </a>
    )}
    {project.confidential && (
      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        <Lock className="h-3.5 w-3.5" /> Projeto de cliente · código privado
      </span>
    )}
  </div>
);

/* Card surface with a spotlight that tracks the cursor */
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const background = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, hsl(var(--primary) / 0.08), transparent 70%)`;

  return (
    <motion.article
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onMouseLeave={() => {
        x.set(-400);
        y.set(-400);
      }}
      className={`surface group relative overflow-hidden transition-colors duration-500 hover:border-foreground/15 lg:bg-card ${className}`}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background }} />
      <div className="relative">{children}</div>
    </motion.article>
  );
};

const FeaturedProject = ({ project, index }: { project: Project; index: number }) => (
  <SpotlightCard className="p-5 sm:p-8 lg:p-10">
    <div className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <BrowserFrame project={project} />

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-border" />
          <span className="font-mono text-xs text-muted-foreground">{project.category}</span>
          <span className="font-mono text-xs text-muted-foreground/60">{project.year}</span>
          {project.status && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {project.status}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-3xl sm:text-4xl">{project.title}</h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p>

        {project.highlights && (
          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-foreground/85">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {project.role && (
          <p className="mt-6 border-l-2 border-primary/60 pl-4 text-sm text-muted-foreground">
            <span className="text-foreground">Meu papel:</span> {project.role}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        <div className="mt-8">
          <ProjectLink project={project} />
        </div>
      </div>
    </div>
  </SpotlightCard>
);

const Projects = () => {
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: each card pins near the top and the next one slides over it,
      // while the covered card shrinks and dims into the background.
      mm.add(motionQuery.desktop, () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-stack=card]", listRef.current);
        const last = cards[cards.length - 1];

        cards.slice(0, -1).forEach((card, i) => {
          // Cards taller than the viewport pin by their bottom edge so nothing gets hidden.
          const fits = () => card.offsetHeight <= window.innerHeight - STACK_TOP - 24;

          ScrollTrigger.create({
            trigger: card,
            start: () => (fits() ? `top top+=${STACK_TOP}` : "bottom bottom-=24"),
            endTrigger: last,
            end: `top top+=${STACK_TOP}`,
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });

          // Dim with an opaque shade rather than opacity, so cards underneath never show through.
          gsap
            .timeline({
              scrollTrigger: {
                trigger: cards[i + 1],
                start: "top bottom",
                end: `top top+=${STACK_TOP}`,
                scrub: true,
                invalidateOnRefresh: true,
              },
            })
            .to(card.querySelector("[data-stack=inner]"), { scale: 0.92, transformOrigin: "center top", ease: "none" }, 0)
            .to(card.querySelector("[data-stack=shade]"), { opacity: 0.7, ease: "none" }, 0);
        });

        // Once the last card takes its place, the covered cards would otherwise stick out
        // below it (they are taller) as the stack scrolls away, so fade them out.
        gsap.to(
          cards.slice(0, -1).map((card) => card.querySelector("[data-stack=inner]")),
          {
            autoAlpha: 0,
            duration: 0.35,
            ease: "power1.out",
            scrollTrigger: {
              trigger: last,
              start: `top top+=${STACK_TOP}`,
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          }
        );

        // Lazy screenshots change card heights once they load: recompute positions.
        const images = gsap.utils.toArray<HTMLImageElement>("img", listRef.current);
        const refresh = () => ScrollTrigger.refresh();
        images.forEach((img) => !img.complete && img.addEventListener("load", refresh, { once: true }));
        return () => images.forEach((img) => img.removeEventListener("load", refresh));
      });

      return () => mm.revert();
    },
    { scope: listRef }
  );

  return (
    <section id="projetos" className="py-24 sm:py-32">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Projetos selecionados"
          title={<>Trabalhos com <em className="font-serif font-normal">impacto real</em></>}
          description="Sistemas e sites em uso por instituições, empresas e profissionais — escolhidos pelo problema que resolvem, não só pela aparência."
        />

        <div ref={listRef} className="mt-16 space-y-6">
          {allProjects.map((p, i) => (
            <div key={p.slug} data-stack="card">
              <div data-stack="inner" className="relative">
                <FeaturedProject project={p} index={i} />
                <div data-stack="shade" aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl bg-background opacity-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
