import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bulma/css/bulma.css'
import './index.css';
import './metisMenu.css';

import {BrowserRouter} from 'react-router-dom'



ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById('root'));


serviceWorker.unregister();


