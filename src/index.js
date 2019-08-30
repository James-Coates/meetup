import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
// import * as atatus from 'atatus-js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  serviceWorker.register();
}
// atatus.config('5669942bf71a4ffea15ac4a5c6579835').install();
