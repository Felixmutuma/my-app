import React from "react";
import './ProjectsList.css' 


function ProjectsList() {
    return ( 
        <>
        <div className="projects-container">
            <div className="project">
                
                <a href="https://spacehub2.netlify.app/" target="blank"><img src="/assets/images/SpaceHub.jpeg" alt="SpaceHub Image" /> <br /></a>         
                <h4>SpaceHub</h4>
                <p>Space Hub is an online platform where you can find and book spaces online.</p>
            </div>
            
            <div className="project">
                <a href="https://algo-trader.netlify.app/" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/AlgoTrader.png" alt="Food Court Image" /></a>
               
                <h4>Forex AlgoTrader</h4>          
                <p>Forex Algo-Trading is a site designed to help spread forex - foreign exchange - knowledge, skills, and ideas among the newbies, intermediate, professional, and advanced forex traders accross the globe.</p>
            </div>

            <div className="project">
                <img src="/assets/images/Food-court.jpeg" alt="Food Court Image" />
                <h4>Food Court</h4>          
                <p>Food Court is a web application for booking meals and in a restaraunt.</p>
            </div>
            
            <div className="project">
                <img src="/assets/images/Bulls-club.jpeg" alt="Bulls Club image" />
                <h4>Bulls Club</h4>          
                <p>Bulls Club is an online platform where <span>BULLS</span> share their ideas online.</p>
            </div>

        </div>
        </>
     );
}

export default ProjectsList;