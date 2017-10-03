import React from 'react';
import Hello from './hello';
import ReactDOM from 'react-dom';
import './global.js';
import './generated_file.js';

ReactDOM.render(
    <Hello name="World" />,
    document.getElementById('container')
);
