import React from 'react'

import { InfoDrawer } from './InfoDrawer'

const tableName = "Attack By Level"
const tableHeaders = ['Level', 'Caster', 'Martial', 'Fighter']
const tableRows: Array<Array<number>> = [
    [1, 6, 7, 9],
    [2, 8, 9, 11], // +1 Potency Rune
    [3, 9, 10, 12],
    [4, 10, 11, 13],
    [5, 12, 13, 16], // +2 Martial (Proficiency) / + 1 Caster (Ability)
    [6, 13, 15, 17],
    [7, 15, 16, 18],
    [8, 16, 17, 19],
    [9, 17, 18, 20],
    [10, 18, 21, 23], // +1 Greater Potency Rune / +1 Martial (Ability)
    [11, 21, 22, 24], // +2 Caster (Proficiency)
    [12, 22, 23, 25],
    [13, 23, 26, 28], // +2 Martial (Profiency)
    [14, 24, 27, 29],
    [15, 26, 28, 30], // +1 Caster (Ability)
    [16, 28, 30, 32], // + 1 Major Potency Rune
    [17, 29, 31, 33],
    [18, 30, 32, 34],
    [19, 31, 33, 36],
    [20, 32, 35, 37], // +1 Martial
]

export function AttackByLevel() {
    return (
        <InfoDrawer infoName={tableName} tableHeaders={tableHeaders} tableRows={tableRows}/>
    )
}

