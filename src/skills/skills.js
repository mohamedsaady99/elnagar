import React, { Component } from 'react';
import './skills.css'
class Skills extends Component {
    state = {  }
    render() { 
        return (  
        <div className="skills">
            <h2>My Skills</h2>
            <div className="skills-group1">
            <div>
                <p class="skillTitle">HTML</p>
                    <div className='progressBar progressBar-1'>
                        <span> 95%</span>
                    </div>
            </div>
            <div>
                <p class="skillTitle">CSS</p>
                    <div className='progressBar progressBar-2'>
                        <span> 90%</span>
                    </div>
            </div>
            <div>
                <p class="skillTitle">Bootstrap</p>
                    <div className='progressBar progressBar-3'>
                        <span> 85%</span>
                    </div>
            </div>
            <div>
                <p class="skillTitle">JavaScript</p>
                    <div className='progressBar progressBar-4'>
                        <span> 80%</span>
                    </div>
            </div>
            <div>
                <p class="skillTitle">jQuery</p>
                    <div className='progressBar progressBar-5'>
                        <span> 75%</span>
                    </div>
            </div>
        </div>
        <div className="skills-group2">
            <div>
                <p class="skillTitle"> Responsive Design</p>
                    <div className='progressBar progressBar-1'>
                        <span> 95%</span>
                    </div>
            </div>
            <div>
                <p class="skillTitle">ECMAScript 6</p>
                    <div className='progressBar progressBar-2'>
                        <span> 90%</span>
                    </div>
            </div>
            <div>
                <p class="skillTitle">React-JS</p>
                    <div className='progressBar progressBar-3'>
                        <span> 85%</span>
                    </div>
            </div>
            <div>
                <p class="skillTitle">JS BOM</p>
                    <div className='progressBar progressBar-4'>
                        <span> 80%</span>
                    </div>
            </div>
            <div>
                <p class="skillTitle">Photoshop</p>
                    <div className='progressBar progressBar-5'>
                        <span> 60%</span>
                    </div>
            </div>
        </div>
    </div>
        
        );
    }
}
 
export default Skills;