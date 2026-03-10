import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

const TiltCard = ({ children, className = "" }: TiltCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const mouseXPercent = useTransform(x, (v) => (v + 0.5) * 100);
    const mouseYPercent = useTransform(y, (v) => (v + 0.5) * 100);
    const backgroundOverlay = useMotionTemplate`radial-gradient(circle at ${mouseXPercent}% ${mouseYPercent}%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)`;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className={`relative rounded-xl transition-all duration-200 ease-out ${className}`}
        >
            {/* Light glare effect based on mouse position */}
            {isHovered && (
                <motion.div
                    className="pointer-events-none absolute inset-0 z-50 rounded-xl"
                    style={{
                        background: backgroundOverlay,
                    }}
                />
            )}

            {/* Content */}
            <div
                style={{ transform: "translateZ(30px)" }}
                className="h-full w-full rounded-xl"
            >
                {children}
            </div>
        </motion.div>
    );
};

export default TiltCard;
