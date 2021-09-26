import { useState } from "react";

const calculateDamage = (die: number, dieMultiplier: number, modifiers: Array<number>) => {
    return ((die + 1) / 2) * dieMultiplier + modifiers.reduce((a, b) => a + b, 0);
  };

export const useDamage = (_die: number, _dieMultiplier: number, _modifiers: Array<number>) => {
    const [die, setDie] = useState(_die);
    const [dieMultiplier, setDieMultiplier] = useState(_dieMultiplier);
    const [modifiers, setModifiers] = useState(_modifiers);

    const damage = calculateDamage(die, dieMultiplier, modifiers)

  return [
    damage,
    setDie,
    setDieMultiplier,
    setModifiers,
  ];

} 


