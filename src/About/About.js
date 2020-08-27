import React, { Component } from 'react';
import './about.css'
import myPhoto from '../images/me.jpg';
class About extends Component {
    state = {  }
    render() { 
        return (  
            <div className="about row no-gutters" id='down' >
               <div className="col-6 about-info">
                   <h2>About Me</h2>
                    <p>
                     I am a professional <span> Front-End Developer</span> and UI Developer creating modern and resposive designs.
                    I have an advanced knowledge of user experience and I’m looking to develop My career in a supervisory role focusing on high profile projects.
                    </p>
                    <p>My professional experience includes  more than 1  year  of hands-on experience efficiently coding websites and applications using modern HTML, CSS, JavaScript and modern frameworks like Bootstrap and React Js , as well as my knowledge of mobile and responsive design.</p>
                        <p> I am an experienced programmer who can find creative solutions to technical challenges, whilst at the same time designing sleek and visually appealing websites. I have extensive knowledge of recognized technical standards and am familiar with modern build practices.</p>
                        
               </div>
               <div className='col-6'>
                   <img src={myPhoto}/>
               </div>
            </div>
        );
    }
}
 
export default About;