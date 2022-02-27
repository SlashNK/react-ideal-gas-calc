import {converterSI} from "./Converter";
import {pUnits, tUnits, valType, vUnits} from "./CalcVals";


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

test('SI:tC', () => {
    expect(converterSI({
        value: 1, type: valType.t, unit: tUnits.c
    }, false)).toBe(274.15)
})
test('SI:tF', () => {
    expect(converterSI({
        value: 1, type: valType.t, unit: tUnits.f
    }, false).toFixed(3)).toBe('255.928')
})
test('SI:tK', () => {
    expect(converterSI({
        value: 1, type: valType.v, unit: tUnits.k
    }, false)).toBe(1)
})

test('SI:tCRev', () => {
    expect(converterSI({
        value: 1, type: valType.t, unit: tUnits.c
    }, true)).toBe(-272.15)
})
test('SI:tFRev', () => {
    expect(converterSI({
        value: 1, type: valType.t, unit: tUnits.f
    }, true).toFixed(2)).toBe('-457.87')
})
test('SI:tKRev', () => {
    expect(converterSI({
        value: 1, type: valType.t, unit: tUnits.k
    }, true)).toBe(1)
})


test('SI:pA', () => {
    expect(converterSI({
        value: 1, type: valType.p, unit: pUnits.a
    }, false)).toBe(101325)
})
test('SI:pA', () => {
    expect(converterSI({
        value: 1, type: valType.p, unit: pUnits.b
    }, false)).toBe(100000)
})
test('SI:pA', () => {
    expect(converterSI({
        value: 1, type: valType.p, unit: pUnits.p
    }, false)).toBe(1)
})

test('SI:pARev', () => {
    expect(converterSI({
        value: 1, type: valType.p, unit: pUnits.a
    }, true)).toBe(1/101325)
})
test('SI:pARev', () => {
    expect(converterSI({
        value: 1, type: valType.p, unit: pUnits.b
    }, true)).toBe(0.00001)
})
test('SI:pARev', () => {
    expect(converterSI({
        value: 1, type: valType.p, unit: pUnits.p
    }, true)).toBe(1)
})