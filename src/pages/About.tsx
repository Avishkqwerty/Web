import { Download, Shield, Target, Lock } from "lucide-react";
import { GradientText } from "@/app/components/ui/GradientText";
import { motion } from "motion/react";

const stats = [
  { label: "Secure Service", value: "100%", sub: "Cybersecurity projects" },
  { label: "Client Protection", value: "500+", sub: "Organizations" },
  { label: "Expert Team", value: "50+", sub: "Certified Professionals" },
];

export function About() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white to-white dark:from-indigo-950/20 dark:via-black dark:to-black pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Leading cybersecurity experts dedicated to protecting your <GradientText>digital world</GradientText> globally
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            We combine strategic expertise with advanced technology to safeguard enterprises against evolving threats.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide uppercase">
              Who we are
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
              Security is a state of mind. <br />
              <span className="text-indigo-600 dark:text-indigo-500">Are you in?</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              At HashX, we leverage our extensive business and cybersecurity
              expertise to support companies worldwide in safeguarding their
              cyberspace. Our comprehensive services include vulnerability
              scanning, penetration testing, and managing security operations
              centers, all aimed at helping businesses protect their data and
              mitigate cyber attack risks.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-white/5">
                <Target className="text-indigo-600 mb-4" size={32} />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Penetration Testing</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Simulating real-world attacks to identify critical vulnerabilities.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-white/5">
                <Lock className="text-purple-600 mb-4" size={32} />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">SOC Management</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">24/7 security monitoring and incident response.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] opacity-20 blur-3xl"></div>
            <img 
              src="https://services.hashxinnovations.com/logo/eye.jpg" 
              alt="Team at work" 
              className="relative rounded-[2rem] shadow-2xl w-full border border-white/20"
            />
            
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -left-10 md:left-10 right-10 md:right-auto bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 grid grid-cols-3 gap-8">
               {stats.map((stat, idx) => (
                 <div key={idx} className="text-center">
                   <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</div>
                   <div className="text-xs font-medium text-slate-500 uppercase">{stat.label}</div>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 dark:bg-zinc-900 text-white p-12 md:p-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">Company Portfolio</h3>
              <p className="text-indigo-200 text-lg leading-relaxed">
                Want to learn more about our work and experience? Download our official documents below for a complete overview of HashX (Pvt) Ltd, our services, team, certifications, and achievements.
              </p>
            </div>
            
            <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-indigo-50 transition-all hover:scale-105 shadow-xl shadow-white/10 shrink-0">
              <Download size={20} /> Download PDF
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
