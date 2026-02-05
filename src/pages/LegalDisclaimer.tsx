import { motion } from "motion/react";
import { GradientText } from "@/app/components/ui/GradientText";

export function LegalDisclaimer() {
    return (
        <div className="min-h-screen bg-white dark:bg-black pt-28 pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">
                        Legal <GradientText>Disclaimer</GradientText>
                    </h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400">
                        <p className="text-xl">
                            The information contained on the HashX website is for general information purposes only. HashX assumes no responsibility for errors or omissions in the contents on the Service.
                        </p>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">1. No Warranties</h2>
                            <p>
                                In no event shall HashX be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. HashX reserves the right to make additions, deletions, or modification to the contents on the Service at any time without prior notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">2. External Links Disclaimer</h2>
                            <p>
                                The HashX website may contain links to external websites that are not provided or maintained by or in any way affiliated with HashX. Please note that the HashX does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">3. Professional Advice Disclaimer</h2>
                            <p>
                                The information offers cybersecurity and technology related information and is designed for educational and commercial purposes only. You should not rely on this information as a substitute for, nor does it replace, professional legal advice.
                            </p>
                        </section>

                        <p className="text-sm text-slate-500 mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
                            Last updated: February 2026
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
