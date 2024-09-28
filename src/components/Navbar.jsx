import React,{useState} from 'react';
import {Outlet,Link,useNavigate} from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const navigate = useNavigate();

    const contactMe = () =>{
      navigate('/contact-me'); //redirects to contact me page
    }

    const [menuOpen,setMenuOpen] = useState(false);

    return ( 
        <>
        <header>
          <nav>
            <h2 className='logo'>FELIX <span>JOHN</span></h2>
            <ul className={menuOpen ? "open" : ""}>
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About me</a></li>
              <button className='btn' onClick={contactMe}>Contact me</button>
            </ul>

            <div className="menu" onClick={()=>{
              setMenuOpen(!menuOpen)
            }}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </header>
        </>
     );
}

export default Navbar;