import { motion } from "motion/react";
import { ArrowRight, Briefcase, Code, Shield, Cpu, Globe, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { GradientText } from "@/app/components/ui/GradientText";
import { MagneticButton } from "@/app/components/ui/MagneticButton";

const values = [
    {
        title: "Innovation First",
        desc: "We push the boundaries of what's possible in cybersecurity, constantly exploring new technologies and methodologies.",
        icon: LightbulbIcon,
    },
    {
        title: "Global Impact",
        desc: "Your work will protect organizations worldwide, securing critical infrastructure and sensitive data from threats.",
        icon: Globe,
    },
    {
        title: "Continuous Growth",
        desc: "We invest in your development with dedicated learning budgets, conference sponsorships, and mentorship programs.",
        icon: TrendingUpIcon,
    },
];

const jobs = [
    {
        title: "Senior Security Engineer",
        department: "Engineering",
        location: "Remote / Hybrid",
        type: "Full-time",
    },
    {
        title: "Penetration Tester",
        department: "Security Operations",
        location: "London, UK",
        type: "Full-time",
    },
    {
        title: "Frontend Developer",
        department: "Product",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Cyber Threat Analyst",
        department: "Intelligence",
        location: "New York, USA",
        type: "Full-time",
    },
];

// Custom icons wrapper if Lucide doesn't have exactly these names exported directly or to simplify
function LightbulbIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
        </svg>
    );
}

function TrendingUpIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
        </svg>
    );
}

export function Careers() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black pt-20">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative py-24 px-4 overflow-hidden min-h-[60vh] flex items-center justify-center">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            We are hiring!
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white">
                            Join the <GradientText>Guardians</GradientText> of the <br className="hidden md:block" /> Digital World
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
                            At HashX, we don't just find bugs; we secure the future. Join a team of passionate experts dedicated to making the internet safer for everyone.
                        </p>
                        <div className="flex justify-center gap-4">
                            <MagneticButton to="#positions" variant="primary">
                                View Open Positions
                            </MagneticButton>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-900/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Why HashX?</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            We believe in fostering an environment where creativity meets security.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 hover:border-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/10 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="positions" className="py-24 px-4 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                                Open <GradientText>Positions</GradientText>
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">
                                Find your next challenge and help us build a safer digital future.
                            </p>
                        </div>
                        <MagneticButton to="/contact" variant="secondary">
                            View All Roles
                        </MagneticButton>
                    </div>

                    <div className="space-y-4">
                        {jobs.map((job, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-6 md:p-8 rounded-2xl bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <Briefcase size={16} /> {job.department}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Globe size={16} /> {job.location}
                                        </span>
                                        <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-semibold">
                                            {job.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:translate-x-2 transition-transform">
                                    <Link to="/contact">Apply Now</Link> <ArrowRight size={20} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-900 to-purple-900 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Don't see the right fit?</h3>
                            <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
                                We are always looking for talented individuals. Send us your CV and we'll keep you in mind for future opportunities.
                            </p>
                            <Link to="/contact" className="inline-block px-8 py-3 rounded-full bg-white text-indigo-900 font-bold hover:bg-slate-100 transition-colors shadow-lg hover:scale-105 transform duration-200">
                                Send Spontaneous Application
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
