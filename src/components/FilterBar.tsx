import React from 'react';
import { FuelType, UsageType } from '../types';

interface FilterBarProps {
    budget: number;
    setBudget: (val: number) => void;
    fuelType: FuelType;
    setFuelType: (val: FuelType) => void;
    usage: UsageType;
    setUsage: (val: UsageType) => void;
    onSearch: (e: React.FormEvent) => void;
}

export default function FilterBar({ budget, setBudget, fuelType, setFuelType, usage, setUsage, onSearch }: FilterBarProps) {
    return (
        <form
            onSubmit={onSearch}
            className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row gap-6 items-end w-full max-w-5xl mx-auto -translate-y-12"
        >
            <div className="flex-1 w-full space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Maksimum Bütçe (₺)</label>
                <input
                    type="number"
                    value={budget}
                    onChange={e => setBudget(Number(e.target.value))}
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    min="1000"
                    step="500"
                />
            </div>

            <div className="flex-1 w-full space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Tercih Edilen Yakıt</label>
                <select
                    value={fuelType}
                    onChange={e => setFuelType(e.target.value as FuelType)}
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none"
                >
                    <option value="hepsi">Farketmez (Hepsi)</option>
                    <option value="benzin">Benzin</option>
                    <option value="dizel">Dizel</option>
                    <option value="elektrik">Elektrikli</option>
                    <option value="hibrit">Hibrit</option>
                </select>
            </div>

            <div className="flex-1 w-full space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Temel Kullanım</label>
                <select
                    value={usage}
                    onChange={e => setUsage(e.target.value as UsageType)}
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none"
                >
                    <option value="karma">Karma (Şehir İçi & Uzun Yol)</option>
                    <option value="şehir içi">Sadece Şehir İçi</option>
                    <option value="uzun yol">Uzun Yolculuklar</option>
                </select>
            </div>

        <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/50 hover:shadow-blue-900/80 hover:-translate-y-1 transition-all duration-300"
            >
                Eşleşme Bul
            </button>
        </form>
    );
}
