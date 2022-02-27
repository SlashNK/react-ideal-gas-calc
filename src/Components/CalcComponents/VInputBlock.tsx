import React from 'react'
import {pUnits, tUnits, valType, vUnits} from "../../Calculations/CalcVals";
import {UnitSelect} from "./UnitSelector";

interface VInputBlockProps {
    type: valType
    unit: vUnits | tUnits | pUnits | null
    onError(msg: string): void
    unitChange(type: valType, unit: vUnits | tUnits | pUnits): void
    valueChange(type:valType, value:number):void

}

export const VInputBlock: React.FC<VInputBlockProps> = (props: VInputBlockProps) => {
    return (<div style={{borderStyle: 'solid'}}>
        <p>{props.type}:</p>
        <input type={"number"} placeholder={'Введите значение'} onChange={event => (props.valueChange(props.type,Number(event.target.value)))}/>
        <UnitSelect unit={props.unit} type={props.type} unitChange={props.unitChange }/>
    </div>)
}
