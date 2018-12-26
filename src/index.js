import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/main.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// import '../node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
