import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { MapPin, Globe, ArrowUpRight } from "lucide-react";

const locations = [
    {
        name: "Sri Lanka",
        region: "Asia",
        coords: [7.8731, 80.7718],
        description: "Technology hub delivering cutting-edge solutions for our Asian partners.",
        clientCount: "15+"
    },
    {
        name: "Dubai",
        region: "Middle East",
        coords: [25.2048, 55.2708],
        description: "Strategic headquarters connecting East and West with premier security services.",
        clientCount: "20+"
    },
    {
        name: "Australia",
        region: "Asia Pacific",
        coords: [-25.2744, 133.7751],
        description: "Securing critical infrastructure across the Australian continent.",
        clientCount: "10+"
    },
    {
        name: "Chile",
        region: "South America",
        coords: [-35.6751, -71.5430],
        description: "Expanding our footprint with innovative projects in South America.",
        clientCount: "5+"
    }
];

export function GlobalReach() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [activeLocation, setActiveLocation] = useState(0);
    const pointerInteracting = useRef<any>(null);
    const pointerInteractionMovement = useRef(0);

    useEffect(() => {
        let phi = 0;
        let theta = 0;
        let width = 0;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
        window.addEventListener("resize", onResize);
        onResize();

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 20000,
            mapBrightness: 8,
            baseColor: [0.1, 0.1, 0.1], // Darker base
            markerColor: [0.3, 0.5, 1], // Bright Blue
            glowColor: [0.2, 0.2, 0.6], // Deep Indigo Glow
            markers: locations.map((loc) => ({ location: loc.coords as [number, number], size: 0.1 })),
            onRender: (state) => {
                // Smooth rotation to active location
                const location = locations[activeLocation];

                // Phi (Longitude) - Invert to center the location
                const targetPhi = -1 * location.coords[1] * (Math.PI / 180);
                const distPhi = targetPhi - phi;
                phi += distPhi * 0.05;

                // Theta (Latitude) 
                // In cobe, theta usually tilts the globe. 
                // To center a latitude, we typically adjust theta relative to 0.
                const targetTheta = location.coords[0] * (Math.PI / 180);
                const distTheta = targetTheta - theta;
                theta += distTheta * 0.05;

                state.phi = phi + pointerInteractionMovement.current;
                state.theta = theta;
                state.width = width * 2;
                state.height = width * 2;
            },
        });

        return () => {
            globe.destroy();
            window.removeEventListener("resize", onResize);
        };
    }, [activeLocation]);

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[128px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[128px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
                        <Globe size={12} /> Global Impact
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Inspiring Projects <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 animate-pulse">Across the Globe</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        We are proud to partner with visionary clients worldwide, delivering secure, scalable, and innovative solutions that define the future.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Location List */}
                    <div className="lg:col-span-5 space-y-4">
                        {locations.map((loc, idx) => (
                            <motion.button
                                key={loc.name}
                                onClick={() => setActiveLocation(idx)}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`group w-full text-left p-6 rounded-2xl border backdrop-blur-md transition-all duration-500 relative overflow-hidden ${activeLocation === idx
                                    ? "bg-white/10 border-indigo-500/50 shadow-[0_0_30px_rgba(79,70,229,0.2)]"
                                    : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                                    }`}
                            >
                                {/* Active Gradient Fill */}
                                {activeLocation === idx && (
                                    <motion.div
                                        layoutId="active-bg"
                                        className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"
                                    />
                                )}

                                <div className="relative z-10 flex items-start justify-between">
                                    <div className="flex items-start gap-4">
                                        <div className={`mt-1 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${activeLocation === idx
                                            ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/40 scale-110"
                                            : "bg-black/40 text-slate-400 group-hover:text-white"
                                            }`}>
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold mb-1 transition-colors ${activeLocation === idx ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                                                {loc.name}
                                            </h3>
                                            <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">{loc.region}</p>

                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    height: activeLocation === idx ? "auto" : 0,
                                                    opacity: activeLocation === idx ? 1 : 0
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-slate-400 text-sm leading-relaxed">
                                                    {loc.description}
                                                </p>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <div className={`text-sm font-bold transition-colors ${activeLocation === idx ? "text-white" : "text-slate-500"}`}>
                                            {loc.clientCount} Clients
                                        </div>
                                        {activeLocation === idx && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="mt-2 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,1)] animate-pulse"
                                            ></motion.div>
                                        )}
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Right: Globe */}
                    <div className="lg:col-span-7 relative">
                        <div className="relative aspect-square w-full max-w-[700px] mx-auto">
                            <div className="absolute inset-0 bg-indigo-500/5 rounded-full blur-3xl transform scale-90"></div>
                            <canvas
                                ref={canvasRef}
                                style={{ width: '100%', height: '100%', maxWidth: '700px', aspectRatio: '1' }}
                                className="cursor-grab active:cursor-grabbing relative z-10 drop-shadow-2xl"
                                onPointerDown={(e) => {
                                    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
                                }}
                                onPointerUp={() => {
                                    pointerInteracting.current = null;
                                }}
                                onPointerOut={() => {
                                    pointerInteracting.current = null;
                                }}
                                onMouseMove={(e) => {
                                    if (pointerInteracting.current !== null) {
                                        const delta = e.clientX - pointerInteracting.current;
                                        pointerInteractionMovement.current = delta;
                                    }
                                }}
                                onTouchMove={(e) => {
                                    if (pointerInteracting.current !== null && e.touches[0]) {
                                        const delta = e.touches[0].clientX - pointerInteracting.current;
                                        pointerInteractionMovement.current = delta;
                                    }
                                }}
                            />

                            {/* Card Overlay on Globe (Decorative) */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 2, 0]
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-10 -left-10 md:left-10 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl max-w-xs hidden md:block"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                        <Globe size={16} />
                                    </div>
                                    <div className="text-sm font-bold text-white">Live Operations</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-[70%] bg-green-500 rounded-full animate-[shimmer_2s_infinite]"></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-slate-400">
                                        <span>System Status</span>
                                        <span className="text-green-400">Optimal</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
