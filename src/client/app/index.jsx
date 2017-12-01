import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './ReduxReducers';

import App from './components/App.jsx'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>, document.getElementById('app')
);

