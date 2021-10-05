import { useState } from "react";

const calculateDamage = (die: number, dieMultiplier: number, modifier: number): number => {
    return ((die + 1) / 2) * dieMultiplier + modifier;
  };

export const useDamage = (_die: number, _dieMultiplier: number, _modifier: number) => {
    const [die, setDie] = useState(_die);
    const [dieMultiplier, setDieMultiplier] = useState(_dieMultiplier);
    const [modifier, setModifier] = useState(_modifier);

    const damage = calculateDamage(die, dieMultiplier, modifier)

  return [
    damage,
    setDie,
    setDieMultiplier,
    setModifier,
  ] as const;

} 


