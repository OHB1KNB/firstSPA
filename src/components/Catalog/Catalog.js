import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';

import CatalogItem from './components/CatalogItem';

import './catalog.css';

const Catalog = () => {
    const myPage = useSelector(state => state.pages.pages);
    const { path , url } = useRouteMatch();

    return (
        <div>
            <h1>Наш каталог</h1>
            <ul>
                {myPage.map(({ id, title }) => (
                    <li
                        key={id}
                        className={'catalogList'}
                    >
                        <NavLink
                            to={`${url}/${id}`}
                        >
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <Switch>
                <Route
                    path={`${path}/:itemId`}
                >
                    <CatalogItem/>
                </Route>
            </Switch>
        </div>
    );
};

export default Catalog;