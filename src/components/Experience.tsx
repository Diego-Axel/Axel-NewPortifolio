import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import { education, experiences } from "@/data/portfolio";
import { cardReveal, viewportOnce } from "@/lib/motion";

const Experience = () => {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experiencia" className="border-t border-border/60 py-24 sm:py-32">
      <div className="container mx-auto grid gap-16 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Trajetória"
            title={<>Experiência <em className="font-serif font-normal">profissional</em></>}
            description="Da análise de dados ao desenvolvimento de sistemas completos — cada etapa somou uma camada ao que entrego hoje."
          />

          <motion.div
            variants={cardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="surface mt-10 flex gap-4 p-5"
          >
            <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border border-border bg-secondary">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-mono text-[11px] text-muted-foreground">{education.period}</p>
              <p className="mt-1 font-medium">{education.course}</p>
              <p className="text-sm text-muted-foreground">{education.institution}</p>
            </div>
          </motion.div>
        </div>

        <ol ref={listRef} className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden />
          <motion.div
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-primary to-accent"
            style={{ scaleY: lineScale }}
            aria-hidden
          />

          {experiences.map((exp) => (
            <motion.li
              key={exp.company + exp.role}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative pb-14 pl-10 last:pb-0"
            >
              <span className="absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border border-border bg-background">
                <span className={`h-[7px] w-[7px] rounded-full ${exp.current ? "bg-primary" : "bg-muted-foreground/40"}`} />
              </span>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
                {exp.current && (
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
                    Atual
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-xl sm:text-2xl">{exp.role}</h3>
              <p className="mt-1 text-sm text-foreground/70">{exp.company}</p>
              <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{exp.meta}</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
