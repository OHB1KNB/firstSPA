import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './redux/sagas';

import * as serviceWorker from './serviceWorker';
import { rootReducer } from './redux/rootReducer';

import App from './App';

import './index.css';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagaWatcher);

const Application = () => (
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

ReactDOM.render(<Application />, document.getElementById('root'));

serviceWorker.unregister();