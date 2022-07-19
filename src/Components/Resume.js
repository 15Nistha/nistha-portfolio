import './CSS/Resume.css';
import React from 'react';
import Drop from './Drop';
function Resume(props){
    return(
        <div > 
        <Drop name='Nistha Patel' />

        <div className="res" id="res">
        <div className='resume' >
            <h2>Resume</h2>
            <p>To become a successful expert in the field of computer engineering by channelizing my technical knowledge and skills to ensure personal and professional growth and to contribute to the prosperity of the organization.</p>

            <div className="resumedetails">
                <div className="div1">
                    <div>
                    <h3 className="summary">Summary</h3>
                    <h4 className="resumehead"><ul><li>{props.name}</li></ul></h4>
                    <ul className='uldetail'>
                        <li>{props.city}</li>
                        <li>{props.phone}</li>
                        <li>{props.email}</li>
                    </ul></div>
                    <div>
                        <h3 className="education">Education</h3>
                        <h4 className="resumehead"><ul><li>BACHELOR OF COMPUTER ENGINEERING</li></ul></h4>
                        
                        <ul className='bach'>
                        <li>
                        <span className="year">2019-2023</span></li>
                        <li>
                        <i>A.D.Patel Institute of Technology</i>
                        </li>
                        <li><span>
                        University:</span> Gujarat Technical University</li>
                        <li>
                        <span>Last CPI:</span> {props.cpi}</li></ul>
                        
                        
                        <h4 className="resumehead"><ul><li>HSC</li></ul></h4>

                        <ul className='bach'>
                        <li>    
                        <span className="year">2019</span></li>
                        <li>
                        <i>{props.hscschool}</i></li>
                        <li>
                        <span>Board:</span> Gujarat</li>
                        <li>
                        <span>Result:</span> {props.hscresult}</li>
                        </ul>
                            
                        <h4 className="resumehead"><ul><li>SSC</li></ul></h4>

                        <ul className='bach'>
                        <li>    
                        <span className="year">2017</span></li>
                        <li>
                        <i>{props.sscschool}</i></li>
                        <li>
                        <span>Board:</span> Gujarat</li>
                        <li>
                        <span>Result:</span> {props.sscresult}</li>
                        </ul>
                    </div>
                </div>

                <div className="div2">
                    <div>
                    <h3 className="summary">Technical Skills</h3>
                    <h4 className="resumehead"><ul><li></li></ul></h4>
                    <ul className='bach1'>
                        <li>{props.sk1}</li>
                        <li>{props.sk2}</li>
                        <li>{props.sk3}</li>
                        <li>{props.sk4}</li>
                    </ul></div>

                    <div>
                    <h3 className="education">Projects</h3>
                        <h4 className="resumehead"><ul><li>{props.head}</li></ul></h4>

                        <ul className='bach'>
                        <li>{props.prodetail}</li></ul>

                        <h4 className="resumehead"><ul><li>{props.head1}</li></ul></h4>

                        <ul className='bach'>
                        <li>{props.prodetail1}</li></ul>

                    </div>


                    <div>
                        <h3 className="education">Other</h3>

                        <h4 className="resumehead"><ul><li><span className="ortherhead">Co-Curricular Activities</span></li></ul></h4>
                        
                        <ul className='bach'>
                        <li>{props.ordetail}</li>
                        <li>{props.ordetail1}</li>
                        <li>{props.ordetail2}</li>
                        <li>{props.ordetail3}</li></ul>

                        <h4 className="resumehead"><ul><li><span className="ortherhead">Strength</span></li></ul></h4>
                        <ul className='bach'>
                            <li>{props.s1}</li>
                            <li>{props.s2}</li>
                            <li>{props.s3}</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Resume;