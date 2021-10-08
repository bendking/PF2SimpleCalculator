import { evaluate } from "mathjs"
import { useAttack } from "./useAttack"
import { useDamage } from "./useDamage"

const calculateResult = (hitRate: number, critRate: number, damage: number) => {
  console.log('Hit rate:' + hitRate);
  console.log('Crit rate:' + critRate);
  return (hitRate * damage) + (critRate * damage * 2);
}

const parseNumber = (str: string): number => {
  return parseInt(str) || 0;
}

const parseExpression = (str: string): number => {
  return evaluate(str) || 0;
}

export const useStrike = (
  _attackBonus: number = 7,
  _attackMAP: number = 0,
  _attackAC: number = 20,
  _damageDie: number = 8,
  _damageDieMultiplier: number = 1,
  _damageModifier: number = 4
) => {
  const [hitRate, critRate, bonus, MAP, AC, setAttackBonus, setAttackMAP, setAttackAC] = useAttack(_attackBonus, _attackMAP, _attackAC);
  const [damage, die, dieMultiplier, modifier, setDamageDie, setDamageDieMultiplier, setDamageModifier] = useDamage(_damageDie, _damageDieMultiplier, _damageModifier);

  const result = calculateResult(hitRate, critRate, damage);

  const handleBonusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAttackBonus(parseNumber(e.currentTarget.value));
  };

  const handleMAPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAttackMAP(parseNumber(e.currentTarget.value));
  };

  const handleACChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAttackAC(parseNumber(e.currentTarget.value));
  };

  const handleDieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDamageDie(parseNumber(e.currentTarget.value));
  };

  const handleDieMultiplierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDamageDieMultiplier(parseNumber(e.currentTarget.value));
  };

  const handleModifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDamageModifier(parseExpression(e.currentTarget.value));
  };

  return [
    result,
    bonus, MAP, AC,
    die, dieMultiplier, modifier,
    handleBonusChange,
    handleMAPChange,
    handleACChange,
    handleDieChange,
    handleDieMultiplierChange,
    handleModifierChange,
  ] as const;
};