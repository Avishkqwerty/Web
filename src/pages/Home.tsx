import { ArrowRight, Shield, Globe, Users, Lock, ChevronRight, Server, Database, Activity, Eye, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { GradientText } from "@/app/components/ui/GradientText";
import { motion, useInView, useSpring, useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";
import { MagneticButton } from "@/app/components/ui/MagneticButton";
import { TrustedBy } from "@/app/components/TrustedBy";

import { Testimonials } from "@/app/components/Testimonials";
import { GlobalReach } from "@/app/components/GlobalReach";

const services = [
  { title: "Vulnerability Management", icon: Shield, desc: "Identifying and mitigating security weaknesses before they're exploited.", link: "/services#vulnerability-management-vmaas-" },
  { title: "Penetration Testing", icon: Lock, desc: "Simulated cyberattacks to test your defense capabilities.", link: "/services" },
  { title: "SOC Management", icon: Activity, desc: "24/7 monitoring and protection for your business assets.", link: "/services#security-operations-center" },
  { title: "Cloud Security", icon: Server, desc: "Securing your cloud environments and infrastructure.", link: "/services#cloud-security" },
  { title: "Cyberthreat Intelligence", icon: Eye, desc: "Staying ahead of cybercriminals with proactive, actionable intelligence.", link: "/services#cyberthreat-intelligence-cti-" },
  { title: "Phishing as a Service", icon: Mail, desc: "Simulated phishing attacks to test and improve organizational resilience.", link: "/services#phishing-as-a-service-phaas-" },
];

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ""));
      motionValue.set(numericValue);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        const suffix = value.replace(/[0-9]/g, "");
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>0</span>;
}

const stats = [
  { label: "Secure Service", value: "100%", sub: "Cybersecurity projects" },
  { label: "Client Protection", value: "70+", sub: "Organizations" },
  { label: "Expert Team", value: "50+", sub: "Certified Professionals" },
];

export function Home() {
  return (
    <div className="flex flex-col overflow-hidden bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/back.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-[0.07] blur-[5px]"
            style={{
              maskImage: "linear-gradient(to right, black 0%, rgba(0,0,0, 0.3) 50%, black 100%)",
              WebkitMaskImage: "linear-gradient(to right, black 0%, rgba(0,0,0, 0.3) 50%, black 100%)"
            }}
          />
          {/* Overlay gradient to ensure text readability and blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center z-10 space-y-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2, // Overall pacing
                },
              },
            }}
            className="flex flex-col items-center"
          >
            {/* Pill: Notification style drop-in - "Alert" */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "backOut" }
                },
              }}
              className="inline-block"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
                Hacked? We'll get your business back on track
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-slate-900 dark:text-white flex flex-col items-center">
              {/* "Safeguarding": Side sweep - "Coverage/Protection" */}
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -40, filter: "blur(5px)" },
                  visible: {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.7, ease: "circOut" }
                  },
                }}
              >
                Safeguarding the
              </motion.span>

              {/* "Digital Frontier": Blur reveal - "Tech/Digital" */}
              <motion.span
                className="relative"
                variants={{
                  hidden: { opacity: 0, filter: "blur(10px)", scale: 0.95 },
                  visible: {
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                    transition: { duration: 0.8, ease: "circOut" }
                  },
                }}
              >
                <GradientText>digital frontier</GradientText>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-50 overflow-hidden" style={{ transform: "none" }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-1/2 -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </div>
              </motion.span>
            </h1>

            {/* Description: Solid fade in - "Reliable/Solid" */}
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1, ease: "linear" } // Slow, steady fade
                },
              }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              We provide reliable, solid cyber security capabilities, producing
              distinct and powerful organizational identities that stand out in
              the industry.
            </motion.p>

            {/* Buttons: Active spring - "Action" */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                    delay: 0.2
                  }
                },
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <MagneticButton
                to="/about"
                variant="primary"
                className="text-sm px-6 py-3 border-2 border-transparent [background:linear-gradient(#0f172a,#0f172a)_padding-box,linear-gradient(to_right,#4f46e5,#9333ea)_border-box] dark:[background:linear-gradient(#ffffff,#ffffff)_padding-box,linear-gradient(to_right,#4f46e5,#9333ea)_border-box]"
              >
                Discover HashX
              </MagneticButton>
              <MagneticButton to="/services" variant="secondary" className="text-sm px-6 py-3">
                Our Services
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Glowing Curved Horizon Line */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none overflow-hidden z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="absolute -bottom-[160px] left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[200px] rounded-[100%] border-t-2 border-indigo-500/50 bg-gradient-to-b from-indigo-500/10 via-purple-500/10 to-transparent shadow-[0_-10px_50px_rgba(79,70,229,0.2)]"
          >
            {/* Inner glow line */}
            <div className="absolute top-0 left-0 right-0 h-full rounded-[100%] border-t border-indigo-300/30 blur-[2px] shadow-[0_-2px_15px_rgba(255,255,255,0.2)]"></div>
          </motion.div>
        </div>
      </section>

      {/* Solutions We Offer */}
      <section className="py-24 bg-white dark:bg-black relative">
        {/* Gradient Blend from Hero */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-purple-900/20 via-indigo-900/10 to-transparent pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: -40, filter: "blur(5px)" },
                  visible: {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.7, ease: "circOut" }
                  }
                }}
                className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
              >
                Solutions we <GradientText>offer</GradientText>
              </motion.h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl">
                Comprehensive protection for every layer of your digital infrastructure.
              </p>
            </div>
            <Link to="/services" className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all">
              View all services <ArrowRight size={20} />
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, filter: "blur(10px)", scale: 0.95 },
                  visible: {
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                    transition: { duration: 0.8, ease: "circOut" }
                  }
                }}
                className="group relative overflow-hidden p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-100 dark:border-white/5 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 shadow-sm">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground/90 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <Link to={service.link} className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold mt-auto group/link">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-300">
                      Explore more
                    </span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section >

      {/* Trust Statement & Stats */}
      <section className="py-24 bg-slate-900 dark:bg-black relative overflow-hidden">
        {/* Left Mesh & Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_right,white,transparent)]"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -translate-x-1/2"></div>
        </div>

        {/* Right Mesh & Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_left,white,transparent)]"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Proudly Supporting Organizations with Expert Cyber{" "}
              <span className="relative inline-block">
                Solutions
                {/* Gradient Underline */}
                <span className="absolute -bottom-1 -left-[10%] w-[120%] h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full"></span>
              </span>
            </h2>
            <p className="text-indigo-200 text-lg">
              We build trust through security, enabling businesses to thrive in the digital age without fear.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 50, damping: 20 }}
                className="pt-8 md:pt-0 px-4 group cursor-default"
              >
                <div className="text-sm font-medium text-indigo-300 uppercase tracking-widest mb-2 group-hover:text-indigo-200 transition-colors">{stat.label}</div>
                <div className="text-6xl md:text-7xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  <Counter value={stat.value} />
                </div>
                <div className="text-slate-400 group-hover:text-slate-300 transition-colors">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Global Reach Section */}
      <GlobalReach />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Research Community */}
      < section className="py-24 bg-slate-50 dark:bg-black relative overflow-hidden" >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] opacity-20 blur-2xl animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Research Community"
                className="relative rounded-[2rem] shadow-2xl border border-slate-200 dark:border-white/10 w-full transform hover:rotate-1 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="order-1 lg:order-2 space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
                Empowering Future <br />
                <span className="text-indigo-600 dark:text-indigo-400">Cybersecurity Researchers</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Join the HashX Research Forum to showcase your work, connect with
                experts, and contribute to groundbreaking cybersecurity research.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">HashX Research Forum</h3>
                    <p className="text-slate-600 dark:text-slate-400">Connect with a global community of experts.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">Submit Your Research</h3>
                    <p className="text-slate-600 dark:text-slate-400">Showcase your innovative ideas and findings.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button className="px-8 py-3 rounded-full bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-colors">
                  Submit Research Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section >

      {/* Featured Projects Preview */}
      < section className="py-24 bg-white dark:bg-zinc-900/50" >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -40, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "circOut" }}
              className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white"
            >
              Featured Projects
            </motion.h2>
            <Link to="/events" className="hidden md:flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all">
              View all projects <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl h-[450px] border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-zinc-900 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1660836814985-8523a0d713b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="HashX x Manthra"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/70 transition-all duration-500"></div>

              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                  <Shield size={12} /> Case Study
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 leading-tight">HashX x Manthra</h3>
                <p className="text-slate-300 mb-6 line-clamp-2 group-hover:text-white transition-colors">
                  Securing the future of digital education with NSBM IEEE Student Community through comprehensive vulnerability assessments.
                </p>
                <div className="flex items-center text-indigo-400 font-bold group/btn">
                  <span className="mr-2 group-hover/btn:underline decoration-2 underline-offset-4">Read Full Story</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl h-[450px] border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-zinc-900 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1614508569207-3295ac89d75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Cloud Wars"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/70 transition-all duration-500"></div>

              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                  <Database size={12} /> Competition
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 leading-tight">Cloud Wars</h3>
                <p className="text-slate-300 mb-6 line-clamp-2 group-hover:text-white transition-colors">
                  A high-stakes cyber battlefield partnership with OREL IT, testing the limits of cloud infrastructure security.
                </p>
                <div className="flex items-center text-purple-400 font-bold group/btn">
                  <span className="mr-2 group-hover/btn:underline decoration-2 underline-offset-4">Read Full Story</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section >



      {/* CTA Section */}
      < section className="py-24 px-4 bg-slate-50 dark:bg-black" >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2, // Stagger text lines and buttons
              },
            },
          }}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, filter: "blur(10px)", scale: 0.95 },
              visible: {
                opacity: 1,
                filter: "blur(0px)",
                scale: 1,
                transition: { duration: 0.8, ease: "circOut" }
              }
            }}
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white"
          >
            Ready to secure your <GradientText>future?</GradientText>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Get started with HashX today and experience the power of enterprise-grade cybersecurity.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 12 } }
            }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
          >
            <Link to="/contact" className="px-10 py-4 rounded-full bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-500 shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all">
              Contact Sales
            </Link>
            <a href="https://edux.hashx.live/" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-full border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white font-bold text-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              Visit HashX Academy
            </a>
          </motion.div>
        </motion.div>
      </section >
    </div >
  );
}
