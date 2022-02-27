import React from "react";
import {IEqVal, pUnits, tUnits, valType, vUnits} from "../../Calculations/CalcVals";
import {UnitSelect} from "./UnitSelector";

interface ResultBlockProps {
    type: valType

    onSelectChange(unit: vUnits | tUnits | pUnits | null): void

    //Calculation(): IEqVal
}


export const ResultBlock: React.FC<ResultBlockProps> = (props: ResultBlockProps) => {
    let resVal = 1
    let resUnit = 'm^3'
    return (
        <div style={{borderStyle: 'solid'}}>
            <p>Тип результата:</p>
            <UnitSelect type={props.type} onSelectChange={props.onSelectChange}/>
         <button id="calcButton">Произвести вычисления</button>
            <p>Результат:</p>
            <p>{resVal}</p>
            <p className='math'>{resUnit}</p>
            </div>
    )
    }
