import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import API from './rest/api'

const Api = new API()

ReactDOM.render(
  <React.StrictMode>
    <App API={Api}/>
  </React.StrictMode>,
  document.getElementById('root')
);
