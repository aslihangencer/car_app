export type FuelType = 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid' | 'Any' | 'benzin' | 'dizel' | 'elektrik' | 'hibrit' | 'hepsi' | 'Hybrid' | 'Electric' | 'Petrol' | 'Diesel';
export type UsageType = 'karma' | 'şehir içi' | 'uzun yol';

export interface UserPreferences {
    budget: number;
    fuelType: FuelType | string;
    usage: UsageType;
}

export interface RecommendationResult {
    car: Car;
    score: number;
    explanation: string;
}

export interface Car {
    id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    engineSize: number;
    hp: number;
    fuelType: string;
    mileage: number;
    image: string;
    torque?: number;
    name?: string;
    segment?: string;
    fuelConsumption?: { city: number; highway: number };
    consumption?: { city: number; highway: number };
    strengths?: string[];
    aiImagePrompts?: { 
        front: string; 
        back?: string; 
        side?: string; 
    };
    performanceScores?: {
        priceAffordability: number;
        fuelEfficiency: number;
        durability: number;
        features: number;
        resaleValue: number;
    };
    reliability_score?: number;
    second_hand_value?: number;
    comfort_score?: number;
    price_tr?: { 
        min: number; 
        max: number; 
    };
}

// Bu dosyanın bir modül olduğunu garanti eder
export { };
