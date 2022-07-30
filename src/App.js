import React, { useContext } from 'react';
import './App.css';
import { AuthContext } from './context/AuthContext';
import PrivateRouters from './routes/private.routes';
import PublicRouters from './routes/public.routes';

function App() {
  const { auth } = useContext(AuthContext);
  return auth ? <PrivateRouters/> : <PublicRouters/>
}

export default App;
