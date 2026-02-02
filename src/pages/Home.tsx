import { ArrowRight, Shield, Globe, Users, Lock, ChevronRight, Server, Database, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { GradientText } from "@/app/components/ui/GradientText";
import { motion } from "motion/react";
import { TrustedBy } from "@/app/components/TrustedBy";

const services = [
  { title: "Vulnerability Management", icon: Shield, desc: "Identifying and mitigating security weaknesses before they're exploited." },
  { title: "Penetration Testing", icon: Lock, desc: "Simulated cyberattacks to test your defense capabilities." },
  { title: "SOC Management", icon: Activity, desc: "24/7 monitoring and protection for your business assets." },
  { title: "Cloud Security", icon: Server, desc: "Securing your cloud environments and infrastructure." },
];

const stats = [
  { label: "Secure Service", value: "100%", sub: "Cybersecurity projects" },
  { label: "Client Protection", value: "500+", sub: "Organizations" },
  { label: "Expert Team", value: "50+", sub: "Certified Professionals" },
];

export function Home() {
  return (
    <div className="flex flex-col overflow-hidden bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start justify-center pt-6 px-4 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-black transition-colors duration-500">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center z-10 space-y-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
              Hacked? We’ll get your business back on track
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-snug text-slate-900 dark:text-white mb-6">
              Safeguarding the <br />
              <GradientText>digital frontier</GradientText>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              We provide reliable, solid cyber security capabilities, producing
              distinct and powerful organizational identities that stand out in
              the industry.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-indigo-500/20"
              >
                Discover HashX
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-lg hover:bg-slate-50 dark:hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions We Offer */}
      <section className="py-24 bg-white dark:bg-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Solutions we offer</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl">
                Comprehensive protection for every layer of your digital infrastructure.
              </p>
            </div>
            <Link to="/services" className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all">
              View all services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-100 dark:border-white/5 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Statement & Stats */}
      <section className="py-24 bg-slate-900 dark:bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Proudly Supporting Organizations with Expert Cyber Solutions
            </h2>
            <p className="text-indigo-200 text-lg">
              We build trust through security, enabling businesses to thrive in the digital age without fear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="pt-8 md:pt-0 px-4"
              >
                <div className="text-sm font-medium text-indigo-300 uppercase tracking-widest mb-2">{stat.label}</div>
                <div className="text-6xl md:text-7xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Research Community */}
      <section className="py-24 bg-slate-50 dark:bg-black relative overflow-hidden">
        {/* ...rest unchanged... */}
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 bg-white dark:bg-zinc-900/50">
        {/* ...rest unchanged... */}
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-black">
        {/* ...rest unchanged... */}
      </section>
    </div>
  );
}
