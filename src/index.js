import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Webfont from 'webfontloader';
import * as serviceWorker from './serviceWorker';

Webfont.load({
  google: {
    families: ['Open Sans:300,400,700','Quicksand:300,400,700', 'sans-serif'] 
  }
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
