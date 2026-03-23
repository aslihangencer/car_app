import React from 'react';
import { Car } from '../types';
import { calculateScores, getCarBadge } from '../utils/comparisonEngine';

interface Props {
    cars: Car[];
}

export default function CompareTable({ cars }: Props) {
    if (cars.length === 0) return null;

    const carScores = cars.map(car => ({ ...car, scores: calculateScores(car) }));

    const formatPrice = (p: number) => (p >= 1000000 ? (p / 1000000).toFixed(2) + ' M ₺' : p.toLocaleString('tr-TR') + ' ₺');

    const rows = [
        { label: 'Fiyat', key: 'price', format: formatPrice },
        { label: 'Yıl', key: 'year' },
        { label: 'Motor (cc)', key: 'engineSize' },
        { label: 'Güç (HP)', key: 'hp' },
        { label: 'Güç Skoru', key: 'power', isScore: true },
        { label: 'Verimlilik Skoru', key: 'efficiency', isScore: true },
    ];

    return (
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50 mt-8 shadow-xl">
            <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                    <tr className="border-b border-slate-800 bg-slate-900">
                        <th className="p-6 text-slate-500 font-medium">Özellikler</th>
                        {carScores.map(car => (
                            <th key={car.id} className="p-6 text-white text-center bg-slate-800/30">
                                <div className="text-xs text-blue-400 uppercase tracking-widest">{car.brand}</div>
                                <div className="text-xl font-bold mb-3">{car.model}</div>
                                {(() => {
                                    const badge = getCarBadge(car);
                                    if (!badge) return null;
                                    return (
                                        <div className={`mx-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold leading-none border border-white/5 shadow-md ${badge.color}`}>
                                            <span className="text-sm">{badge.icon}</span> {badge.label}
                                        </div>
                                    );
                                })()}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.label} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                            <td className="p-5 text-slate-400 font-semibold bg-slate-900/20">{row.label}</td>
                            {carScores.map((car, idx) => {
                                const val = row.isScore ? (car.scores as any)[row.key] : (car as any)[row.key];
                                const otherIdx = idx === 0 ? 1 : 0;
                                const otherVal = row.isScore ? (carScores[otherIdx].scores as any)[row.key] : (carScores[otherIdx] as any)[row.key];
                                
                                // Daha iyi olanı yeşil yap (Fiyat hariç, fiyatta düşük olan iyidir)
                                const isBetter = row.key === 'price' ? val < otherVal : val > otherVal;
                                const isSame = val === otherVal;

                                return (
                                    <td key={car.id} className={`p-5 text-center font-mono ${isBetter && !isSame ? 'text-green-400 font-bold' : 'text-slate-300'}`}>
                                        {row.format ? row.format(val) : val}
                                        {isBetter && !isSame && <span className="ml-2 text-[10px] text-green-500">▲</span>}
                                        {!isBetter && !isSame && <span className="ml-2 text-[10px] text-slate-700">▼</span>}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
