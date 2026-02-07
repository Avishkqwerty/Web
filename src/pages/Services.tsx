import {
  ArrowRight, Shield, Globe, Lock, Server, Smartphone, Eye, FileText,
  Users, Cloud, Database, Wifi, Activity, Flag, Monitor, Mail, ShieldAlert, Sparkles, CheckCircle2, X
} from "lucide-react";
import { Link } from "react-router-dom";
import { GradientText } from "@/app/components/ui/GradientText";
import { motion, AnimatePresence } from "motion/react";
import { MagneticButton } from "@/app/components/ui/MagneticButton";
import { useState } from "react";

const services = [
  {
    title: "Governance, Risk & Compliance (GRC)",
    desc: "Ensuring your organization meets industry standards and manages risks effectively.",
    details: "Our GRC services provide a structured approach to aligning IT with business objectives while managing risk and meeting regulatory compliance types (ISO 27001, NIST, GDPR, PCI-DSS). We help you build a resilient framework that balances performance with protection.",
    icon: FileText,
    image: "/services/grc.jpg"
  },
  {
    title: "Vulnerability Management (VMaaS)",
    desc: "Identifying and mitigating security weaknesses before they’re exploited.",
    details: "Our VMaaS offers continuous identification, classification, and remediation of vulnerabilities across your on-premise and cloud environments. We prioritize critical threats and provide actionable insights to reduce your attack surface effectively.",
    icon: ShieldAlert,
    image: "/services/vmaas.jpg"
  },
  {
    title: "Mobile Device Management (MDM)",
    desc: "Ensuring security and compliance for your mobile workforce.",
    details: "We secure your mobile fleet through robust MDM solutions that enforce security policies, manage applications, and secure content on smartphones and tablets. Protect sensitive corporate data on both company-owned and BYOD devices.",
    icon: Smartphone,
    image: "/services/mdm.jpg"
  },
  {
    title: "Data Loss Prevention (DLP)",
    desc: "Securing your sensitive data against unauthorized access and leaks.",
    details: "Our DLP strategies prevent sensitive data from leaving your organization. We implement policies and tools to monitor, detect, and block the unauthorized transmission of PII, IP, and other critical data assets across your network.",
    icon: Database,
    image: "/services/dlp.jpg"
  },
  {
    title: "Cyberthreat Intelligence (CTI)",
    desc: "Staying ahead of cybercriminals with proactive, actionable intelligence.",
    details: "Gain the upper hand with our CTI services. We monitor dark web activity, track threat actor TTPs (Tactics, Techniques, and Procedures), and provide real-time alerts to help you anticipate and neutralize attacks before they happen.",
    icon: Eye,
    image: "/services/cti.jpg"
  },
  {
    title: "Phishing as a Service (PhaaS)",
    desc: "Simulated phishing attacks to test and improve organizational resilience.",
    details: "Test your employees' vigilance with realistic phishing simulations. Our PhaaS platform launches custom campaigns to identify vulnerable users and delivers targeted training to strengthen your human firewall against social engineering.",
    icon: Mail,
    image: "/services/phaas.jpg"
  },
  {
    title: "Incident Response (IRaaP)",
    desc: "Swift and effective response to minimize impact of cyber incidents.",
    details: "When a breach occurs, time is critical. Our Retained Incident Response service guarantees rapid deployment of experts to contain threats, investigate root causes, and guide your recovery process to minimize business disruption.",
    icon: Activity,
    image: "/services/iraap.jpg"
  },
  {
    title: "Endpoint Security",
    desc: "Protecting your business from the ground up by securing every endpoint.",
    details: "Secure your laptops, desktops, and servers with next-gen endpoint protection. We deploy advanced EDR/XDR solutions that use behavioral analysis to detect and stop malware, ransomware, and zero-day exploits in real-time.",
    icon: Server,
    image: "/services/endpoint.jpg"
  },
  {
    title: "Application Security",
    desc: "Securing your applications to safeguard your organization’s data.",
    details: "Embed security into your SDLC. From SAST/DAST scanning to manual penetration testing and secure code reviews, we ensure your web and mobile applications are hardened against OWASP Top 10 vulnerabilities and other logical flaws.",
    icon: Globe,
    image: "/services/appsec.jpg"
  },
  {
    title: "Training & Consultancy",
    desc: "Expert guidance and training to build a strong security posture.",
    details: "Empower your team with specialized training sessions and strategic consultancy. Whether you need CISO-as-a-Service or specific technical workshops, our experts provide the knowledge transfer needed to sustain long-term security.",
    icon: Users,
    image: "/services/training.jpg"
  },
  {
    title: "Capture The Flag (CTF)",
    desc: "Gamified security challenges to strengthen practical skills.",
    details: "Engage your team with our custom CTF events. We design realistic hacking scenarios that challenge participants to find flags, exploit vulnerabilities, and patch systems, fostering teamwork and practical skill development.",
    icon: Flag,
    image: "/services/ctf.jpg"
  },
  {
    title: "Cloud Security",
    desc: "Comprehensive security for your cloud environments and infrastructure.",
    details: "Secure your migration and operations in AWS, Azure, or GCP. We assess your cloud architecture, implement CSPM (Cloud Security Posture Management), and ensure identity and access controls are configured to best practices.",
    icon: Cloud,
    image: "/services/cloud.jpg"
  },
  {
    title: "Network Security",
    desc: "Building a robust defense for your network architecture.",
    details: "Defend your digital perimeter. We design and optimize network security architectures including Next-Gen Firewalls (NGFW), IDS/IPS, network segmentation, and secure VPNs to ensure reliable and secure connectivity.",
    icon: Wifi,
    image: "/services/network.jpg"
  },
  {
    title: "Security Operations Center",
    desc: "24/7 monitoring, detection, and response for your business assets.",
    details: "Our SOC provides round-the-clock surveillance of your digital environment. Leveraging SIEM technology and expert analysts, we detect anomalies, investigate alerts, and respond to incidents to keep your business running.",
    icon: Monitor,
    image: "/services/soc.jpg"
  },
  {
    title: "Awareness Sessions",
    desc: "Building a security-conscious culture across your organization.",
    details: "Transform your employees into your strongest defense. Our interactive awareness sessions cover password hygiene, social engineering, physical security, and remote work best practices to cultivate a security-first culture.",
    icon: Users,
    image: "/services/awareness.jpg"
  },
];


export function Services() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-indigo-900/20 via-black to-black pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
              <Shield size={14} /> World-Class Protection
            </div>
            <h1 className="text-4xl md:text-[60px] font-bold tracking-tight text-white mb-8 leading-tight">
              Cybersecurity <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">Solutions for</span> <GradientText>Tomorrow</GradientText>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative h-full"
            >
              {/* Card Container with Glassmorphism */}
              <div className="relative h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.3)] flex flex-col backdrop-blur-md overflow-hidden">

                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Box */}
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-white/5 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-black/20">
                    <service.icon size={32} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 mb-8 text-base leading-relaxed flex-grow">
                    {service.desc}
                  </p>

                  {/* Bottom Action */}
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-sm font-semibold text-slate-500 group-hover:text-white transition-colors focus:outline-none flex items-center gap-2 cursor-pointer"
                    >
                      Learn more
                    </button>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all cursor-pointer"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`service-${selectedService.title}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#0f1016] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Section */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#0f1016] to-transparent z-10"></div>
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="relative w-full md:w-3/5 p-8 md:p-12 flex flex-col overflow-y-auto">
                {/* Decorative Gradients */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all z-20"
                >
                  <X size={20} />
                </button>

                <div className="relative z-10 flex flex-col items-start gap-6 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <selectedService.icon size={32} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {selectedService.title}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6"></div>
                    <p className="text-base text-slate-300 leading-relaxed mb-8">
                      {selectedService.details}
                    </p>
                  </div>

                  <div className="flex gap-4 w-full mt-auto">
                    <MagneticButton to="/contact" className="flex-1 bg-indigo-600 text-white hover:bg-indigo-700 border-none shadow-lg shadow-indigo-500/20 text-center py-3">
                      Get a Quote
                    </MagneticButton>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-3 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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

