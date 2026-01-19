import { motion } from "framer-motion";

const variants = {
    fadeUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slideLeft: {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    },
};

export default function AnimatedSection({
    children,
    variant = "fadeUp",
    delay = 0,
    duration = 0.6,
    className = "",
    once = true,
    animateOnLoad = false, // If true, animates immediately without waiting for scroll
}) {
    // For hero section elements that should animate on page load
    if (animateOnLoad) {
        return (
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{
                    duration,
                    delay,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                variants={variants[variant]}
                className={className}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-50px", amount: 0.1 }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            variants={variants[variant]}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Staggered children animation wrapper
export function StaggerContainer({ children, className = "", staggerDelay = 0.1 }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px", amount: 0.1 }}
            transition={{ staggerChildren: staggerDelay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className = "" }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
