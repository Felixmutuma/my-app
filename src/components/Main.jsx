import React from "react";
import './Main.css';
import { useNavigate } from "react-router-dom";

function Main() {

    const navigate = useNavigate();

    const contactMe = () =>{
      navigate('/contact-me'); //redirects to contact me page
    }

    const alert = () =>{
        alert("Clicked")//redirects to contact me page
      }

    return ( 
    <>
        <main>
            <section className='home'>
                <div className="img-container">
                <img src="/assets/img2.jpeg" alt="img" />
                </div>
                <div className='home-content'>
                <h3>Hi, I am Felix <span>John</span></h3>
                <h3>Software developer</h3>
                <p>I am a passionate software developer with a solid academic foundation and hands-on experience in creating impactful digital solutions. 
                    I graduated with a degree in Computer Science from Pwani University in 2023, where I honed my skills in software development and gained a deep understanding of computing principles. 
                    To further enhance my expertise, I pursued a certification in Software Development from Moringa School in early 2024, 
                    focusing on cutting-edge technologies and industry best practices.
                </p>
                <div className="btn-box">
                    <button className='btn-1' onClick={contactMe}>Hire me </button>
                    <button className='btn-1'onClick={contactMe} >Let's talk</button>
                </div>
        
                </div>

            </section>
        </main>
    </>
     );
}

export default Main;