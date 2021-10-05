import { evaluate } from "mathjs"
import { useAttack } from "./useAttack"
import { useDamage } from "./useDamage"

const calculateResult = (hitRate: number, critRate: number, damage: number) => {
  return (hitRate * damage) + (critRate * damage);
}

const useStrike = (
  _attackBonus: number,
  _attackAC: number,
  _attackMAP: number,
  _damageDie: number,
  _damageDieMultiplier: number,
  _damageModifier: number
) => {
  const [hitRate, critRate, setAttackBonus, setAttackAC, setAttackMAP] = useAttack(_attackBonus, _attackAC, _attackMAP);
  const [damage, setDamageDie, setDamageDieMultiplier, setDamageModifier] = useDamage(_damageDie, _damageDieMultiplier, _damageModifier);

  const result = calculateResult(hitRate, critRate, damage);

  const handleBonusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAttackBonus(parseInt(e.currentTarget.value));
  };

  const handleMAPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAttackMAP(parseInt(e.currentTarget.value));
  };

  const handleACChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAttackAC(parseInt(e.currentTarget.value));
  };

  const handleDieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDamageDie(parseInt(e.currentTarget.value));
  };

  const handleDieMultiplierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDamageDieMultiplier(parseInt(e.currentTarget.value));
  };

  const handleModifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDamageModifier(evaluate(e.currentTarget.value));
  };

  return {
    result,
    handleBonusChange,
    handleACChange,
    handleMAPChange,
    handleDieChange,
    handleDieMultiplierChange,
    handleModifierChange,
  };
};