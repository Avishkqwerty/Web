import {
  ArrowRight, Shield, Globe, Lock, Server, Smartphone, Eye, FileText,
  Users, Cloud, Database, Wifi, Activity, Flag, Monitor, Mail, ShieldAlert, Sparkles, CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { GradientText } from "@/app/components/ui/GradientText";
import { motion } from "motion/react";
import { MagneticButton } from "@/app/components/ui/MagneticButton";

const services = [
  {
    title: "Governance, Risk & Compliance (GRC)",
    desc: "Ensuring your organization meets industry standards and manages risks effectively.",
    icon: FileText,
  },
  {
    title: "Vulnerability Management (VMaaS)",
    desc: "Identifying and mitigating security weaknesses before they’re exploited.",
    icon: ShieldAlert,
  },
  {
    title: "Mobile Device Management (MDM)",
    desc: "Ensuring security and compliance for your mobile workforce.",
    icon: Smartphone,
  },
  {
    title: "Data Loss Prevention (DLP)",
    desc: "Securing your sensitive data against unauthorized access and leaks.",
    icon: Database,
  },
  {
    title: "Cyberthreat Intelligence (CTI)",
    desc: "Staying ahead of cybercriminals with proactive, actionable intelligence.",
    icon: Eye,
  },
  {
    title: "Phishing as a Service (PhaaS)",
    desc: "Simulated phishing attacks to test and improve organizational resilience.",
    icon: Mail,
  },
  {
    title: "Incident Response (IRaaP)",
    desc: "Swift and effective response to minimize impact of cyber incidents.",
    icon: Activity,
  },
  {
    title: "Endpoint Security",
    desc: "Protecting your business from the ground up by securing every endpoint.",
    icon: Server,
  },
  {
    title: "Application Security",
    desc: "Securing your applications to safeguard your organization’s data.",
    icon: Globe,
  },
  {
    title: "Training & Consultancy",
    desc: "Expert guidance and training to build a strong security posture.",
    icon: Users,
  },
  {
    title: "Capture The Flag (CTF)",
    desc: "Gamified security challenges to strengthen practical skills.",
    icon: Flag,
  },
  {
    title: "Cloud Security",
    desc: "Comprehensive security for your cloud environments and infrastructure.",
    icon: Cloud,
  },
  {
    title: "Network Security",
    desc: "Building a robust defense for your network architecture.",
    icon: Wifi,
  },
  {
    title: "Security Operations Center",
    desc: "24/7 monitoring, detection, and response for your business assets.",
    icon: Monitor,
  },
  {
    title: "Awareness Sessions",
    desc: "Building a security-conscious culture across your organization.",
    icon: Users,
  },
];

export function Services() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-indigo-50/50 dark:from-indigo-950/20 to-transparent pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700/50 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Shield size={14} /> World-Class Protection
            </div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Cybersecurity <br />
              <span className="text-slate-400 dark:text-slate-600">Solutions for</span> <GradientText>Tomorrow</GradientText>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive security strategies designed to protect your data, infrastructure, and reputation in an evolving digital landscape.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative h-full p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/5 hover:border-indigo-500/50 dark:hover:border-indigo-400/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-indigo-500/10 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-white/5 border border-indigo-100 dark:border-white/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <service.icon size={26} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm leading-relaxed flex-grow">
                  {service.desc}
                </p>

                <div className="flex items-center text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mt-auto">
                  <span className="mr-2">Explore Solution</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 pt-8 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[3rem] bg-zinc-900 overflow-hidden px-8 py-24 text-center"
          >
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                Ready to Secure Your <br /> <GradientText className="from-blue-400 to-indigo-400">Digital Future?</GradientText>
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl font-light">
                Don't wait for a breach to happen. Partner with HashX today for proactive, world-class protection customized to your needs.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <MagneticButton
                  to="/contact"
                  className="bg-white hover:bg-zinc-200 text-black font-bold text-lg min-w-[200px] h-14 border-0 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  <span className="flex items-center gap-2">
                    Get Started Now <ArrowRight size={20} />
                  </span>
                </MagneticButton>

                <MagneticButton
                  to="/about"
                  className="bg-transparent border border-zinc-700 hover:border-zinc-500 text-white font-medium text-lg min-w-[200px] h-14"
                >
                  <span className="flex items-center gap-2">
                    Learn More
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
