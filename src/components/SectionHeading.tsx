import { useRef } from "react";
import { gsap, motionQuery, SplitText, useGSAP } from "@/lib/gsap";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

const SectionHeading = ({ eyebrow, title, description, align = "left" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(motionQuery.ok, () => {
        const q = gsap.utils.selector(ref);
        let tl: gsap.core.Timeline | undefined;

        // Words rise out of per-line masks; autoSplit re-splits after fonts load or on resize.
        const split = SplitText.create(q("h2"), {
          type: "lines,words",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            tl?.kill();
            tl = gsap
              .timeline({ scrollTrigger: { trigger: ref.current, start: "top 85%", once: true } })
              .from(q("[data-heading=eyebrow]"), { x: -16, autoAlpha: 0, duration: 0.8 })
              .from(self.words, { yPercent: 110, duration: 1.1, stagger: 0.06 }, "-=0.5")
              .from(q("[data-heading=description]"), { y: 20, autoAlpha: 0, duration: 0.9 }, "-=0.8");
            return tl;
          },
        });

        return () => split.revert();
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p data-heading="eyebrow" className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-4xl leading-[1.05] sm:text-5xl">{title}</h2>
      {description && (
        <p data-heading="description" className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
