import React from "react";
import './Footer.css'

function Footer() {
    return ( 
        <>
            <div className="footer">
                <div className="social-media-container">
                    <a href="https://github.com/Felixmutuma" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/github.jpeg" alt="Github" />
                    </a>
                    <a href="https://x.com/Felixmutuma19" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/twitter.jpeg" alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/felix-john-mutuma/" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/linkedIn.jpeg" alt="LinkedIn" />
                    </a>
                </div>
                <p><span id="copyright">©</span> 2024 Felix John. All rights reserved!</p>
            </div>
             
        </>
     );
}

export default Footer;