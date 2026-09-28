import { motion } from "framer-motion";
import { Code2, Database, Rocket, Server } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { stack } from "@/data/portfolio";
import { cardReveal, staggerContainer, viewportOnce } from "@/lib/motion";

const icons = [Code2, Server, Database, Rocket];

const Skills = () => (
  <section id="stack" className="border-t border-border/60 py-24 sm:py-32">
    <div className="container mx-auto">
      <SectionHeading
        eyebrow="Stack"
        title={<>Ferramentas que uso para <em className="font-serif font-normal">entregar</em></>}
        description="Tecnologias escolhidas pela confiabilidade em produção, não pela moda."
      />

      <motion.div
        className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {stack.map((group, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={group.title}
              variants={cardReveal}
              className="group relative bg-background p-6 transition-colors duration-500 hover:bg-card sm:p-8"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-muted-foreground transition-colors duration-500 group-hover:text-primary" />
                <span className="font-mono text-xs text-muted-foreground/60">0{i + 1}</span>
              </div>
              <h3 className="mt-8 text-lg">{group.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{group.description}</p>
              <ul className="mt-6 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/85">
                    <span className="h-1 w-1 rounded-full bg-primary/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Skills;
