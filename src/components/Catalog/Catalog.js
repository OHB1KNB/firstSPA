import React from 'react';
import { useSelector } from 'react-redux';

import './catalog.css';
import {Link, Route, Switch, useParams, useRouteMatch} from "react-router-dom";

const Catalog = () => {
    const myPage = useSelector(state => state.pages.pages);
    let {path , url} = useRouteMatch();

    const CatalogItem = () => {
        let {itemId} = useParams();

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
            <h1>Это наш каталог!!!</h1>
            {myPage.map(({ id, title }) => (
                <h5 key={id}>
                   <Link to={`${url}/${id}`}>{title}</Link>
                </h5>
            ))}
            <Switch>
                <Route exact path={path}>
                    <h3>Выберите пункт меню!</h3>
                </Route>
                <Route path={`${path}/:itemId`}>
                    <CatalogItem/>
                </Route>
            </Switch>
        </div>
    );
};

export default Catalog;