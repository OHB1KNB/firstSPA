import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';

import * as serviceWorker from './serviceWorker';
import { rootReducer } from './redux/rootReducer';

import App from './App';

import './index.css';

const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const Application = () => (
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

ReactDOM.render(<Application />, document.getElementById('root'));

serviceWorker.unregister();
