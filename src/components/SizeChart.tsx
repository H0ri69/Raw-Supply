import React, { useState } from 'react';
import { Ruler, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SizeChartProps {
    productType?: string;
}

const SIZE_DATA: Record<string, any> = {
    // ... data stays same ...
    // I will only include the changed component logic below for replacement
    // skipping lines 8-51
    'TEE 001': {
        metric: {
            columns: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
            rows: [
                { label: 'Width', values: ['47.63', '50.16', '52.70', '57.79', '62.87', '67.95', '73.03'] },
                { label: 'Length', values: ['66.67', '69.22', '70.48', '73.03', '75.56', '76.84', '79.38'] },
                { label: 'Tolerance', values: ['2.54', '2.54', '2.54', '2.54', '2.54', '2.54', '2.54'] },
            ],
            unitLabel: 'cm',
        },
        imperial: {
            columns: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
            rows: [
                { label: 'Width', values: ['18.75', '19.75', '20.75', '22.75', '24.75', '26.75', '28.75'] },
                { label: 'Length', values: ['26.25', '27.25', '27.75', '28.75', '29.75', '30.25', '31.25'] },
                { label: 'Tolerance', values: ['1.00', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00'] },
            ],
            unitLabel: 'in',
        },
    },
    'TEE 002': {
        metric: {
            columns: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
            rows: [
                { label: 'Width', values: ['45.72', '50.80', '55.88', '60.96', '66.04', '71.12'] },
                { label: 'Length', values: ['67.31', '72.39', '76.71', '80.01', '82.55', '85.09'] },
                { label: 'Sleeve length', values: ['40.64', '45.09', '49.53', '52.70', '55.25', '59.69'] },
                { label: 'Tolerance', values: ['2.54', '2.54', '2.54', '2.54', '2.54', '2.54'] },
            ],
            unitLabel: 'cm',
        },
        imperial: {
            columns: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
            rows: [
                { label: 'Width', values: ['18.00', '20.00', '22.00', '24.00', '26.00', '28.00'] },
                { label: 'Length', values: ['26.50', '28.50', '30.20', '31.50', '32.50', '33.50'] },
                { label: 'Sleeve length', values: ['16.00', '17.75', '19.50', '20.75', '21.75', '23.50'] },
                { label: 'Tolerance', values: ['1.00', '1.00', '1.00', '1.00', '1.00', '1.00'] },
            ],
            unitLabel: 'in',
        },
    }
};

const SizeChart: React.FC<SizeChartProps> = ({ productType = 'TEE 001' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial');

    const data = SIZE_DATA[productType] || SIZE_DATA['TEE 001'];
    const currentData = data[unit];

    return (
        <div className="border border-black dark:border-white mt-8">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-black dark:text-white"
            >
                <span className="flex items-center gap-2 font-mono font-bold uppercase tracking-widest text-xs">
                    <Ruler size={16} />
                    Size Guide
                </span>
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden border-t border-black dark:border-white bg-gray-50 dark:bg-[#151515]"
                    >
                        <div className="p-4">
                            {/* Unit Toggle */}
                            <div className="flex gap-4 mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">
                                <button
                                    onClick={() => setUnit('imperial')}
                                    className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 relative ${unit === 'imperial' ? 'text-black dark:text-white' : 'text-gray-400'
                                        }`}
                                >
                                    Imperial
                                    {unit === 'imperial' && (
                                        <motion.span
                                            layoutId="activeUnderline"
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white"
                                        />
                                    )}
                                </button>
                                <button
                                    onClick={() => setUnit('metric')}
                                    className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 relative ${unit === 'metric' ? 'text-black dark:text-white' : 'text-gray-400'
                                        }`}
                                >
                                    Metric
                                    {unit === 'metric' && (
                                        <motion.span
                                            layoutId="activeUnderline"
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white"
                                        />
                                    )}
                                </button>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="p-2 border-b border-gray-200 dark:border-gray-800 text-xs font-mono text-gray-400 uppercase">
                                                Measurement ({currentData.unitLabel})
                                            </th>
                                            {currentData.columns.map((col: string) => (
                                                <th
                                                    key={col}
                                                    className="p-2 border-b border-gray-200 dark:border-gray-800 text-xs font-mono font-bold uppercase text-center text-black dark:text-white"
                                                >
                                                    {col}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentData.rows.map((row: any) => (
                                            <tr key={row.label} className="border-b border-gray-100 dark:border-white/10 last:border-0">
                                                <td className="p-2 text-xs font-mono font-medium uppercase text-black dark:text-gray-300">
                                                    {row.label}
                                                </td>
                                                {row.values.map((val: string, i: number) => (
                                                    <td key={i} className="p-2 text-xs font-mono text-center text-gray-600 dark:text-gray-400">
                                                        {val}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <p className="mt-4 text-[10px] text-gray-400 font-mono uppercase">
                                Product measurements may vary by up to {unit === 'imperial' ? '1.00"' : '2.54cm'} (Tolerance).
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SizeChart;
