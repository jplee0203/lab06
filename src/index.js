import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './comp/Test';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Test />, document.getElementById('root'));
registerServiceWorker();
