import {converterSI} from "./Converter";
import {IEqVal, valType, vUnits} from "./CalcVals";


test('SI:vL', () => {
    expect(converterSI({
        value: 1, type: valType.v, unit: vUnits.l
    }, false)).toBe(0.001)
})
test('SI:vCm', () => {
    expect(converterSI({
        value: 1, type: valType.v, unit: vUnits.cm
    }, false)).toBe(0.000001)
})
test('SI:vM', () => {
    expect(converterSI({
        value: 1, type: valType.v, unit: vUnits.m
    }, false)).toBe(1)
})

test('SI:vLRev', () => {
    expect(converterSI({
        value: 1, type: valType.v, unit: vUnits.l
    }, true)).toBe(1000)
})
test('SI:vCmRev', () => {
    expect(converterSI({
        value: 1, type: valType.v, unit: vUnits.cm
    }, true)).toBe(1000000)
})
test('SI:vMRev', () => {
    expect(converterSI({
        value: 1, type: valType.v, unit: vUnits.m
    }, true)).toBe(1)
})
