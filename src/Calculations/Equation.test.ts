import {solveEquation} from "./Equation";
import {valType} from "./CalcVals";

test('calcV', () => {
    expect(solveEquation({resType : valType.v, t : 1, p : 1, n : 1})!.toFixed(2)).toBe('8.31')
})
test('calcT', () => {
    expect(solveEquation({resType : valType.t, v : 1, p : 1, n : 1})!.toFixed(2)).toBe('0.12')
})
test('calcP', () => {
    expect(solveEquation({resType : valType.p, v : 1, t : 1, n : 1})!.toFixed(2)).toBe('8.31')
})
test('calcN', () => {
    expect(solveEquation({resType : valType.n, v : 1, t : 1, p : 1})!.toFixed(2)).toBe('0.12')
})

