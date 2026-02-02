import { Calendar, MapPin, Mail, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { GradientText } from "@/app/components/ui/GradientText";
import { motion } from "motion/react";

const events = [
  {
    title: "HashX x Cybershield",
    collab: "In Collaboration with SLIIT IEEE Student group",
    date: "June 28, 2024",
    location: "SLIIT Malabe",
    desc: "A hands-on workshop on network security and ethical hacking fundamentals.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "HashX x Cybersprint",
    collab: "In Collaboration with ISACA NSBM Student Group",
    date: "June 28, 2024",
    location: "NSBM Green University",
    desc: "Intensive bootcamp covering web application security and defense strategies.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "HashX x Manthra",
    collab: "In Collaboration with NSBM IEEE Student Community",
    date: "Dec 04, 2023",
    location: "Pitipana - Thalagala Rd, Homagama",
    desc: "Manthra showcased top talent through challenges on a secure platform.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "HashX x Cloud Wars",
    collab: "In Collaboration with OREL IT",
    date: "Nov 04, 2023",
    location: "BMICH",
    desc: "Cyber Battlefield showcasing university-level cybersecurity talent.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "HashX x 15th National Conference",
    collab: "In Collaboration with Sri Lanka CERT | CC",
    date: "Dec 11, 2022",
    location: "BMICH",
    desc: "Testing top cybersecurity minds and fostering innovation.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "HashX x Enigma",
    collab: "In Collaboration with SLIIT CS Community",
    date: "Sep 17, 2023",
    location: "SLIIT Computing Faculty",
    desc: "An engaging session on cryptography and secure coding practices.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export function Events() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <section className="relative pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            HashX Events & <GradientText>Cybersecurity</GradientText> Engagements
          </motion.h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Discover our past and upcoming cybersecurity events.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col bg-slate-50 dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/5 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group"
            >
              <div className="h-56 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold z-20 shadow-sm flex items-center gap-1.5 text-slate-900 dark:text-white">
                  <Calendar size={12} /> {event.date}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-wide">Event</div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">{event.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{event.collab}</p>
                  <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mt-2">
                    <MapPin size={14} /> {event.location}
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2 flex-1">
                  {event.desc}
                </p>

                <div className="space-y-4 mt-auto">
                  <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                     <p className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wide">Get Updates</p>
                     <div className="flex gap-2">
                       <div className="relative flex-1">
                         <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                         <input 
                           type="email" 
                           placeholder="Your email" 
                           className="w-full pl-9 pr-3 py-2 bg-white dark:bg-black/30 border border-slate-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white placeholder:text-slate-400"
                         />
                       </div>
                       <button className="px-3 py-2 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-colors">
                         <ArrowRight size={14} />
                       </button>
                     </div>
                  </div>

                  <Link to="#" className="flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold text-sm hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
