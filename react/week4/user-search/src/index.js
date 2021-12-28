import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import UserProvider from "./userContext";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);