import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Profil from './pages/profil';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Header />
      
      <Profil />
      
  </React.StrictMode>
);


