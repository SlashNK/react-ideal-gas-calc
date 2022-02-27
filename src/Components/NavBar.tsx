import React from "react";
import {NavLink} from 'react-router-dom'

export const NavBar: React.FC = () => (
    <nav>
        <div className="nav-wrapper header">
            <a href="#" className="brand-logo right">Уравнение состояния идеального газа</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><NavLink to='/'>Калькулятор</NavLink></li>
                <li><NavLink to='/examples'>Примеры задач</NavLink></li>
                <li><NavLink to='/theory'>Теория</NavLink></li>
            </ul>
        </div>
    </nav>
)