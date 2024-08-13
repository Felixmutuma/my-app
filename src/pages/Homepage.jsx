import React from "react";
import {Outlet,Link,useNavigate} from 'react-router-dom'
import Footer from "../components/Footer";


function Homepage() {

  const navigate = useNavigate();

  const contactMe = () =>{
    navigate('/contact-me'); //redirects to contact me page
  }
    return ( 
        <>
        <div className='container'>
        <header>
          <nav>
            <h2 className='logo'>FELIX <span>JOHN</span></h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About me</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
            <button className='btn' onClick={contactMe}>Contact me</button>
          </nav>
        </header>
        <main>
          <section className='home'>
            <div className='home-content'>
              <h3>Hi, I am Felix <span>John</span></h3>
              <h3>Software developer</h3>
              <p>I am a passionate software developer with a solid academic foundation and hands-on experience in creating impactful digital solutions. 
                I graduated with a degree in Computer Science from Pwani University in 2023, where I honed my skills in software development and gained a deep understanding of computing principles. 
                To further enhance my expertise, I pursued a certification in Software Development from Moringa School in early 2024, 
                focusing on cutting-edge technologies and industry best practices.
              </p>
              <div className="btn-box">
                <button className='btn-1'>Hire me</button>
                <button className='btn-1'>Let's talk</button>
              </div>
    
            </div>
            <div className="img-container">
              <img src="./src/assets/img1.jpeg" alt="img" />
            </div>
          </section>
        </main>
        </div>
        <Footer/>
        </>
    )

}
export default Homepage;