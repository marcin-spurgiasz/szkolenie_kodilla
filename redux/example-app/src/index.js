import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './App';
import reducers from './reducers/reducers';
import { addComment } from './actions/actions';

const store = createStore(reducers, applyMiddleware());
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(addComment('pierwszy tekst'));
store.dispatch(addComment('drugi tekst'));

