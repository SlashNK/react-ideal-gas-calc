import {solveEquation} from "./Equation";
import {pUnits, tUnits, valType, vUnits} from "./CalcVals";

test('calcV', () => {
    expect(solveEquation({resVal : {type: valType.v, unit:vUnits.m}, t : {type:valType.t,value:1, unit:tUnits.k}, p : {type:valType.p,value:1, unit:pUnits.p}, n : {type:valType.n,value:1, unit:null}},()=>{})!.toFixed(2)).toBe('8.31')
})
test('calcT', () => {
    expect(solveEquation({resVal : {type: valType.t, unit:tUnits.k}, v : {type:valType.v,value:1, unit:vUnits.m}, p : {type:valType.p,value:1, unit:pUnits.p}, n : {type:valType.n,value:1, unit:null}},()=>{})!.toFixed(2)).toBe('0.12')
})
test('calcP', () => {
    expect(solveEquation({resVal : {type:valType.p, unit:pUnits.p}, v : {type:valType.v,value:1, unit:vUnits.m}, t : {type:valType.t,value:1, unit:tUnits.k}, n : {type:valType.n,value:1, unit:null}},()=>{})!.toFixed(2)).toBe('8.31')
})
test('calcN', () => {
    expect(solveEquation({resVal : {type:valType.n, unit:null}, v : {type:valType.v,value:1, unit:vUnits.m}, t : {type:valType.t,value:1, unit:tUnits.k}, p : {type:valType.p,value:1, unit:pUnits.p}},()=>{})!.toFixed(2)).toBe('0.12')
})
test('calcN2', () => {
    expect(solveEquation({resVal : {type:valType.n, unit:null}, v : {type:valType.v,value:2.6, unit:vUnits.l}, t : {type:valType.t,value:26, unit:tUnits.c}, p : {type:valType.p,value:2.3, unit:pUnits.a}},()=>{})!.toFixed(2)).toBe('0.24')
})