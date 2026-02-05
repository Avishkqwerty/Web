import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { GradientText } from "@/app/components/ui/GradientText";

const faqs = [
    {
        question: "Do you offer custom software development?",
        answer: "Yes, we specialize in building custom, secure, and scalable software solutions tailored to your specific business needs, from web applications to enterprise systems."
    },
    {
        question: "How does your project engagement process work?",
        answer: "We follow a structured approach: Discovery & Planning, Design & Prototyping, Development & Security Testing, Deployment, and Ongoing Support. Each stage is collaborative and transparent."
    },
    {
        question: "What industries do you serve?",
        answer: "We work across various sectors including FinTech, Healthcare, E-commerce, Education, and Government, providing specialized cybersecurity and development services for each."
    },
    {
        question: "Can you help with legacy system modernization?",
        answer: "Absolutely. We can assess your existing infrastructure, propose modernization strategies, and securely migrate your legacy systems to modern, cloud-native architectures."
    },
    {
        question: "What is your typical team structure?",
        answer: "Our project teams typically consist of a Project Manager, UI/UX Designers, Frontend & Backend Developers, and dedicated Security Engineers to ensure security by design."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-4 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Header */}
                <div className="lg:col-span-5 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                    >
                        Frequently Asked <br />
                        <GradientText>Questions</GradientText>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-400 max-w-md leading-relaxed"
                    >
                        Answers to some of the most common questions about our services and process.
                    </motion.p>
                </div>

                {/* Accordion */}
                <div className="lg:col-span-7 space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group rounded-2xl border border-white/5 bg-white/5 overflow-hidden transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/10"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                            >
                                <span className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                                    {faq.question}
                                </span>
                                <span className={`p-2 rounded-full border border-white/10 transition-all duration-300 ${openIndex === idx ? "bg-indigo-600 text-white rotate-180" : "text-slate-400 group-hover:bg-white/10"}`}>
                                    <span className="sr-only">Toggle</span>
                                    {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
