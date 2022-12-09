import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Profil from './pages/profil';
import ComponentDidMount from './Api'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Header />
      <ComponentDidMount />
      <Profil />
      
  </React.StrictMode>
);


