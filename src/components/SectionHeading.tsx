import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

const SectionHeading = ({ eyebrow, title, description, align = "left" }: Props) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
  >
    <motion.p variants={fadeInUp} className="eyebrow">{eyebrow}</motion.p>
    <motion.h2 variants={fadeInUp} className="mt-5 text-4xl leading-[1.05] sm:text-5xl">{title}</motion.h2>
    {description && (
      <motion.p variants={fadeInUp} className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {description}
      </motion.p>
    )}
  </motion.div>
);

export default SectionHeading;
