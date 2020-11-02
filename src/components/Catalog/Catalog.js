import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';

import './catalog.css';

const Catalog = () => {
    const myPage = useSelector(state => state.pages.pages);
    let { path , url } = useRouteMatch();

    const CatalogItem = () => {
        let { itemId } = useParams();

        return (
            <div>
                <h1>
                    {myPage[itemId].title}
                </h1>

                <div className={'content'}>
                    {myPage[itemId].content}
                </div>
            </div>
    );
    }

    return (
        <div>
            <h1>Наш каталог</h1>

                <ul>
                    {myPage.map(({ id, title }) => (
                            <li className={'catalogList'} key={id}>
                               <NavLink to={`${url}/${id}`}>{title}</NavLink>
                            </li>
                    ))}
                </ul>

            <Switch>
                <Route path={`${path}/:itemId`}>
                    <CatalogItem/>
                </Route>
            </Switch>
        </div>
    );
};

export default Catalog;