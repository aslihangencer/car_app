import { Car } from '../types';
import { getCarBadge } from '../utils/comparisonEngine';

interface Props {
    car: Car;
    onSelect: (car: Car) => void;
    isSelected: boolean;
}

export default function CarCard({ car, onSelect, isSelected }: Props) {
    const badge = getCarBadge(car);
    const formatPrice = (p: number) => (p >= 1000000 ? (p / 1000000).toFixed(2) + ' M ₺' : p.toLocaleString('tr-TR') + ' ₺');

    return (
        <div className={`relative bg-slate-900 border-2 rounded-2xl overflow-hidden transition-all duration-300 ${isSelected ? 'border-blue-500 scale-[1.02] shadow-lg shadow-blue-500/20' : 'border-slate-800 hover:border-slate-700'}`}>
            <div className="aspect-video bg-slate-800 relative">
                <img 
                  src={car.image || 'https://via.placeholder.com/400x250?text=Görsel+Hazırlanıyor'} 
                  alt={car.model}
                  className="w-full h-full object-cover opacity-80 transition-opacity"
                  onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400x250?text=Görsel+Bulunamadı' }}
                />
                {badge && (
                    <span className={`absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${badge.color}`}>
                        {badge.label}
                    </span>
                )}
            </div>
            
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-slate-400 text-xs font-bold uppercase">{car.brand}</h3>
                        <p className="text-white text-xl font-black">{car.model}</p>
                    </div>
                    <span className="text-blue-400 font-mono font-bold text-lg">{formatPrice(car.price)}</span>
                </div>
                
                <div className="flex gap-3 text-xs text-slate-500 mb-5">
                    <span>{car.year}</span>
                    <span>•</span>
                    <span>{car.fuelType}</span>
                    <span>•</span>
                    <span>{car.hp} HP</span>
                </div>

                <button 
                    onClick={() => onSelect(car)}
                    className={`w-full py-3 rounded-xl font-bold transition-all ${isSelected ? 'bg-red-500/10 text-red-500 hover:bg-red-500/20' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                    {isSelected ? 'Seçimi Kaldır' : 'Karşılaştır'}
                </button>
            </div>
        </div>
    );
}
