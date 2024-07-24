import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FaHeadSideCoughSlash } from 'react-icons/fa'
import HeaderFlipcart from './HeaderFlipcart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter> 
<App />
{/* <HeaderFlipcart/>   */}
</BrowserRouter>
   

)
