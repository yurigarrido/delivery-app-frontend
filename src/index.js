import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';

import AuthProvider from './context/AuthContext';
import App from './App';
import LayoutPrvoder from './context/LayoutContext';

ReactDOM.render(
  <React.StrictMode>
      <AuthProvider>
      <LayoutPrvoder>
       <App/>
       </LayoutPrvoder>
      </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
