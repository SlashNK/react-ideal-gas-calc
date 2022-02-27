import React from "react";
import {pUnits, tUnits, valType, vUnits} from "../../Calculations/CalcVals";

interface VInputBlockProps {
    type:valType,
    onSelectChange(unit: vUnits|tUnits|pUnits|null): void

}
export const UnitSelect: React.FC<VInputBlockProps> =  (props:VInputBlockProps)=> {
    //console.log(props.type)
    switch (props.type) {
        case valType.v:
            return <select >
                {Object.keys(vUnits).map((key, index) => (
                    <option key={key} value={key}>{(vUnits as Record<string, string>)[key]}</option>))}
            </select>
        case valType.p:
            return <select >
                {Object.keys(pUnits).map((key, index) => (
                    <option key={key} value={key}>{(pUnits as Record<string, string>)[key]}</option>))}
            </select>
        case valType.t:
            return <select>
                {Object.keys(tUnits).map((key, index) => (
                    <option key={key} value={key}>{(tUnits as Record<string, string>)[key]}</option>))}
            </select>

        default:
            return (<p>моль</p>)
    }
}