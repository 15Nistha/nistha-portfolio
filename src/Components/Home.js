import './CSS/Home.css';
import React from 'react';
import Drop from './Drop';


function Home(props){
    return(
        
       <div>
        <Drop name='Nistha Patel' />
         <div className='h1'>
        <div className="home" id='home'>
            <div className='homediv'>
            <h2 className='name1'>{props.name}</h2><br></br>
            <h3 className='prot'>This is my portfolio!</h3>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Home;