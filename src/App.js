import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import btnModule from './Button.module.css'
//import { qaData } from './data/faqQuestions';
import Faqs from './Faqs';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


function App() {
//  let[showAns,setShowans]=useState(qaData[0].id)
  let [status, setStatus]=useState(false);
 let [pstatus,setPstatus]=useState(false);
 let[menuStatus, setMenustatus]=useState(false);
 let [modelStatus,setModalstatus]=useState(false);
 let showNotification=()=>{

  NotificationManager.error('Info message')
 }

  return (
    <div className="App">
              <NotificationContainer/>

     <button onClick={showNotification}>saves</button>
    <Faqs/>
    
   {/* <div>
      <h1>Frequently Asked Question(FAQs)</h1>
      <div className='faqouter'>
      {
        qaData.map((faqitems,i)=>{
          return( 
            <div className='faqitems'>
            <h2 onClick={()=>setShowans(faqitems.id)}>{faqitems.question }</h2>
            <p className={showAns === faqitems.id ? 'activeAns' : ''}>{faqitems.answer} </p>
          </div>
          )
        }
     ) }
      </div>
    </div>
  */}














      <button className='en'onClick={()=>setModalstatus(!modelStatus)}>enquire</button>
     
    <div onClick={()=>setModalstatus(false)} className={`modelOverlay ${modelStatus ?'modelShow':''}`}>    </div>
     <div className={`modelDiv ${modelStatus ?'Showmodaldiv':''}`}>
      <h3>Enquiry now <span onClick={()=>setModalstatus(false)}>&times;</span></h3>
     </div>
    
   


      <button className='micon' onClick={()=>setMenustatus(!menuStatus)}>
      {
        menuStatus ?
        <span> &times; </span>
        :
        <span> &#9776;</span>
      }
      </button>
      <div className={`menu ${ menuStatus ? 'activeMenu':''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Contact us</li>
        </ul>
      </div>

    <input type= {pstatus ? 'text' : 'password'}/> 
    <button onClick={()=>setPstatus(!pstatus)} >{pstatus? 'hide ':'show'}</button>
    <br/>

      <button className={btnModule.error}>error</button>
      <button onClick={()=>setStatus(!status)}>
      {(status)?'hide': 'show'}
      </button>
      {(status)
      ?
      <p className='para'>Welcome</p> 
      :
      ' '
       }
    
    </div>
  );
}

export default App