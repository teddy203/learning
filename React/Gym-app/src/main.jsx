
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './Login';
import Home from './Home';
// import Plan from './Plan'
import Categories from './Categories';
import ProfilePage from './ProfilePage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/plan" element={<Plan />} /> */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/profilepage" element={<ProfilePage />} />
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);