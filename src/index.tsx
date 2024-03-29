import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App'
import Detail from './components/Detail'
import reducer from './reducers';
import rootSaga from './sagas';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleWare, logger))
sagaMiddleWare.run(rootSaga)


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" exact component={App}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
