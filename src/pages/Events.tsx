import { Calendar, MapPin, Mail, ArrowRight, Clock, ExternalLink, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { GradientText } from "@/app/components/ui/GradientText";
import { motion } from "motion/react";
import { MagneticButton } from "@/app/components/ui/MagneticButton";

const events = [
  {
    title: "HashX x Cybershield",
    collab: "In Collaboration with SLIIT IEEE Student group",
    date: "June 28, 2024",
    day: "28",
    month: "JUN",
    location: "SLIIT Malabe",
    desc: "A hands-on workshop on network security and ethical hacking fundamentals.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Workshop", "Network Security"],
  },
  {
    title: "HashX x Cybersprint",
    collab: "In Collaboration with ISACA NSBM Student Group",
    date: "June 28, 2024",
    day: "28",
    month: "JUN",
    location: "NSBM Green University",
    desc: "Intensive bootcamp covering web application security and defense strategies.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Bootcamp", "Web Security"],
  },
  {
    title: "HashX x Manthra",
    collab: "In Collaboration with NSBM IEEE Student Community",
    date: "Dec 04, 2023",
    day: "04",
    month: "DEC",
    location: "Pitipana - Thalagala Rd, Homagama",
    desc: "Manthra showcased top talent through challenges on a secure platform.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Challenge", "Competition"],
  },
  {
    title: "HashX x Cloud Wars",
    collab: "In Collaboration with OREL IT",
    date: "Nov 04, 2023",
    day: "04",
    month: "NOV",
    location: "BMICH, Colombo",
    desc: "Cyber Battlefield showcasing university-level cybersecurity talent.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Competition", "Cloud Security"],
  },
  {
    title: "HashX x 15th National Conference",
    collab: "In Collaboration with Sri Lanka CERT | CC",
    date: "Dec 11, 2022",
    day: "11",
    month: "DEC",
    location: "BMICH, Colombo",
    desc: "Testing top cybersecurity minds and fostering innovation.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Conference", "Innovation"],
  },
  {
    title: "HashX x Enigma",
    collab: "In Collaboration with SLIIT CS Community",
    date: "Sep 17, 2023",
    day: "17",
    month: "SEP",
    location: "SLIIT Computing Faculty",
    desc: "An engaging session on cryptography and secure coding practices.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Session", "Cryptography"],
  },
];

export function Events() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-indigo-50/50 dark:from-indigo-900/10 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-900/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto space-y-8 relative z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-zinc-800 border border-indigo-200 dark:border-white/10 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Calendar size={14} /> Upcoming & Past Events
              </div>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                HashX <GradientText>Engagements</GradientText>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                Connecting with the community, fostering talent, and shaping the future of cybersecurity through interactive events and workshops.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden md:block"
            >
              {/* Decorative Element */}
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 rotate-12 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
                <Ticket size={48} className="text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden shadow-sm border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

                {/* Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-2 text-center text-white min-w-[60px]">
                  <div className="text-xl font-bold leading-none">{event.day}</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider opacity-80">{event.month}</div>
                </div>

                {/* Tags */}
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  {event.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wide text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 relative">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-4">
                    {event.collab}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 py-2 px-3 rounded-lg w-fit">
                    <MapPin size={16} className="text-indigo-500" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 flex-1">
                  {event.desc}
                </p>

                <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between mt-auto">
                  <span className="text-sm font-medium text-slate-400">Read Recap</span>
                  <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subscribe / Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="rounded-[3rem] bg-indigo-900/5 dark:bg-zinc-900/50 border border-indigo-500/10 p-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Never Miss an Event</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Subscribe to our newsletter to get the latest updates on workshops, bootcamps, and cybersecurity challenges.
              </p>
            </div>

            <div className="w-full max-w-md">
              <div className="flex gap-2 p-2 bg-white dark:bg-black border border-slate-200 dark:border-white/10 rounded-2xl shadow-lg">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-12 pl-12 pr-4 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
                <MagneticButton className="h-12 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">
                  Subscribe
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
