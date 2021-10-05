import { useState } from "react";

const calculateHitRate = (bonus: number, MAP: number, AC: number): number => {
    return Math.min(1-((AC- bonus - 1 - MAP) / 20), 0.5);
}

const calculateCritRate = (bonus: number, MAP: number, AC: number): number => {
    if ((AC - bonus) > 20) {
        return 0;
    }

    return Math.min(Math.max(1-((AC - bonus - 11 - MAP) / 20), 0.05), 0.95);
}

export const useAttack = (_bonus: number, _MAP: number, _AC: number) => {
    const [bonus, setBonus] = useState(_bonus);
    const [MAP, setMAP] = useState(_MAP);
    const [AC, setAC] = useState(_AC);

    const hitRate: number = calculateHitRate(bonus, MAP, AC)
    const critRate: number = calculateCritRate(bonus, MAP, AC)
  
  return [
    hitRate,
    critRate,
    setBonus,
    setMAP,
    setAC,
  ] as const;
} 


