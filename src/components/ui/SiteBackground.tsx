import { useEffect, useRef } from "react";

/**
 * Fixed page backdrop: a faded grid, two soft color fields and a spotlight
 * that follows the cursor. Pure CSS, so it costs almost nothing to render.
 */
const SiteBackground = () => {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--x", `${e.clientX}px`);
        el.style.setProperty("--y", `${e.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
      <div className="absolute top-[40%] -right-40 h-[420px] w-[420px] rounded-full bg-accent/[0.06] blur-[120px]" />
      <div
        ref={spotRef}
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(600px circle at var(--x, 50%) var(--y, -20%), hsl(var(--primary) / 0.07), transparent 40%)",
        }}
      />
    </div>
  );
};

export default SiteBackground;
