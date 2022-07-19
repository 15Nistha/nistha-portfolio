import './CSS/Contact.css';
import React from 'react';
import Drop from './Drop';


function Contact(props){
    return(
        <div>
          <Drop name='Nistha Patel' />

          <div className="contactpage" id='contactpage'>
            <div className='contact' id='contact'>
            <h2 className='contacthead'>Contact</h2>
            
            <h3 className="chead"><i className="fa fa-map-marker"></i>Location</h3>
            <p className="cheadans">{props.loc}</p>
            
            <h3 className="chead"><i className="fa fa-envelope"></i>Email</h3>
            <p className="cheadans">{props.email}</p>
            
            <h3 className="chead"><i className="fa fa-phone"></i>Call</h3>
            <p className="cheadans">{props.phone}</p>
            
            <h3 className="chead"><i className="fa fa-skype" aria-hidden="true"></i>
              Skype</h3>
            <p className="cheadans">{props.skype}</p>
            
            {/* <h3 className="chead"><i className="fa fa-instagram" aria-hidden="true"></i>
            Instagram</h3>
            <p className="cheadans">{props.insta}</p>

            <h3 className="chead"><i className="fa fa-facebook-square" aria-hidden="true"></i>
              Facebook</h3>
            <p className="cheadans">{props.facebook}</p>

            <h3 className="chead"><i className="fa fa-linkedin-square" aria-hidden="true"></i>
              Linkedin</h3>
            <p className="cheadans">{props.linkded}</p> */}

           </div> 
           </div>
        </div>
    )
}

export default Contact;
