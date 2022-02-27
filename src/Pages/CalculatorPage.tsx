import React, {useState} from "react";
import {pUnits, tUnits, valType, vUnits} from "../Calculations/CalcVals";
import {VInputBlock} from "../Components/CalcComponents/VInputBlock";
import {ResultBlock} from "../Components/CalcComponents/ResultBlock";

interface calculatorPageProps {

}

export const CalculatorPage: React.FC = () => {
    function msgAlert(msg: string) {
        alert(msg)
    }
    function changeResType(event: React.ChangeEvent<HTMLSelectElement>) {
        setResType({type: valType[event.target.value as keyof typeof valType], unit:resType.unit})
    }
    function changeResUnit(event:React.ChangeEvent<HTMLSelectElement>) {
        //setResType({type: resType.type, unit:.......})
    }
    const [resType, setResType] = useState<{type: valType, unit: vUnits|tUnits|pUnits|null}>({type:valType.v, unit:vUnits.m})
    return (<div className='calcPanel'>

        <select className='pink lighten-5' onChange={changeResType}>
            {Object.keys(valType).map((key, index) => (
                <option key={key} value={key}>{(valType as Record<string, string>)[key]}</option>))}
        </select>
        {Object.keys(valType).map((key, index) => (
            (valType as Record<string, string>)[key] !== resType.type ?
                <VInputBlock key={key as valType} type={valType[key as keyof typeof valType]} onError={msgAlert} onSelectChange={(key) => {
                }}/> :
                null))}
        <ResultBlock type={resType.type} onSelectChange={()=>{}}/>
    </div>)
}