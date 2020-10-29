import React from 'react';
import { useDispatch } from "react-redux";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import { fetchData } from "./redux/actions";

import data from './mocks/catalog.json'
import About from "./components/About/About";
import Main from "./components/Main/Main";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = () => {
    const dispatch = useDispatch();
    dispatch(fetchData(data));

    return (
        <div>
            <BrowserRouter>
                <Header/>
                    <Switch>
                        <Route exact path={'/'} component={Main}/>
                        <Route path={'/catalog'} component={Catalog}/>
                        <Route path={'/about'} component={About}/>
                    </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;
