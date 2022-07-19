import './CSS/Drop.css';
// import profile from './Image/profile.jpg';
import { FaBars, FaTimes} from "react-icons/fa";
import React, { useRef } from 'react';
import {Link} from 'react-router-dom';


 
function Drop(props){
    
const barRef = useRef();

const showBar = () =>{
    barRef.current.classList.toggle("responsive_nav");
}

    return(
        <div >
            {/* <div className='drop' ref={barRef}>
            <button className='button close-btn' onClick={showBar}>
                <FaTimes size={25} />
            </button>
            <div className='fullscreen'>
            <div className="img">
                <img src={profile} alt='profile' className='proimg' />
           </div>
            <div className='name'>{props.name}</div>

            <div className='icon'>
                <ul className='ulicon'>
                    <li>
                    <a href='https://twitter.com/NisthaPatel13?t=xVxnMcQ2aDi_ZmWqid0oIw&s=08'><FaTwitterSquare size={25} /></a>
                        <a href='https://www.facebook.com/nistha.patel.1428'><FaFacebookSquare size={25} /> </a>
                        <a href='https://www.instagram.com/patelnistha987/'><FaInstagramSquare size={25} /></a>
                        <a href='https://www.linkedin.com/in/nistha-patel-093473193'><FaLinkedin size={25} /></a>
                    </li>
                </ul>
            </div>
            <div id='navbar'>
           <ul className='ul'>
            <li><a href="#home" className='btn active'>Home</a></li>
            <li><a href="#about"  className='btn'>About</a></li>
            <li><a href="#resume" className='btn'>Resume</a></li>
            <li><a href="#contact" className='btn'>Contact</a></li>
            </ul></div>            
        </div>
        </div> */}

        {/* <div className='smallscreen'>
            <button className='button' onClick={showBar}>
              <a href='drop1.js' ><FaBars size={25} /></a> 
            </button>

        </div> */}


            <header>
                <div className="img">
                    {/* <img src={profile} alt='profile' className='proimg' /> */}
                    <div className='name'>{props.name}</div>
                </div>
                

                <nav ref={barRef}>
                    <button className='btn active' onClick={showBar}><Link to="/">Home</Link></button>

                    <button className='btn' onClick={showBar}><Link to="/about" >About</Link></button>

                    <button className='btn' onClick={showBar}><Link to="/resume" >Resume</Link></button>

                    <button className='btn' onClick={showBar}><Link to="/contact" >Contact</Link></button>
                    
                    <button className='button close-btn' onClick={showBar}>
                    <FaTimes size={25} />
                    </button>
                </nav>
                <button className='button' onClick={showBar}>
                    <FaBars size={25} /> 
                </button>
            </header>


        </div>
    )
}

export default Drop;