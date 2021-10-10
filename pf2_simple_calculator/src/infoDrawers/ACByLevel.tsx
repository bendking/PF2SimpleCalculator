import React from 'react'

import { InfoDrawer } from '../InfoDrawer'

const tableName = "AC By Level"
const tableHeaders = ['Level', 'Extreme', 'High', 'Moderate', 'Low']
const tableRows: Array<Array<number>> = [
    [-1, 18, 15, 14, 12],
    [0, 19, 16, 15, 13],
    [1, 19, 16, 15, 13],
    [2, 21, 18, 17, 15],
    [3, 22, 19, 18, 16],
    [4, 24, 21, 20, 18],
    [5, 25, 22, 21, 19],
    [6, 27, 24, 23, 21],
    [7, 28, 25, 24, 22],
    [8, 30, 27, 26, 24],
    [9, 31, 28, 27, 25],
    [10, 33, 30, 29, 27],
    [11, 34, 31, 30, 28],
    [12, 36, 33, 32, 30],
    [13, 37, 34, 33, 31],
    [14, 39, 36, 35, 33],
    [15, 40, 37, 36, 34],
    [16, 42, 39, 38, 36],
    [17, 43, 40, 39, 37],
    [18, 45, 42, 41, 39],
    [19, 46, 43, 42, 40],
    [20, 48, 45, 44, 42],
    [21, 49, 46, 45, 43],
    [22, 51, 48, 47, 45],
    [23, 52, 49, 48, 46],
    [24, 54, 51, 50, 48],
]

export function ACByLevel() {
    return (
        <InfoDrawer infoName={tableName} tableHeaders={tableHeaders} tableRows={tableRows}/>
    )
}

