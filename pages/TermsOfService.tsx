
import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-12">Terms of Service</h1>

            <div className="space-y-12 font-mono text-sm leading-relaxed text-gray-600">
                <section>
                    <h2 className="text-black font-bold uppercase tracking-widest mb-4">01. Agreement to Terms</h2>
                    <p>
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Raw Supply ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
                    </p>
                </section>

                <section>
                    <h2 className="text-black font-bold uppercase tracking-widest mb-4">02. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-black font-bold uppercase tracking-widest mb-4">03. User Representations</h2>
                    <p>
                        By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
                    </p>
                </section>

                <section>
                    <h2 className="text-black font-bold uppercase tracking-widest mb-4">04. Products</h2>
                    <p>
                        We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.
                    </p>
                </section>

                <div className="pt-12 border-t border-gray-200">
                    <p className="text-xs text-gray-400">LAST UPDATED: 2024</p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
