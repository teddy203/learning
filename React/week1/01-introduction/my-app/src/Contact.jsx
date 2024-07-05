import Navbar from './Navbar'

const Contact = ()=>{
return(
<div classname= 'ContactOption'>
<NavLink to="search">Search</NavLink>
<NavLink to="friends">Friends</NavLink>
<NavLink to="request">Request</NavLink>
<NavLink to="stranger">Stranger</NavLink>

</div>

<Outlet/>

</div>

)  
}

export default Contact