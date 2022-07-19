import './CSS/About.css'
import profile from './Image/profile3.jpg';
import React from 'react';
import Drop from './Drop';

function About(props){
    return(
        <div>
                <Drop name='Nistha Patel' />

         <div className='a1' id='a1'>   
        <div className="about" id="about">
            <h2>About</h2>
            <div className="imgabout">
                <img src={profile} alt='profile' className='imgab'></img>
            
            <div className="self">
                <h4>I am student of Computer Engineering.</h4>
                <p>I am pursuing my bachelor degree in Computer Science from A. D. Patel Institute of Technology, New Vallabh Vidyanagar.</p>
                <div className='dd'>
                <div className='d0'> <div className='det'>
                    <span className="details">Birthday: </span><span className="value">{props.birth}</span></div>
                <br/>
                <div className='det'>
                <span className="details">Phone: </span><span className="value">{props.phone}</span>
                </div>
                <br/>
                <div className='det'>
                <span className="details">City: </span><span className="value">{props.city}</span>
                </div>
                </div>
                
                <div className='d1'>
                <div className='det'>
                <span className="details">Age: </span>
                <span className="value">{props.age}</span>
                </div>
                <br/>
                <div className='det'>
                <span className="details">Degree: </span><span className="value">Bachelor of Engineering</span>
                </div>
                <br/>
                <div className='det'>
                <span className="details">Email: </span><span className="value">{props.email}</span>
                </div>
                </div>
            </div>
            </div>
            </div>
    <div className="objective">
                <h4>Objective:</h4>
                <p>To become a successful, expert in the field of computer Science by channelizing my technical knowledge and skills to ensure personal and professional growth and to contribute to the prosperity of the organization. To seek challenging avenues where my technical skills and engineering experience will match. I am Willing to work in a dynamic environment, while being able to make a significant contribution.</p>
            </div>
        </div>
        </div>
        </div>
    )
}


export default About;