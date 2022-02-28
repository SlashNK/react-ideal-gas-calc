import React, {useState} from 'react';
import {NavBar} from "./Components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CalculatorPage, ICalcProps} from "./Pages/CalculatorPage";
import {TheoryPage} from "./Pages/TheoryPage";
import {ExamplesPage} from "./Pages/ExamplesPage";
import {IEqVal, pUnits, tUnits, valType, vUnits} from "./Calculations/CalcVals";

function App() {
    const [calcProps, setCalcProps] = useState<ICalcProps>({
        resVal: {
            type:
            valType.v,
            unit: vUnits.m
        },
        v: {
            type: valType.v,
            value: 0,
            unit: vUnits.m
        },
        t: {
            type: valType.t,
            value: 0,
            unit: tUnits.k
        },
        p: {
            type: valType.p,
            value: 0,
            unit: pUnits.p
        },
        n: {
            type: valType.n,
            value: 0,
            unit: null
        }
    })
    function setCalcArgs(calcArgs:ICalcProps) {
        setCalcProps(calcArgs)
    }
    return (<BrowserRouter>
        <NavBar/>
        <div className="container">
            <Routes>
                <Route element={<CalculatorPage {...calcProps}/>} path="/"/>
                <Route element={<TheoryPage/>} path="/theory"/>
                <Route element={<ExamplesPage setCalcArgs={setCalcArgs}/>} path="/examples"/>
            </Routes>
        </div>
        <footer>
            <p>Автор: Харитонов Н.</p>
            <p><a href="https://github.com/SlashNK">GihHub</a> <a href="mailto:drmob42@gmail.com">drmob42@gmail.com</a>
            </p>
            <p>2022</p>
        </footer>
    </BrowserRouter>)
}

export default App;
