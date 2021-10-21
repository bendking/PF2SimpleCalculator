import { useAttack } from "./useAttack"
import { useDamage } from "./useDamage"

const calculateResult = (hitRate: number, critRate: number, damage: number) => {
  console.log('Hit rate: ' + hitRate.toFixed(2));
  console.log('Hit Damage: '+ damage)
  console.log('Crit rate: ' + critRate.toFixed(2));
  console.log('Crit damage: ' + damage*2)
  return (hitRate * damage) + (critRate * damage * 2);
}

function setParsedValue(valueAsString: string, valueAsNumber: number, setValue: Function) {
  valueAsString === '' ? setValue(0) : setValue(valueAsNumber);
}

export const useStrike = (
  _attackBonus: number = 7,
  _attackMAP: number = 0,
  _attackAC: number = 16,
  _damageDie: number = 8,
  _damageDieMultiplier: number = 1,
  _damageModifier: number = 4
) => {
  const [hitRate, critRate, bonus, MAP, AC, setAttackBonus, setAttackMAP, setAttackAC] = useAttack(_attackBonus, _attackMAP, _attackAC);
  const [damage, die, dieMultiplier, modifier, setDamageDie, setDamageDieMultiplier, setDamageModifier] = useDamage(_damageDie, _damageDieMultiplier, _damageModifier);

  const result = calculateResult(hitRate, critRate, damage);

  const handleBonusChange = (valueAsString: string, valueAsNumber: number) => {
    setParsedValue(valueAsString, valueAsNumber, setAttackBonus)
  };

  const handleMAPChange = (valueAsString: string, valueAsNumber: number) => {
    setParsedValue(valueAsString, valueAsNumber, setAttackMAP)
  };

  const handleACChange = (valueAsString: string, valueAsNumber: number) => {
    setParsedValue(valueAsString, valueAsNumber, setAttackAC)
  };

  const handleDieChange = (valueAsString: string, valueAsNumber: number) => {
    setParsedValue(valueAsString, valueAsNumber, setDamageDie)
  };

  const handleDieMultiplierChange = (valueAsString: string, valueAsNumber: number) => {
    setParsedValue(valueAsString, valueAsNumber, setDamageDieMultiplier)
  };

  const handleModifierChange = (valueAsString: string, valueAsNumber: number) => {
    setParsedValue(valueAsString, valueAsNumber, setDamageModifier)
  };

  // const handleBonusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setAttackBonus(parseNumber(e.currentTarget.value));
  // };

  // const handleMAPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setAttackMAP(parseNumber(e.currentTarget.value));
  // };

  // const handleACChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setAttackAC(parseNumber(e.currentTarget.value));
  // };

  // const handleDieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setDamageDie(parseNumber(e.currentTarget.value));
  // };

  // const handleDieMultiplierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setDamageDieMultiplier(parseNumber(e.currentTarget.value));
  // };

  // const handleModifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setDamageModifier(parseExpression(e.currentTarget.value));
  // };

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