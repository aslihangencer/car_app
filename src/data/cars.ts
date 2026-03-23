import { Car } from '../types';

export const mockCars: Car[] = [
    { id: 'tesla-model-3-performance', brand: 'Tesla', model: 'Model 3 Performance', year: 2024, price: 2850000, engineSize: 0, hp: 498, fuelType: 'Electric', mileage: 0, image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=800' },
    { id: 'bmw-320i', brand: 'BMW', model: '320i Sedan', year: 2020, price: 2150000, engineSize: 1600, hp: 170, fuelType: 'Petrol', mileage: 45000, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800' },
    { id: 'bmw-320i-m-sport', brand: 'BMW', model: '320i M Sport', year: 2024, price: 3450000, engineSize: 1600, hp: 170, fuelType: 'Hybrid', mileage: 0, image: 'https://images.unsplash.com/photo-1617814076367-b757c740b04c?q=80&w=800' },
    { id: 'fiat-500e', brand: 'Fiat', model: '500e La Prima', year: 2023, price: 1450000, engineSize: 0, hp: 118, fuelType: 'Electric', mileage: 2000, image: 'https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=800' },
    { id: 'vw-golf', brand: 'Volkswagen', model: 'Golf 1.5 TSI', year: 2022, price: 1650000, engineSize: 1500, hp: 150, fuelType: 'Petrol', mileage: 15000, image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800' },
    { id: 'audi-a4', brand: 'Audi', model: 'A4 Sedan 40 TDI', year: 2023, price: 2950000, engineSize: 2000, hp: 204, fuelType: 'Diesel', mileage: 5000, image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=800' },
    { id: 'mercedes-c200', brand: 'Mercedes', model: 'C200 4MATIC', year: 2024, price: 3850000, engineSize: 1500, hp: 204, fuelType: 'Hybrid', mileage: 0, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800' },
    { id: 'hyundai-ioniq-5', brand: 'Hyundai', model: 'Ioniq 5 Progress', year: 2024, price: 2250000, engineSize: 0, hp: 225, fuelType: 'Electric', mileage: 0, image: 'https://images.unsplash.com/photo-1662558231583-044813589c3b?q=80&w=800' },
    { id: 'toyota-corolla', brand: 'Toyota', model: 'Corolla Hybrid', year: 2023, price: 1550000, engineSize: 1800, hp: 140, fuelType: 'Hybrid', mileage: 10000, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=800' },
    { id: 'volvo-xc40', brand: 'Volvo', model: 'XC40 Recharge', year: 2024, price: 2650000, engineSize: 0, hp: 408, fuelType: 'Electric', mileage: 0, image: 'https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?q=80&w=800' },
    { id: 'honda-civic', brand: 'Honda', model: 'Civic 1.5 VTEC', year: 2022, price: 1480000, engineSize: 1500, hp: 182, fuelType: 'Petrol', mileage: 20000, image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=800' },
    { id: 'porsche-taycan', brand: 'Porsche', model: 'Taycan Turbo S', year: 2024, price: 12500000, engineSize: 0, hp: 761, fuelType: 'Electric', mileage: 0, image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800' },
    { id: 'renault-clio', brand: 'Renault', model: 'Clio E-Tech', year: 2023, price: 1250000, engineSize: 1600, hp: 145, fuelType: 'Hybrid', mileage: 8000, image: 'https://images.unsplash.com/photo-1549239120-0146bc8a760a?q=80&w=800' },
    { id: 'dacia-duster', brand: 'Dacia', model: 'Duster Journey', year: 2023, price: 1150000, engineSize: 1300, hp: 150, fuelType: 'Petrol', mileage: 12000, image: 'https://images.unsplash.com/photo-1603811440715-617887798363?q=80&w=800' },
    { id: 'kia-ev6', brand: 'Kia', model: 'EV6 GT-Line', year: 2024, price: 2950000, engineSize: 0, hp: 325, fuelType: 'Electric', mileage: 0, image: 'https://images.unsplash.com/photo-1678183601007-8e658390823c?q=80&w=800' },
    { id: 'peugeot-3008', brand: 'Peugeot', model: '3008 GT BlueHDi', year: 2023, price: 1950000, engineSize: 1500, hp: 130, fuelType: 'Diesel', mileage: 11000, image: 'https://images.unsplash.com/photo-1630149651237-38134844666d?q=80&w=800' },
    { id: 'skoda-octavia', brand: 'Skoda', model: 'Octavia Premium', year: 2024, price: 1850000, engineSize: 1500, hp: 150, fuelType: 'Hybrid', mileage: 0, image: 'https://images.unsplash.com/photo-1605515298946-d062f2e9da53?q=80&w=800' },
    { id: 'land-rover-defender', brand: 'Land Rover', model: 'Defender 110', year: 2024, price: 8500000, engineSize: 3000, hp: 300, fuelType: 'Diesel', mileage: 0, image: 'https://images.unsplash.com/photo-1601051515570-877292215c2d?q=80&w=800' },
    { id: 'nissan-qashqai', brand: 'Nissan', model: 'Qashqai e-POWER', year: 2023, price: 1850000, engineSize: 1500, hp: 190, fuelType: 'Hybrid', mileage: 9000, image: 'https://images.unsplash.com/photo-1623933344131-096236968840?q=80&w=800' },
    { id: 'ford-mach-e', brand: 'Ford', model: 'Mach-E GT', year: 2024, price: 3250000, engineSize: 0, hp: 487, fuelType: 'Electric', mileage: 0, image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800' },
];

export const carsDatabase = mockCars;
export const cars = mockCars;
