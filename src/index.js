import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App  hoge="prop1" fuga="prop2"/>
  </React.StrictMode>,
  document.getElementById('root')
);

