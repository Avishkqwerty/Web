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
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-indigo-900/20 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto space-y-8 relative z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                <Calendar size={14} /> Upcoming & Past Events
              </div>
              <h1 className="text-4xl md:text-[60px] font-bold tracking-tight text-white mb-8 leading-tight">
                HashX <GradientText>Engagements</GradientText>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-6">
                Connecting with the community, fostering talent, and shaping the future of cybersecurity through interactive events and workshops.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 12 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="hidden md:block"
            >
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-2xl shadow-indigo-500/40 relative group cursor-pointer hover:rotate-12 transition-transform duration-500">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Ticket size={48} className="text-white relative z-10" />
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
              className="group flex flex-col bg-white/5 rounded-[2rem] overflow-hidden shadow-lg border border-white/10 hover:border-indigo-500/50 hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.3)] transition-all duration-500 backdrop-blur-sm"
            >
              <div className="h-64 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>

                {/* Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2 text-center text-white min-w-[70px] shadow-xl">
                  <div className="text-2xl font-bold leading-none mb-1 text-indigo-400">{event.day}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300">{event.month}</div>
                </div>

                {/* Tags */}
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  {event.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full bg-indigo-600/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wide text-white shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 relative">
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="mb-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors line-clamp-2 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-sm font-medium text-indigo-400 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    {event.collab}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 py-2 px-3 rounded-lg w-fit border border-white/5">
                    <MapPin size={16} className="text-indigo-400" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-slate-400 text-base leading-relaxed mb-8 flex-1 relative z-10">
                  {event.desc}
                </p>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-auto relative z-10 group/btn">
                  <span className="text-sm font-bold text-slate-400 group-hover/btn:text-white transition-colors">Read Recap</span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-indigo-600 transition-all duration-300 transform group-hover:rotate-[-45deg]">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subscribe / Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="rounded-[3rem] bg-indigo-900/10 border border-indigo-500/20 p-12 relative overflow-hidden backdrop-blur-md">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-4xl font-bold text-white mb-4">Never Miss an Event</h2>
              <p className="text-slate-400 text-lg">
                Subscribe to our newsletter to get the latest updates on workshops, bootcamps, and cybersecurity challenges.
              </p>
            </div>

            <div className="w-full max-w-md">
              <div className="flex gap-2 p-2 bg-black/40 border border-white/10 rounded-2xl shadow-lg backdrop-blur-sm">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-12 pl-12 pr-4 bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
                  />
                </div>
                <MagneticButton className="h-12 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/20">
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
