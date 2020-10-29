import React from 'react';

import './header.css'
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
            <nav>
                    <NavLink
                        to='/'
                        activeClassName='active'
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        to='/catalog'
                        activeClassName='active'
                    >
                        Каталог
                    </NavLink>
                    <NavLink
                        to='/about'
                        activeClassName='active'
                    >
                        О компании
                    </NavLink>
            </nav>
    );
};

export default Header;