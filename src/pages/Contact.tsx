import { Mail, Phone, MapPin, Clock, Send, Globe } from "lucide-react";
import { GradientText } from "@/app/components/ui/GradientText";
import { motion } from "motion/react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <section className="relative pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Let's <GradientText>Talk!</GradientText>
          </motion.h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get in touch with our expert team to discuss your security needs.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Get in touch</h2>
               <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                 We’d love to hear from you! Whether you have questions about our services, need support, or want to discuss a custom cybersecurity solution, our team is here to help.
               </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 transition-colors hover:border-indigo-500/30">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Head Office</h3>
                  <p className="text-slate-600 dark:text-slate-400">Sri Lanka | UAE | Chile</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 transition-colors hover:border-indigo-500/30">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Email Support</h3>
                  <a href="mailto:contact@hashx.live" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">contact@hashx.live</a>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 transition-colors hover:border-indigo-500/30">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Let's Talk</h3>
                  <a href="tel:+94701111440" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">+94 70 1111 440</a>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 transition-colors hover:border-indigo-500/30">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Working Hours</h3>
                  <p className="text-slate-600 dark:text-slate-400">Monday - Friday: 07am - 10pm</p>
                </div>
              </div>
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
    </div>
  );
}
