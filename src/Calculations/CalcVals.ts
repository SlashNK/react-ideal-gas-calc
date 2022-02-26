import React from "react";

export interface IEqVal {
    value:number
    type: valType,
    unit: vUnits|tUnits|pUnits|null,
}
export enum valType {
    v,
    t,
    p,
    n
}
export enum vUnits{
    m,
    l,
    cm
}
export enum tUnits{
    k ,
    c,
    f
}
export enum pUnits{
    p ,
    a,
    b
}


