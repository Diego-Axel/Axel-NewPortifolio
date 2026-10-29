import { ArrowDownRight, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { useRef } from "react";
import avatarImage from "@/assets/avatar.jpg";
import Magnetic from "@/components/ui/Magnetic";
import { socials } from "@/data/portfolio";
import { gsap, motionQuery, SplitText, useGSAP } from "@/lib/gsap";

const headline = ["Construo sistemas", "web que resolvem", "problemas reais."];

const stats = [
  { value: "UFRN", label: "Sistemas de Informação" },
  { value: "2024", label: "Atuando no mercado" },
  { value: "Full Stack", label: "Do banco à interface" },
];

const marquee = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "Python", "Django", "Prisma",
  "PostgreSQL", "Supabase", "Tailwind CSS", "Power BI", "Vitest", "Docker",
];

const Hero = () => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(motionQuery.ok, () => {
        const q = gsap.utils.selector(ref);

        // Headline: plain lines are split into characters that rise out of a mask.
        // The gradient line is animated whole, since splitting would break the gradient.
        const split = SplitText.create(q("[data-split]"), { type: "words,chars" });

        const tl = gsap.timeline({ defaults: { ease: "expo.out" }, delay: 0.15 });
        tl.from(q("[data-hero=badge]"), { y: 20, autoAlpha: 0, duration: 0.8 })
          .from(split.chars, { yPercent: 115, duration: 1.1, stagger: 0.018 }, "-=0.5")
          .from(q("[data-hero=accent]"), { yPercent: 115, duration: 1.2 }, "-=0.85")
          .from(q("[data-hero=photo]"), { clipPath: "inset(100% 0% 0% 0% round 28px)", duration: 1.6, ease: "expo.inOut" }, 0.2)
          .from(q("[data-hero=photo-img]"), { scale: 1.35, duration: 2, ease: "expo.out" }, 0.6)
          .from(q("[data-hero=fade]"), { y: 28, autoAlpha: 0, duration: 1, stagger: 0.1 }, "-=1.3")
          .from(q("[data-hero=marquee]"), { autoAlpha: 0, duration: 1.2 }, "-=0.8");

        // Leaving the hero: photo drifts down, content fades out.
        gsap.to(q("[data-hero=photo-wrap]"), {
          y: 90,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(q("[data-hero=content]"), {
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top top", end: "70% top", scrub: true },
        });

        return () => split.revert();
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-10">
      <div data-hero="content" className="container mx-auto">
        <div className="grid items-center gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
          <div>
            <div data-hero="badge" className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Disponível para novos projetos e oportunidades
            </div>

            <h1 className="text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4rem] xl:text-[4.5rem]" aria-label={headline.join(" ")}>
              {headline.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1" aria-hidden>
                  {i === 2 ? (
                    <span data-hero="accent" className="block font-serif font-normal italic text-gradient pr-2">
                      {line}
                    </span>
                  ) : (
                    <span data-split className="block">
                      {line}
                    </span>
                  )}
                </span>
              ))}
            </h1>

            <p data-hero="fade" className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sou <span className="text-foreground">Diêgo Axel</span>, desenvolvedor full stack e estudante de Sistemas de
              Informação na UFRN. Entrego produtos completos — da modelagem do banco de dados à interface — para
              instituições, empresas e profissionais liberais.
            </p>

            <div data-hero="fade" className="mt-10 flex flex-wrap items-center gap-3">
              <Magnetic>
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Ver projetos
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:rotate-[-45deg]" />
              </a>
              </Magnetic>
              <Magnetic>
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/40 hover:bg-secondary"
              >
                Entrar em contato
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              </Magnetic>
              <div className="ml-1 flex items-center gap-1">
                <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                  <Github className="h-[18px] w-[18px]" />
                </a>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                  <Linkedin className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>

            <dl data-hero="fade" className="mt-14 grid max-w-lg grid-cols-3 divide-x divide-border border-y border-border">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse px-4 py-4 first:pl-0">
                  <dt className="mt-1 text-[11px] text-muted-foreground sm:text-xs">{s.label}</dt>
                  <dd className="text-base font-semibold tracking-tight sm:text-lg">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div data-hero="photo-wrap" className="relative mx-auto w-full max-w-[340px] lg:max-w-[400px]">
            <div data-hero="photo" className="relative" style={{ clipPath: "inset(0% 0% 0% 0% round 28px)" }}>
            <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-primary/50 via-border to-transparent" />
            <div className="relative overflow-hidden rounded-[28px] bg-card p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
                <img
                  src={avatarImage}
                  alt="Foto de Diêgo Axel"
                  fetchPriority="high"
                  data-hero="photo-img"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                  <div>
                    <p className="text-sm font-medium">Diêgo Axel</p>
                    <p className="font-mono text-[11px] text-muted-foreground">Full Stack Developer</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background/70 px-2.5 py-1 text-[11px] text-muted-foreground backdrop-blur">
                    <MapPin className="h-3 w-3" /> Caicó, RN
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-hero="marquee"
        className="mask-fade-x mt-20 overflow-hidden border-y border-border/60 py-5"
        aria-hidden
      >
        <div className="animate-marquee flex w-max gap-12">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="flex items-center gap-12 font-mono text-sm text-muted-foreground/70">
              {t}
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
