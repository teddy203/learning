
import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import App from './App';
import Categories from './Categories'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App/>} />
        <Route path="/categories" element={<Categories/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);