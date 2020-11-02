import React from 'react';

import { NavLink } from 'react-router-dom';

import './header.css';

const Header = () => {

    return (
            <nav>
                <ul>
                    <li>
                        <NavLink
                            exact to='/'
                            activeClassName='active'
                        >
                            Главная
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/catalog'
                            activeClassName='active'
                        >
                            Каталог
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/about'
                            activeClassName='active'
                        >
                            О компании
                        </NavLink>
                    </li>
                </ul>
            </nav>
    );
};

export default Header;