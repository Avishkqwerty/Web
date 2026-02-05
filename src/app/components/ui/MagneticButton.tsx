import { useRef, useState, MouseEvent } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Fallback for cn if it doesn't exist, I'll check after this write, 
// but usually in these setups it's there. If not, I'll fix it.
// Actually, looking at package.json, `clsx` and `tailwind-merge` are there.
// I'll assume standard shadcn-like utils structure or just use inline logic if I'm not sure.
// Let's assume standard `lib/utils` or `app/utils`. 
// Wait, I saw `src/app/components/ui` earlier. 
// I'll stick to simple template strings + tailwind-merge if needed in the file itself 
// or just standard className prop handling for now to be safe, easier to fix later if import fails.

interface MagneticButtonProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    to?: string; // If provided, renders as Link
    href?: string; // If provided, renders as a tag
    className?: string;
    variant?: "primary" | "secondary" | "outline";
}

export function MagneticButton({
    children,
    to,
    href,
    className = "",
    variant = "primary",
    onClick,
    ...props
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: MouseEvent<HTMLElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    // Base styles
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg transition-colors overflow-hidden";

    // Variant styles
    const variants = {
        primary: "bg-slate-900 dark:bg-white text-white dark:text-black shadow-xl shadow-indigo-500/20",
        secondary: "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-white/10",
        outline: "border border-current",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    const content = (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={combinedClasses}
        >
            {/* Ripple/Sheen effect container */}
            <div className="absolute inset-0 -z-10 opacity-0 hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full hover:animate-[shimmer_1s_infinite]" />

            {/* Actual content */}
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.div>
    );

    if (to) {
        return <Link to={to} {...props} className="inline-block">{content}</Link>;
    }

    if (href) {
        return <a href={href} target="_blank" rel="noopener noreferrer" {...props} className="inline-block">{content}</a>
    }

    return (
        <div onClick={onClick} {...props} className="inline-block cursor-pointer">
            {content}
        </div>
    );
}
