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
        <div className='resultBlock'>
            <div className='inputBlock'>
                <button className = "waves-effect waves-light btn deep-purple accent-2"onClick={()=>setResVal(props.calculation)}>Произвести вычисления</button>

                <div className='resType'><p>Тип результата:</p><UnitSelect unit={props.unit} type={props.type} unitChange={props.unitChange}/></div>

            </div>

            <div className='resContainer '><p className='calcLabel'>Результат:</p>
                <p className='resValue' style={{fontSize:'2rem'}}>{resVal}</p></div>
            </div>
    )
    }
