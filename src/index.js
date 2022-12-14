import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Profil from './pages/profil';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
          <Header/> 
          <Routes>
              <Route path=":userId" element={<Profil />} />
          </Routes>
      </BrowserRouter>     
  </React.StrictMode>
);


