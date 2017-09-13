import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

const Main = () => {
    return(
        <Router>
            <App/>
        </Router>
    )
}


render(
    <Main />,
    document.getElementById('root'));

registerServiceWorker();
