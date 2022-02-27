import React from "react";

export const TheoryPage: React.FC= ()=> {
    return (<>
        <div id="theory" className='calcPanel'>
            <h2>Теория</h2>
            <div className="panelBody">
                <p><b>Уравнение состояния идеального газа</b> (иногда <b>уравнение Менделеева — Клапейрона</b>) —
                    формула,
                    устанавливающая зависимость между давлением, молярным объёмом и абсолютной температурой идеального
                    газа.
                    Уравнение имеет вид:</p>
                <div style={{textAlign:'center'}}><span className="math">pV = vRT</span></div>
                <p>где</p>
                <ul>
                    <li><span className="math">p</span> - давление</li>
                    <li><span className="math">V</span> - объём газа</li>
                    <li><span className="math">v</span> - количество вещества в молях</li>
                    <li><span className="math">R</span> - универсальная газовая постоянная, <span className="math">R ≈ 8,314 Дж/(моль⋅К)</span>
                    </li>
                    <li><span className="math">T</span> - термодинамическая температура, К.</li>
                </ul>
            </div>
        </div>
    </>)
}