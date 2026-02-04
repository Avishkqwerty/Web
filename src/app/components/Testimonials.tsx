import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { GradientText } from "./ui/GradientText";

const testimonials = [
    {
        quote: "We needed a partner who could understand complex fintech requirements. HashX not only understood them but improved upon our initial concepts significantly.",
        author: "Elena Rodriguez",
        role: "CEO, FutureScale",
        initials: "ER",
        rating: 5,
    },
    {
        quote: "Exceptional code quality and documentation. Our internal team was able to take over the project seamlessly after the handoff. Highly recommended.",
        author: "David Park",
        role: "VP of Engineering, DataSphere",
        initials: "DP",
        rating: 4.5,
    },
    {
        quote: "The ERP solution HashX built for us increased our operational efficiency by 40%. The ROI realized in less than 6 months was beyond our expectations.",
        author: "Jennifer Wu",
        role: "Head of Operations, LogiChain",
        initials: "JW",
        rating: 5,
    },
    {
        quote: "Their security-first approach gave us peace of mind. We passed our compliance audits with flying colors thanks to the robust architecture they implemented.",
        author: "Michael Chen",
        role: "CTO, SecureFin",
        initials: "MC",
        rating: 5,
    }
];

export function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const displayTestimonials = [...testimonials, ...testimonials, ...testimonials];
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused && containerRef.current) {
                // Check if we've reached the end to potential loop (not perfect simple scroll, but good enough for "swipe with time")
                // For a seamless infinite loop, we'd need more complex logic, but this mimics user request "swipe with time"
                const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

                // If near end, jump back to start (optional, but for duplicated items list it works okay-ish)
                // For now, just scroll right.
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Mesh Gradients - matching Trusted Support section style */}
            <div className="absolute left-0 top-0 bottom-0 w-1/4 pointer-events-none opacity-50">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-transparent"></div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/4 pointer-events-none opacity-50">
                <div className="absolute inset-0 bg-gradient-to-l from-purple-900/20 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Trusted by <GradientText>TECH</GradientText> Giants
                    </h2>
                    <p className="text-slate-400 text-lg">
                        See what our partners and clients have to say about their experience working with the HashX team.
                    </p>
                </div>

                <div
                    className="relative group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <button
                        onClick={scrollLeft}
                        className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-zinc-900/80 border border-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all opacity-0 group-hover:opacity-100 shadow-xl backdrop-blur-sm"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-zinc-900/80 border border-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all opacity-0 group-hover:opacity-100 shadow-xl backdrop-blur-sm"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div
                        ref={containerRef}
                        className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {displayTestimonials.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: (idx % 4) * 0.1, duration: 0.6, ease: "circOut" }}
                                className="min-w-[300px] md:min-w-[400px] relative group/card bg-zinc-900/40 border border-white/5 p-8 rounded-3xl snap-center flex flex-col hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 overflow-hidden"
                            >
                                {/* Gradient Border / Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-purple-500/0 group-hover/card:from-indigo-500/10 group-hover/card:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700"></div>

                                <div className="mb-6 opacity-30 relative z-10">
                                    <Quote size={48} className="text-white fill-white" />
                                </div>

                                <p className="text-slate-400 italic leading-relaxed mb-6 flex-grow relative z-10">
                                    "{item.quote}"
                                </p>

                                <div className="flex items-center gap-1 mb-6 relative z-10">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={`${i < Math.floor(item.rating) ? "text-yellow-500 fill-yellow-500" : "text-zinc-800 fill-zinc-800"}`}
                                        />
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-white font-bold border border-white/10 shadow-inner">
                                        {item.initials}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold tracking-wide">{item.author}</div>
                                        <div className="text-sm text-indigo-400/80">{item.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
