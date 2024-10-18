import React from "react";
import './Aboutme.css'

function Aboutme() {
    return ( 
        
    <section className="about-me-card">
        <div className="img-container">
        <img src="/assets/img1.jpeg" alt="img" />
        </div>
        <div className="info-card">
            <p>Felix is a dedicated software developer who has built a strong foundation through both academic and practical experiences. He graduated with a degree in Computer Science from Pwani University in 2023, where he delved deeply into computing concepts and software development techniques. To further refine his skills, Felix pursued a certification in Software Development at Moringa School, which he completed in early 2024. This certification allowed him to explore the latest technologies and industry practices.

                Felix’s portfolio includes several impressive projects that highlight his technical prowess and problem-solving abilities. Notably, he developed Space Hub, a web application designed to simplify the process of booking workspaces online. Additionally, he undertook a case study for Kilifi Hospital, where he created a Web-Based Billing System that streamlined their billing operations. These projects underscore Felix's capacity to deliver practical solutions that address real-world needs.

                Felix's career aspirations are centered around designing, developing, and maintaining software applications that enhance business operations and provide seamless user experiences. He is particularly passionate about creating innovative solutions that make online business management more efficient and user-friendly. What sets Felix apart is his unique approach to leveraging his technical skills to develop cutting-edge software that offers businesses a significant competitive advantage. He is committed to bridging the gap between technological innovation and practical application, ensuring that his solutions are both advanced and effective.
            </p>
            <div className="btn-box">
                <button className='btn-1'>Hire me</button>
                <button className='btn-1'>Let's talk</button>
            </div>
        </div>
    </section>
     );
}

export default Aboutme;