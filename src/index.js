import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css';
const cors = require('./cors');
const express = require('express');
const app = express();
app.use(cors);

ReactDOM.render(<App />, document.getElementById('root'));
