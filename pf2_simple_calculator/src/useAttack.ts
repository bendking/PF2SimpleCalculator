import { useState } from "react";

const calculateHitRate = (bonus: number, MAP: number, AC: number): number => {
    console.log(`1 - (AC - bonus - MAP) / 20 = 1 - ${(AC - bonus - MAP) / 20} = ${1-((AC - bonus - MAP) / 20)}`)
    return Math.min(1 - ((AC - bonus - MAP) / 20), 0.50);
}

const calculateCritRate = (bonus: number, MAP: number, AC: number): number => {
    if ((AC - bonus) > 20) {
        return 0;
    }

    console.log(`1 - (AC - bonus + 9 - MAP) / 20 = 1 - ${(AC - bonus + 9 - MAP) / 20} = ${1-((AC - bonus + 9 - MAP) / 20)}`)
    return Math.min(Math.max(1-((AC - bonus + 9 - MAP) / 20), 0.05), 0.95);
}

export const useAttack = (_bonus: number, _MAP: number, _AC: number) => {
    const [bonus, setBonus] = useState(_bonus);
    const [MAP, setMAP] = useState(_MAP);
    const [AC, setAC] = useState(_AC);

    const critRate: number = calculateCritRate(bonus, MAP, AC)
    const hitRate: number = Math.max(Math.min(calculateHitRate(bonus, MAP, AC), 1 - critRate), 0)
  
  return [
    hitRate,
    critRate,
    bonus,
    MAP,
    AC,
    setBonus,
    setMAP,
    setAC,
  ] as const;
} 


