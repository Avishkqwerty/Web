import { motion } from "motion/react";
import { Download, Lightbulb, Shield, Users, Zap, Award, Target, Globe, Compass, Eye, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { GradientText } from "@/app/components/ui/GradientText";
import { MagneticButton } from "@/app/components/ui/MagneticButton";

const values = [
    {
        title: "Relentless Innovation",
        desc: "We don't wait for the future; we build it. Constantly pushing boundaries to discover what's possible.",
        icon: Lightbulb,
    },
    {
        title: "Integrity First",
        desc: "Trust is our currency. We operate with transparency and hold ourselves to the highest ethical standards.",
        icon: Shield,
    },
    {
        title: "Customer Obsession",
        desc: "Our customers' success is our success. We listen deeply and deliver solutions that truly matter.",
        icon: Users,
    },
    {
        title: "Speed & Excellence",
        desc: "We move fast without breaking things. Quality and velocity go hand in hand at HashX.",
        icon: Zap,
    },
    {
        title: "Radical Ownership",
        desc: "We act like owners. Every team member is empowered to take initiative and drive results.",
        icon: Award,
    },
    {
        title: "Inclusive Culture",
        desc: "Diversity fuels creativity. We foster an environment where every voice is heard and valued.",
        icon: Globe,
    },
];

const team = [
    {
        name: "Avishka Bandara",
        role: "Founder & CEO",
        desc: "Visionary leader driving innovation and strategic growth at HashX.",
        image: "/team/Avishka.png",
    },
];

export function About() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black pt-20">
            {/* Hero Section */}
            <section className="relative py-24 px-4 overflow-hidden min-h-[50vh] flex items-center justify-center">
                {/* Background Image/Gradient */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20"></div>
                    {/* Abstract shapes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white">
                            We are <GradientText>HashX</GradientText>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Pioneering the future of digital security with a relentless commitment to innovation and integrity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Redesigned */}
            <section className="py-32 bg-black relative overflow-hidden">
                {/* 3D-like Background Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black pointer-events-none"></div>

                {/* Simulated Particle Wave Mesh */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[100vh] opacity-40 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[128px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Typography Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="text-sm font-bold tracking-[0.3em] text-blue-400 mb-6 uppercase flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-blue-400"></span>
                                Cyber Security
                                <span className="w-8 h-[1px] bg-blue-400"></span>
                            </div>

                            <h2 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
                                Defending <br />
                                the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Digital</span>
                            </h2>

                            <div className="pl-2 border-l-2 border-blue-500/30">
                                <h3 className="text-4xl md:text-6xl font-bold text-white leading-none tracking-tighter">
                                    on <br />
                                    the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Dot.</span>
                                </h3>
                            </div>

                            {/* Floating decorative elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 w-24 h-24 border border-blue-500/20 rounded-full"
                            ></motion.div>
                        </motion.div>

                        {/* Content Cards Side */}
                        <div className="space-y-8">
                            {/* Mission Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/50 transition-all duration-500 hover:bg-zinc-900/80 backdrop-blur-sm"
                            >
                                <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all"></div>
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Target size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                    To empower organizations with resilient cybersecurity solutions. We act as the invisible shield, allowing innovation to flourish without fear of evolving threats.
                                </p>
                            </motion.div>

                            {/* Vision Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/50 transition-all duration-500 hover:bg-zinc-900/80 backdrop-blur-sm"
                            >
                                <div className="absolute -right-6 -top-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all"></div>
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Eye size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                    A secure digital world where trust is foundational. We envision proactive, intelligent cybersecurity setting the global standard for safety.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values That Define Us */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-900/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <div className="uppercase tracking-widest text-xs font-bold text-indigo-500 mb-4">Our DNA</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                            Values That <GradientText>Define Us</GradientText>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            We believe in the power of "we". Collaboration is at the heart of our culture; it's the living, breathing engine behind everything we do.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="relative p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 group h-full flex flex-col overflow-hidden hover:-translate-y-2"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500/10 group-hover:text-indigo-300 transition-all duration-300 relative z-10">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white relative z-10">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm relative z-10">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Visionaries */}
            <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                            Meet the <GradientText>Visionaries</GradientText> Leading <br /> HashX
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                            A diverse team of engineers, designers, and strategists united by a passion for technology.
                        </p>
                    </motion.div>

                    <div className="flex justify-center">
                        {team.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="group relative overflow-hidden rounded-2xl bg-zinc-900 w-full max-w-sm aspect-[3/4] shadow-2xl border border-white/5 hover:border-indigo-500/50 transition-all"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-500">
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <div className="text-xs font-bold text-indigo-400 tracking-wider mb-2 uppercase">{member.role}</div>
                                    <p className="text-xs text-slate-400 border-t border-white/10 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {member.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Portfolio */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-900/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl p-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-left">
                                <h2 className="text-3xl font-bold text-white mb-4">Company Portfolio</h2>
                                <p className="text-indigo-200 max-w-xl text-lg">
                                    Explore our journey, case studies, and the full range of capabilities we offer in our comprehensive portfolio.
                                </p>
                            </div>
                            <MagneticButton to="/hashx-portfolio.pdf" variant="primary" className="bg-white text-indigo-900 hover:bg-indigo-50 border-0 flex items-center gap-2">
                                <Download size={20} />
                                Download PDF
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Buttons */}
            <section className="pb-24 pt-8 bg-white dark:bg-black">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-[3rem] bg-zinc-900 overflow-hidden px-6 py-20 text-center"
                    >
                        {/* Background Gradients */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

                        <div className="relative z-10 space-y-8">
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                                Ready to Shape the <GradientText className="from-blue-500 to-indigo-500">Future?</GradientText>
                            </h2>
                            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
                                Whether you want to build with us or build for us, HashX is where innovation finds its home.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                                <MagneticButton
                                    to="/careers"
                                    className="bg-zinc-200 hover:bg-white text-black font-semibold min-w-[180px] border-0"
                                >
                                    <span className="flex items-center gap-2">
                                        Join Our Team <Sparkles size={18} />
                                    </span>
                                </MagneticButton>

                                <MagneticButton
                                    to="/contact"
                                    className="bg-transparent border border-zinc-700 hover:border-zinc-500 text-white min-w-[180px]"
                                >
                                    <span className="flex items-center gap-2">
                                        Contact Us <ArrowRight size={18} />
                                    </span>
                                </MagneticButton>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
