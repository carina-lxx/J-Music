import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />, document.getElementById('root')
);

// change register() to unregister() will make it work offline and load faster
serviceWorker.register();