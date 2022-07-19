import About from './Components/About';
import Contact from './Components/Contact';
// import Drop from './Components/Drop';
import Home from './Components/Home';
import Resume from './Components/Resume';
import React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home name='Nistha Parshotambhai Patel' /> } />

          <Route path='/about' element={<About imgabout='Image/profile.jpg' birth='15/11/2001' phone='6352993966' city='Umreth, Anand' age='21' email='nisthapatel15@gmail.com' />} />

          <Route path='/resume' element={<Resume name='Nistha Parshotambhai Patel' city="Umreth,Anand" phone="6352993966" email="nisthapatel15@gmail.com" cpi='8.30' hscschool='Jay Jalaram International School,Anand' hscresult='83%' sscschool='Bhavans English Medium School,Dakor' sscresult='82.67%' sk1='Programming language : java, c, python (basic)' sk2='Web development : HTML5, CSS, Bootstrap, React js' sk3='Tools & Software : Visual studio Code, Visual Studio,microsoft SQL Server Management Studio(SQL Database), postgresql' sk4='MVC framework' head='Yoga Point' prodetail="Created one website for yoga oriented people for learning yoga online by exploring different yoga poster with their
benefits of doing it. Made this website through HTML,CSS,JavaScript and Bootstrap." head1='Book-e-sell' prodetail1='Created one website for buying different books online through this website. Made this website with the help of react.js,.net. ' ordetail='Participated in Smart Gujarat Hackathon 2020' 
ordetail1='IEI Student Chapter ADIT Member' ordetail2='Student Ambassador at NEO( National Engineering Olympiad 4.O )' ordetail3='Current TPC Student Co-ordinator' s1='Team Work' s2='Time Management' s3='Willingness to work' s4='Quick Learner'  />} />

<Route path='/contact' element={<Contact loc='7644/2 Railway Station Raod, Near Rudra Hospital, Umreth-388220,Anand,Gujarat,India' email='nisthapatel15@gmail.com' phone='6352993966' skype='live:.Cid.6aeeebb9949a9d46' /> } />

          {/* <Route path='/contact' element={<Contact loc='7644/2 Railway Station Raod, Near Rudra Hospital, Umreth-388220,Anand,Gujarat,India' email='nisthapatel15@gmail.com' phone='6352993966' skype='live:.Cid.6aeeebb9949a9d46' insta='https://www.instagram.com/patelnistha987/' facebook='https://www.facebook.com/nistha.patel.1428' linkded='https://www.linkedin.com/in/nistha-patel-093473193' /> } /> */}

        </Routes>
    </BrowserRouter>
  );
}

export default App;
