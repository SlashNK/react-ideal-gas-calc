import React, {useState} from "react";
import {pUnits, tUnits, valType, vUnits} from "../../Calculations/CalcVals";
import {UnitSelect} from "./UnitSelector";

interface ResultBlockProps {
    unit: vUnits | tUnits | pUnits | null
    type: valType

    unitChange(type: valType, unit: vUnits | tUnits | pUnits): void
    calculation(): string
}


export const ResultBlock: React.FC<ResultBlockProps> = (props: ResultBlockProps) => {
    const [resVal, setResVal] = useState('')
    return (
        <div style={{borderStyle: 'solid'}}>
            <p>Тип результата:</p>
            <UnitSelect unit={props.unit} type={props.type} unitChange={props.unitChange}/>
         <button id="calcButton" onClick={()=>setResVal(props.calculation)}>Произвести вычисления</button>
            <p>Результат:</p>
            <p>{resVal}</p>
            </div>
    )
    }
