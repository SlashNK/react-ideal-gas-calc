import React from "react";

export interface IEqVal {
    value:number
    type: valType,
    unit: vUnits|tUnits|pUnits|null,
}
export enum valType {
    v='Объем (V)',
    t='Температура (T)',
    p='Давление (P)',
    n='Моль газа (n)'
}
export enum vUnits{
    m='м^3',
    l='л',
    cm='см^3'
}
export enum tUnits{
    k ='°K',
    c='°C',
    f='°F'
}
export enum pUnits{
    p='Па.' ,
    a='атм.',
    b='бар'
}


