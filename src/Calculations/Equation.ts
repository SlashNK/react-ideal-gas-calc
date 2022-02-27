import {IEqVal, pUnits, tUnits, valType, vUnits} from "./CalcVals";
import {converterSI} from "./Converter";

interface IEquationArgs {
    resVal: {
        type: valType,
        unit: vUnits | tUnits | pUnits | null
    }
    v?: IEqVal
    t?: IEqVal,
    p?: IEqVal,
    n?: IEqVal
}

export function solveEquation(args: IEquationArgs, showError: (msg: string) => void): number | null {
    const r = 8.314
    let v, t, p, n
    switch (args.resVal.type) {
        case valType.v:
            t = converterSI(args.t!)
            p = converterSI(args.p!)
            n = converterSI(args.n!)
            if (p! <= 0) {
                showError('Давление должно быть положительным числом')
                return 0;
            }
            if (n <= 0) {
                showError('Количество моль должно быть положительным числом')
                return 0;
            }
            return converterSI({value: r * n * t / p, ...(args.resVal)}, true)
        case valType.t:
            v = converterSI(args.v!)
            p = converterSI(args.p!)
            n = converterSI(args.n!)
            if (v <= 0) {
                showError('Объем должен быть положительным числом')
                return 0;
            }
            if (p <= 0) {
                showError('Давление должно быть положительным числом')
                return 0;
            }
            if (n <= 0) {
                showError('Количество моль должно быть положительным числом')
                return 0;
            }
            return converterSI({value: p * v / (r * n), ...(args.resVal)}, true)
        case valType.p:
            v = converterSI(args.v!)
            t = converterSI(args.t!)
            n = converterSI(args.n!)
            if (v <= 0) {
                showError('Объем должен быть положительным числом')
                return 0;
            }
            if (n <= 0) {
                showError('Количество моль должно быть положительным числом')
                return 0;
            }
            return converterSI({value: r * n * t / v, ...(args.resVal)}, true)
        case valType.n:
            v = converterSI(args.v!)
            t = converterSI(args.t!)
            p = converterSI(args.p!)
            if (v <= 0) {
                showError('Объем должен быть положительным числом')
                return 0;
            }
            if (p <= 0) {
                showError('Давление должно быть положительным числом')
                return 0;
            }
            return converterSI({value: t > 0 ? p * v / (r * t) : 0, ...(args.resVal)}, true)
        default:
            showError('Ошибка на этапе вычислений')
            return 0;
    }
}


