import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Main from "../components/Main";


function Homepage() {
    return ( 
      <div className='container'>
        <Navbar/>
        <Main/>
        <Footer/>
      </div>

    )

}
export default Homepage;