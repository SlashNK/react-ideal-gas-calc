import React from 'react'
import {pUnits, tUnits, valType, vUnits} from "../../Calculations/CalcVals";
import {UnitSelect} from "./UnitSelector";

interface VInputBlockProps {
    type: valType

    onError(msg: string): void

    onSelectChange(unit: vUnits | tUnits | pUnits | null): void
}

export const VInputBlock: React.FC<VInputBlockProps> = (props: VInputBlockProps) => {
    return (<div style={{borderStyle: 'solid'}}>
        <p>{props.type}:</p>
        <input type={"number"} placeholder={'Введите значение'}/>
        <UnitSelect type={props.type} onSelectChange={props.onSelectChange}/>
    </div>)
}
