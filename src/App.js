import React from 'react';
import { useDispatch } from "react-redux";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import { fetchData } from "./redux/actions";

import data from '../src/mocks/pages.json'


const App = () => {
    const dispatch = useDispatch();
    dispatch(fetchData(data));

    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default App;
