import React, {useState} from "react";
import {IEqVal, pUnits, tUnits, valType, vUnits} from "../Calculations/CalcVals";
import {VInputBlock} from "../Components/CalcComponents/VInputBlock";
import {ResultBlock} from "../Components/CalcComponents/ResultBlock";
import {solveEquation} from "../Calculations/Equation";

export interface ICalcProps{
    resVal: IResType
    v: IEqVal
    t: IEqVal,
    p: IEqVal,
    n: IEqVal
}
interface IResType {type: valType,
    unit: vUnits | tUnits | pUnits | null
}

export const CalculatorPage: React.FC<ICalcProps> = (props :ICalcProps) => {
    function msgAlert(msg: string) {
        alert(msg)
    }
    function calculate():string {
        const result:number|null = solveEquation({resVal:resType,n:nState,v:vState,p:pState,t:tState},msgAlert)
        return (result===null) ? '' :result!.toFixed(2)+' '+(resType.unit ===null ? 'моль' : resType.unit)
    }

    function changeUnit(type:valType,unit: vUnits | tUnits | pUnits) {
        switch (type) {
            case valType.v:
                setVState({type: valType.v, unit: unit, value:vState.value})
                break;
            case valType.t:
                setTState({type: valType.t, unit: unit, value:tState.value})
                break;
            case valType.p:
                setPState({type: valType.p, unit: unit, value:pState.value})
                break;
            case valType.n:
                break;
        }
    }
    function changeValue(type:valType,value:number) {
        switch (type) {
            case valType.v:
                setVState({type: valType.v, unit: vState.unit, value:value})
                break;
            case valType.t:
                setTState({type: valType.t, unit: tState.unit, value:value})
                break;
            case valType.p:
                setPState({type: valType.p, unit: pState.unit, value:value})
                break;
            case valType.n:
                setNState({type: valType.n, unit: nState.unit, value:value})
                break;
        }

    }

    function changeResType(event: React.ChangeEvent<HTMLSelectElement>) {
        let unit: vUnits | tUnits | pUnits | null
        switch (valType[event.target.value as keyof typeof valType]) {
            case valType.v:
                unit = vUnits.m
                break;
            case valType.t:
                unit = tUnits.k
                break;
            case valType.p:
                unit = pUnits.p
                break;
            default:
                unit = null
        }
        setResType({type: valType[event.target.value as keyof typeof valType], unit: unit})
        // setVState({type: valType.v,
        //     unit: vUnits.m,
        //     value:0})
        // setTState({type: valType.t,
        //     unit: tUnits.k,
        //     value:0})
        // setPState({type: valType.p,
        //     unit: pUnits.p,
        //     value:0})
        // setNState({type: valType.n,
        //     unit: null,
        //     value:0})
    }
    function getUnitVal(type:valType) {
        switch (type) {
            case valType.v:
                return vState.unit
            break;
            case valType.t:
                return vState.unit
                break;
            case valType.p:
                return vState.unit
                break;
            case valType.n:
                return null;

        }
    }
    function getVal(type:valType) {
        switch (type) {
            case valType.v:
                return vState.value
                break;
            case valType.t:
                return tState.value
                break;
            case valType.p:
                return pState.value
                break;
            case valType.n:
                return nState.value;

        }
    }

    function changeResUnit(type:valType,unit: vUnits | tUnits | pUnits) {
        switch (type) {
            case valType.v:
                setResType({type: valType.v, unit: unit})
                break;
            case valType.t:
                setResType({type: valType.t, unit: unit})
                break;
            case valType.p:
                setResType({type: valType.p, unit: unit})
                break;
            case valType.n:
                break;
        }
    }

    const [resType, setResType] = useState<IResType>(props.resVal)
    const [vState, setVState] = useState<IEqVal>(props.v)
    const [tState, setTState] = useState<IEqVal>(props.t)
    const [pState, setPState] = useState<IEqVal>(props.p)
    const [nState, setNState] = useState<IEqVal>(props.n)
    return (<div className='pageContent'>
        <h1>Калькулятор</h1>
        <select onChange={changeResType} value={Object.keys(valType).find(value => (valType as Record<string, string>)[value]===resType.type)}>
            {Object.keys(valType).map((key) => {console.log(key);return (
                <option key={valType[key as keyof typeof valType]} value={key} >{(valType as Record<string, string>)[key]}</option>)})}
        </select>
        {Object.keys(valType).map((key) => (
            (valType as Record<string, string>)[key] !== resType.type ?
                <VInputBlock value={getVal(valType[key as keyof typeof valType])} unit={getUnitVal(valType[key as keyof typeof valType])} key={key as valType} type={valType[key as keyof typeof valType]} onError={msgAlert} unitChange={changeUnit} valueChange={changeValue}/> :
                null))}
        <ResultBlock unit={resType.unit} type={resType.type} unitChange={changeResUnit} calculation={calculate} />
        {/*<p>{'' + resType.type + resType.unit}</p>*/}
        {/*<p>{''+vState.type+vState.unit+vState.value}</p>*/}
        {/*<p>{''+tState.type+tState.unit+tState.value}</p>*/}
        {/*<p>{''+pState.type+pState.unit+pState.value}</p>*/}
        {/*<p>{''+nState.type+nState.unit+nState.value}</p>*/}
    </div>)
}