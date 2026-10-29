import { useRef } from "react";
import { gsap, motionQuery, ScrollTrigger, useGSAP } from "@/lib/gsap";

const phrase = ["Vamos construir", "algo juntos"];

/**
 * Oversized looping headline between Stack and Contact. It drifts on its own,
 * speeds up and skews with scroll velocity, and reverses direction when the
 * visitor scrolls back up.
 */
const VelocityMarquee = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(motionQuery.ok, () => {
        const track = ref.current?.querySelector<HTMLElement>("[data-marquee=track]");
        if (!track) return;

        const loop = gsap.to(track, { xPercent: -50, duration: 38, ease: "none", repeat: -1 });
        const skewTo = gsap.quickTo(track, "skewX", { duration: 0.5, ease: "power3.out" });
        let direction = 1;

        const st = ScrollTrigger.create({
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate(self) {
            const velocity = self.getVelocity();
            if (self.direction !== direction) direction = self.direction;
            gsap.to(loop, {
              timeScale: direction * (1 + Math.min(Math.abs(velocity) / 250, 6)),
              duration: 0.25,
              overwrite: true,
              onComplete: () => {
                gsap.to(loop, { timeScale: direction, duration: 1.2, ease: "power2.out" });
              },
            });
            skewTo(gsap.utils.clamp(-12, 12, velocity / -220));
          },
          onLeave: () => skewTo(0),
          onLeaveBack: () => skewTo(0),
        });

        return () => {
          st.kill();
          loop.kill();
        };
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  const items = Array.from({ length: 4 });

  return (
    <div ref={ref} aria-hidden className="mask-fade-x overflow-hidden border-t border-border/60 py-14 sm:py-20">
      <div data-marquee="track" className="flex w-max items-center will-change-transform">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {items.map((_, i) => (
              <span key={i} className="flex items-center whitespace-nowrap px-6 text-6xl font-semibold tracking-tight sm:px-10 sm:text-8xl lg:text-[9rem]">
                {phrase[0]}{" "}
                <em className="ml-[0.25em] font-serif font-normal text-gradient pr-[0.08em]">{phrase[1]}</em>
                <span className="ml-12 inline-block h-3 w-3 rounded-full bg-primary sm:ml-20 sm:h-4 sm:w-4" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VelocityMarquee;
