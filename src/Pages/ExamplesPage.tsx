import React from "react";
import {useNavigate} from 'react-router-dom'
import {ICalcProps} from "./CalculatorPage";
import {pUnits, tUnits, valType, vUnits} from "../Calculations/CalcVals";

interface IProps {
    setCalcArgs(calcArgs: ICalcProps): void
}

const ThemeContext = React.createContext('light');
export const ExamplesPage: React.FC<IProps> = (props: IProps) => {
    const nav = useNavigate()
    return (<div className='pageContent'>
        <h1>Примеры задач</h1>
        <ol>
            <li>
                <p>В колбе объемом 2,6 литра находится кислород при давлении 2,3 атмосфер и температуре 26 градусов
                    Цельсия .
                    Вопрос: сколько молей кислорода содержится в колбе?</p>
                <p className='calcLabel'>Решить с помощью калькулятора</p>
                <a className="btn-floating btn-large waves-effect waves-light deep-purple accent-2" onClick={() => {
                    props.setCalcArgs({
                        resVal: {
                            type:
                            valType.n,
                            unit: null
                        },
                        v: {
                            type: valType.v,
                            value: 2.6,
                            unit: vUnits.l
                        },
                        t: {
                            type: valType.t,
                            value: 26,
                            unit: tUnits.c
                        },
                        p: {
                            type: valType.p,
                            value: 2.3,
                            unit: pUnits.a
                        },
                        n: {
                            type: valType.n,
                            value: 0,
                            unit: null
                        }
                    });
                    nav('/')
                }}><i className="material-icons">calculate
                </i></a>
            </li>
            <li><p>Некоторое количество гелия при 78 градусах Цельсия и давлении 45,6 атмосфер занимает объем 16,5
                литров.
                Вопрос: Каков объем этого газа при нормальных условиях? (Нормальными условиями для
                газов считается давление в 1 атмосферу и температура 0 градусов Цельсия)</p>
                <p className='calcLabel'>Выполнить 1-ое действие с помощью калькулятора</p>
                <a className="btn-floating btn-large waves-effect waves-light deep-purple accent-2"onClick={() => {
                    props.setCalcArgs({
                        resVal: {
                            type:
                            valType.n,
                            unit: null
                        },
                        v: {
                            type: valType.v,
                            value: 16.5,
                            unit: vUnits.l
                        },
                        t: {
                            type: valType.t,
                            value: 78,
                            unit: tUnits.c
                        },
                        p: {
                            type: valType.p,
                            value: 45.6,
                            unit: pUnits.a
                        },
                        n: {
                            type: valType.n,
                            value: 0,
                            unit: null
                        }
                    });
                    nav('/')
                }}><i
                    className="material-icons">calculate</i></a>
                <p className='calcLabel'>Выполнить 2-ое действие с помощью калькулятора</p>
                <a className="btn-floating btn-large waves-effect waves-light deep-purple accent-2"onClick={() => {
                    props.setCalcArgs({
                        resVal: {
                            type:
                            valType.v,
                            unit: vUnits.l
                        },
                        v: {
                            type: valType.v,
                            value: 2.6,
                            unit: vUnits.l
                        },
                        t: {
                            type: valType.t,
                            value: 0,
                            unit: tUnits.c
                        },
                        p: {
                            type: valType.p,
                            value: 1,
                            unit: pUnits.a
                        },
                        n: {
                            type: valType.n,
                            value: 26.11,
                            unit: null
                        }
                    });
                    nav('/')
                }}><i
                    className="material-icons">calculate</i></a>
            </li>
        </ol>
    </div>)
}