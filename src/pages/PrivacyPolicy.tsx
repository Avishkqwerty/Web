import { motion } from "motion/react";
import { GradientText } from "@/app/components/ui/GradientText";

export function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white dark:bg-black pt-28 pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">
                        Privacy <GradientText>Policy</GradientText>
                    </h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400">
                        <p className="text-xl">
                            At HashX, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website or use our services.
                        </p>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">1. Information We Collect</h2>
                            <p>
                                We may collect personal information that you voluntarily provide to us when you register directly with us, express an interest in obtaining information about us or our products and services, or otherwise when you contact us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">2. How We Use Your Information</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>To provide and maintain our Service.</li>
                                <li>To notify you about changes to our Service.</li>
                                <li>To allow you to participate in interactive features of our Service.</li>
                                <li>To provide customer support.</li>
                                <li>To gather analysis or valuable information so that we can improve our Service.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">3. Data Security</h2>
                            <p>
                                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">4. Contact Us</h2>
                            <p>
                                If you have questions or comments about this policy, you may email us at privacy@hashx.com.
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
