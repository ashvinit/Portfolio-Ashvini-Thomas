import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <React.StrictMode>
        <Router basename={`/${process.env.PUBLIC_URL}`}><App /></Router>
    </React.StrictMode>,
    document.getElementById('root')
);