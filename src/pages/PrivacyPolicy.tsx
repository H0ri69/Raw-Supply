
import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-12 text-black dark:text-white">Privacy Policy</h1>

            <div className="space-y-12 font-mono text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                <section>
                    <h2 className="text-black dark:text-white font-bold uppercase tracking-widest mb-4">01. Data Collection</h2>
                    <p>
                        We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
                    </p>
                </section>

                <section>
                    <h2 className="text-black dark:text-white font-bold uppercase tracking-widest mb-4">02. Data Usage</h2>
                    <p>
                        We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                    </p>
                </section>

                <section>
                    <h2 className="text-black dark:text-white font-bold uppercase tracking-widest mb-4">03. Information Sharing</h2>
                    <p>
                        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                    </p>
                </section>

                <section>
                    <h2 className="text-black dark:text-white font-bold uppercase tracking-widest mb-4">04. Data Security</h2>
                    <p>
                        We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                    </p>
                </section>

                <div className="pt-12 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-xs text-gray-400 dark:text-gray-500">LAST UPDATED: 2026</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
