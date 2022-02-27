import {valType} from "./CalcVals";

interface IEquationArgs {
    resType: valType,
    v?: number,
    t?: number,
    p?: number,
    n?: number

}

export function solveEquation(args: IEquationArgs): number {
    const {resType = valType.v, v = 0, t = 0, p = 0, n = 0} = args
    const r = 8.314
    switch (resType) {
        case valType.v:
            if (p <= 0) {
                showMsgHolder('Давление должно быть положительным числом', '#alertHolder')
                return 0;
            }
            if (n <= 0) {
                showMsgHolder('Количество моль должно быть положительным числом', '#alertHolder')
                return 0;
            }
            return r * n * t / p
        case valType.t:
            if (v <= 0) {
                showMsgHolder('Объем должен быть положительным числом', '#alertHolder')
                return 0;
            }
            if (p <= 0) {
                showMsgHolder('Давление должно быть положительным числом', '#alertHolder')
                return 0;
            }
            if (n <= 0) {
                showMsgHolder('Количество моль должно быть положительным числом', '#alertHolder')
                return 0;
            }
            return p * v / (r * n)
        case valType.p:
            if (v <= 0) {
                showMsgHolder('Объем должен быть положительным числом', '#alertHolder')
                return 0;
            }
            if (n <= 0) {
                showMsgHolder('Количество моль должно быть положительным числом', '#alertHolder')
                return 0;
            }
            return r * n * t / v
        case valType.n:
            if (v <= 0) {
                showMsgHolder('Объем должен быть положительным числом', '#alertHolder')
                return 0;
            }
            if (p <= 0) {
                showMsgHolder('Давление должно быть положительным числом', '#alertHolder')
                return 0;
            }
            return t > 0 ? p * v / (r * t) : 0
            return n
        default:
            showMsgHolder('Ошибка на этапе вычислений', '#alertHolder')
            return 0;
    }
}

function showMsgHolder(msg: string, elm: string) {
    console.log(msg)
}
