import React from "react";
import {pUnits, tUnits, valType, vUnits} from "../../Calculations/CalcVals";

interface unitSelectorProps {
    unit: vUnits | tUnits | pUnits | null
    type: valType,
    unitChange(type: valType, unit: vUnits | tUnits | pUnits): void
}


function getSelectedUnit(select:React.ChangeEvent<HTMLSelectElement>,type:valType): vUnits|tUnits|pUnits {
    switch (type) {
        case valType.v:
            return vUnits[select.target.value as keyof typeof vUnits]
        case valType.t:
            return tUnits[select.target.value as keyof typeof tUnits]
        default:
            return pUnits[select.target.value as keyof typeof pUnits]
    }
}

export const UnitSelect: React.FC<unitSelectorProps> = (props: unitSelectorProps) => {
    //console.log(props.type)
    switch (props.type) {
        case valType.v:
            return <select value={Object.keys(vUnits).find(value => (vUnits as Record<string, string>)[value]===props.unit)} onChange={(event) => {props.unitChange(props.type,getSelectedUnit(event,props.type))}}>
                {Object.keys(vUnits).map((key, index) => (
                    <option key={key} value={key}>{(vUnits as Record<string, string>)[key]}</option>))}
            </select>
        case valType.p:
            return <select value={Object.keys(pUnits).find(value => (pUnits as Record<string, string>)[value]===props.unit)}onChange={(event) => {props.unitChange(props.type,getSelectedUnit(event,props.type))}}>
                {Object.keys(pUnits).map((key, index) => (
                    <option key={key} value={key}>{(pUnits as Record<string, string>)[key]}</option>))}
            </select>
        case valType.t:
            return <select value={Object.keys(tUnits).find(value => (tUnits as Record<string, string>)[value]===props.unit)}onChange={(event) => {props.unitChange(props.type,getSelectedUnit(event,props.type))}}>
                {Object.keys(tUnits).map((key, index) => (
                    <option key={key} value={key}>{(tUnits as Record<string, string>)[key]}</option>))}
            </select>

        default:
            return (<p>моль</p>)
    }
}