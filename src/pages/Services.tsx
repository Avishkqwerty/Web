import {
  ArrowRight, Shield, Globe, Lock, Server, Smartphone, Eye, FileText,
  Users, Cloud, Database, Wifi, Activity, Flag, Monitor, Mail, ShieldAlert
} from "lucide-react";
import { Link } from "react-router-dom";
import { GradientText } from "@/app/components/ui/GradientText";
import { motion } from "motion/react";

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
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Comprehensive cybersecurity solutions to <GradientText>safeguard</GradientText> your data
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400"
          >
            Empowering Cybersecurity! Explore the HashX Advantages
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none"></div>

              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                <service.icon size={28} />
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed min-h-[60px]">
                {service.desc}
              </p>

              <Link to="#" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all">
                Read More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="rounded-[2.5rem] bg-slate-900 dark:bg-indigo-950/20 border border-indigo-500/20 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to secure your organization?</h2>
            <p className="text-indigo-200 text-lg">
              Contact us today to discuss your cybersecurity needs and find the right solutions for your business.
            </p>
            <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-indigo-50 hover:scale-105 transition-all shadow-xl">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
