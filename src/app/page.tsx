"use client";

import { useState } from "react";
import { mockCars as cars } from "../data/cars";
import CarCard from "../components/CarCard";
import ComparePanel from "../components/ComparePanel";
import CompareCars from "../components/CompareCars";
import { Car } from "../types";

export default function Home() {
  const [selectedCars, setSelectedCars] = useState<Car[]>([]);

  const toggleCar = (car: Car) => {
    if (selectedCars.find(c => c.id === car.id)) {
      setSelectedCars(selectedCars.filter(c => c.id !== car.id));
    } else if (selectedCars.length < 5) {
      setSelectedCars([...selectedCars, car]);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
          Geleceğin Sürüşünü Karşılaştırın
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Türkiye'nin en kapsamlı AI destekli araç karşılaştırma motoru ile rasyonel kararlar verin.
        </p>
      </div>

      {/* QUICK AGENT COMPARISON */}
      <CompareCars />

      {/* CAR GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-32">
        {cars.map(car => (
          <CarCard
            key={car.id}
            car={car}
            onSelect={toggleCar}
            isSelected={selectedCars.some(c => c.id === car.id)}
          />
        ))}
      </div>

      {/* FLOATING PANEL */}
      <ComparePanel
        selectedCars={selectedCars}
        onRemove={(id) => setSelectedCars(selectedCars.filter(c => c.id !== id))}
        onClear={() => setSelectedCars([])}
      />
    </main>
  );
}
