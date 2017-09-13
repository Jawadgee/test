import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
    ,document.getElementById('root'));

registerServiceWorker();
