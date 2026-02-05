import { motion } from "motion/react";
import { GradientText } from "@/app/components/ui/GradientText";

export function TermsOfService() {
    return (
        <div className="min-h-screen bg-white dark:bg-black pt-28 pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">
                        Terms of <GradientText>Service</GradientText>
                    </h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400">
                        <p className="text-xl">
                            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the HashX website and services operated by HashX ("us", "we", or "our").
                        </p>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">1. Agreement to Terms</h2>
                            <p>
                                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">2. Intellectual Property</h2>
                            <p>
                                The Service and its original content, features, and functionality are and will remain the exclusive property of HashX and its licensors. The Service is protected by copyright, trademark, and other laws of both the specific country and foreign countries.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">3. Links To Other Web Sites</h2>
                            <p>
                                Our Service may contain links to third-party web sites or services that are not owned or controlled by HashX. HashX has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">4. Termination</h2>
                            <p>
                                We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">5. Governing Law</h2>
                            <p>
                                These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.
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
