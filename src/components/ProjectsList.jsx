import React from "react";
import './ProjectsList.css' 


function ProjectsList() {
    return ( 
        <>
        <div className="projects-container">
            <div className="project">
                <img src="/assets/images/SpaceHub.jpeg" alt="SpaceHub Image" /> <br />
                {/* <a href="https://spacehub2.netlify.app/">SpaceHub</a>          */}
                <h4>SpaceHub</h4>
                <p>Description of SpaceHub project.</p>
            </div>
            <div className="project">
                <img src="/assets/images/Food-court.jpeg" alt="Food Court Image" />
                <h4><a href="http://"></a>Food Court</h4>          
                <p>Description of Food Court project.</p>
            </div>
            <div className="project">
                <img src="/assets/images/Bulls-club.jpeg" alt="Bulls Club image" />
                <h4><a href="http://"></a>Bulls Club</h4>          
                <p>Description of Bulls Club project.</p>
            </div>

        </div>
        </>
     );
}

export default ProjectsList;