import React from 'react';
import {NavBar} from "./Components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {CalculatorPage} from "./Pages/CalculatorPage";
import {TheoryPage} from "./Pages/TheoryPage";
import {ExamplesPage} from "./Pages/ExamplesPage";
function App() {
    return (<BrowserRouter>
        <NavBar />
        <div className="container">
            <Routes>
                <Route element={<CalculatorPage/>} path="/"/>
                <Route element={<TheoryPage/>} path="/theory" />
                <Route element={<ExamplesPage/>} path="/examples" />
            </Routes>
        </div>
        <footer>
            <p>Автор: Харитонов Н.</p>
            <p><a href="https://github.com/SlashNK">GihHub</a> <a href="mailto:drmob42@gmail.com">drmob42@gmail.com</a></p>
            <p>2022</p>
        </footer>
    </BrowserRouter>)
}

export default App;
