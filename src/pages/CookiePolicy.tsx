import { motion } from "motion/react";
import { GradientText } from "@/app/components/ui/GradientText";

export function CookiePolicy() {
    return (
        <div className="min-h-screen bg-white dark:bg-black pt-28 pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">
                        Cookie <GradientText>Policy</GradientText>
                    </h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400">
                        <p className="text-xl">
                            This Cookie Policy explains how HashX ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                        </p>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">1. What are cookies?</h2>
                            <p>
                                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">2. Why do we use cookies?</h2>
                            <p>
                                We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">3. How can I control cookies?</h2>
                            <p>
                                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. In addition, most browsers allow you to control cookies through their settings preferences.
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
