import React from 'react';
import { useDispatch } from "react-redux";

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Content from './components/content/content';
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
