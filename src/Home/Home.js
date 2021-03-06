import React, { Component } from 'react';
import './home.css';
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 class Home extends Component {
     
    state = {  
      
    }
    
    render() { 
        
        return (     
            <div className="home">
                <div className="container">
                    <div className="home-information">
                        <h2  className=" home-title animate__animated  animate__bounceInDown"> Mohamed Elnagar </h2>
                        <h4 className="home-info animate__animated  animate__bounceInDown">Creative Developer</h4>
                        <p className="home-desc animate__animated  animate__bounceInDown">
                            Iam a professional <span> Front-End Developer</span> and UI Developer creating modern and resposive designs.
                        </p>
                        <a className="home-btn" target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1jTXDdFkZhvHqfNo5YOhUUf1ASHptB_KE/view?usp=sharing'>
                            Download CV <i className="fas fa-download"></i></a><br/>
                        <button className=' go-down self'>
                            <span target="_self" >
                            <FontAwesomeIcon  icon={faAngleDoubleDown} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;