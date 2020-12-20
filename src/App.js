import React from 'react';
import { useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import Page from "./components/Page/Page";
import { requestData } from './redux/actions';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const App = () => {
    const dispatch = useDispatch();
    dispatch(requestData());

    const customHistory = createBrowserHistory();

    return (
        <BrowserRouter history={customHistory}>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={() => <Page pageID={0}/>}/>
                <Route path={'/catalog'} component={Catalog}/>
                <Route path={'/about'} component={() => <Page pageID={1}/>}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;