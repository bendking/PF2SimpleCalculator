import { useState } from "react";
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
  _damageModifiers: Array<number>
) => {
  const [hitRate, critRate, setAttackBonus, setAttackAC, setAttackMAP] = useAttack(_attackBonus, _attackAC, _attackMAP);
  const [damage, setDamageDie, setDamageDieMultiplier, setDamageModifiers] = useDamage(_damageDie, _damageDieMultiplier, _damageModifiers);

  const result = calculateResult(hitRate, critRate, damage);

  const handleBonusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAttackBonus(parseInt(e.target.value));
  };

  const handleMAPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAttackMAP(parseInt(e.target.value));
  };

  const handleACChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAttackAC(parseInt(e.target.value));
  };

  const handleDieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDamageDie(parseInt(e.target.value));
  };

  const handleDieMultiplierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDamageDieMultiplier(parseInt(e.target.value));
  };


  const handleModifiersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDamageModifiers(parseInt(e.target.value));
  };



  return {
    result,
    handleBonusChange,
    handleACChange,
    handleMAPChange,
    handleDieChange,
    handleDieMultiplierChange,
    handleModifiersChange,
  };
};