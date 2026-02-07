import { Mail, Phone, MapPin, Clock, Send, Globe } from "lucide-react";
import { GradientText } from "@/app/components/ui/GradientText";
import { motion } from "motion/react";
import { FAQ } from "@/app/components/FAQ";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-sm font-medium mb-4 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            24/7 Support Available
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-slate-900 dark:text-white"
          >
            Let's Start a <br className="hidden md:block" />
            <GradientText>Conversation</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Ready to secure your future? Our expert team is standing by to build a custom defense strategy for your unique needs.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Get in touch</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                We’d love to hear from you! Whether you have questions about our services, need support, or want to discuss a custom cybersecurity solution, our team is here to help.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Head Office", desc: "Sri Lanka | UAE | Chile", color: "indigo" },
                { icon: Mail, title: "Email Support", desc: "contact@hashx.live", link: "mailto:contact@hashx.live", color: "purple" },
                { icon: Phone, title: "Let's Talk", desc: "+94 70 1111 440", link: "tel:+94701111440", color: "blue" },
                { icon: Clock, title: "Working Hours", desc: "Monday - Friday: 07am - 10pm", color: "emerald" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all group backdrop-blur-sm"
                >
                  <div className={`w-14 h-14 rounded-xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-400 shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white mb-1">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-slate-400 group-hover:text-white transition-colors text-lg">{item.desc}</a>
                    ) : (
                      <p className="text-slate-400 text-lg">{item.desc}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Company</label>
                  <input type="text" placeholder="Acme Inc." className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Phone</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email</label>
                  <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Subject</label>
                <input required type="text" placeholder="Inquiry about..." className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                <textarea required rows={5} placeholder="Tell us about your needs..." className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none text-slate-900 dark:text-white placeholder:text-slate-400"></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Spacing Adjustments */}
      <div className="h-0"></div>
    </div>
  );
}
