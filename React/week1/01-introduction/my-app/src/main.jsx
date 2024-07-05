import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Route'
import {BrowserRouter, Routes} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>
)
