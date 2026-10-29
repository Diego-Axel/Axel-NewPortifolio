import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

gsap.defaults({ ease: "expo.out", duration: 1 });

/** Media queries shared by every GSAP animation on the page. */
export const motionQuery = {
  /** Any viewport, as long as the visitor hasn't asked for reduced motion. */
  ok: "(prefers-reduced-motion: no-preference)",
  /** Large screens with a real pointer — for pinning and cursor effects. */
  desktop: "(prefers-reduced-motion: no-preference) and (min-width: 1024px) and (pointer: fine)",
};

export { gsap, ScrollTrigger, SplitText, useGSAP };
