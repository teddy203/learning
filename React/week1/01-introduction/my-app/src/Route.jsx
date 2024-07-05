import {Route, Routes  } from 'react-route-dom';
import Request from './Request'
import Search from './Search'
import Friends from './Friends'
import Stranger from './Stranger'
import Contact from './Contact'
import Home from './Home'
import About from './About'

import './index.css'
import { NavLink } from 'react-router-dom';

const App = ()=>{
return(
<div className='App'>

<nav>
<NavLink to="home">Home</NavLink>
<NavLink to="about">About</NavLink>
<NavLink to="contact">Contact</NavLink>

</nav>
<Routes>
<Route path='/home' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/search' element={<Search/>} />
<Route path='/friends' element={<Friends/>} />
<Route path='/request' element={<Request/>} />
<Route path='/stranger' element={<Stranger/>} />

</Routes>


</div>
)
}

export default App