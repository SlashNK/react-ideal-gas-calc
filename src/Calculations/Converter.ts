import {IEqVal, pUnits, tUnits, valType, vUnits} from "./CalcVals";

export function converterSI(val:IEqVal, reverse=false):number {
    switch (val.type) {
        case valType.v:
            return convertV(val.unit as vUnits,reverse)(val.value);
        case valType.t:
            return convertT(val.unit as tUnits,reverse)(val.value);
        case valType.p:
            return convertP(val.unit as pUnits,reverse)(val.value);
        default:
            return val.value
    }
}

function convertV(unit: vUnits, reverse = false): Function {
    switch (unit) {
        case vUnits.l:
            return !reverse ? ((l: number) => (l * 0.001)) : ((m: number) => (m / 0.001))
        case vUnits.cm:
            return !reverse ? ((cm: number) => (cm * Math.pow(10, -6))) : ((m: number) => m / Math.pow(10, -6))
        default:
            return (m: number) => m;
    }
}

function convertT(unit: tUnits, reverse = false): Function {
    switch (unit) {
        case tUnits.c:
            return !reverse ? ((c: number) => (c + 273.15)) : ((k: number) => (k - 273.15))
        case tUnits.f:
            return !reverse ? ((f: number) => ((f - 32) * 5 / 9 + 273.15)) : ((k: number) => ((k - 273.15) * 9 / 5 + 32))
        default:
            return (k: number) => k;
    }
}

function convertP(unit: pUnits, reverse = false): Function {
    switch (unit) {
        case pUnits.a:
            return !reverse ? ((a: number) => (a * 101325)) : ((p: number) => (p / 101325))
        case pUnits.b:
            return !reverse ? ((b: number) => (b * 100000)) : ((p: number) => (p / 100000))
        default:
            return (p: number) => p;
    }
}


