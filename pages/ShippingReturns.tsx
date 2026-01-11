
import React from 'react';

const ShippingReturns: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-12 text-black dark:text-white">Shipping & Returns</h1>

            <div className="space-y-12 font-mono text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                <section>
                    <h2 className="text-black dark:text-white font-bold uppercase tracking-widest mb-4">01. Shipping Policy</h2>
                    <p className="mb-4">
                        Orders are processed pending item availability and credit card verification. We will contact you via email if there are any issues with your order.
                    </p>
                    <p>
                        Please allow 3-5 business days for order processing. Shipping times are estimates and are not guaranteed, as there may be delays due to the carriers that are out of our control.
                    </p>
                </section>

                <section>
                    <h2 className="text-black dark:text-white font-bold uppercase tracking-widest mb-4">02. International Shipping</h2>
                    <p>
                        Raw Supply ships internationally. Taxes and duties are calculated at checkout. If DDU (Delivery Duty Unpaid) is selected, you are responsible for paying these fees upon delivery.
                    </p>
                </section>

                <section>
                    <h2 className="text-black dark:text-white font-bold uppercase tracking-widest mb-4">03. Returns</h2>
                    <p className="mb-4">
                        We accept returns within 14 days of delivery. Items must be in their original condition, unworn, and with all tags attached.
                    </p>
                    <p>
                        To initiate a return, please contact support@rawsupply.com with your order number. Return shipping costs are the responsibility of the customer unless the item is defective or incorrect.
                    </p>
                </section>

                <section>
                    <h2 className="text-black dark:text-white font-bold uppercase tracking-widest mb-4">04. Refunds</h2>
                    <p>
                        Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within a certain amount of days.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ShippingReturns;
