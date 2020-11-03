import React from 'react';
import { NavLink } from 'react-router-dom';

import { mainMenu } from './constants';

import './header.css';

const Header = () => (
    <nav>
        <ul>
            {mainMenu.map(({ url, title }) => (
                <li key={url}>
                    <NavLink
                        to={url}
                        exact={true}
                        activeClassName='active'
                    >
                        {title}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
);

export default Header;
