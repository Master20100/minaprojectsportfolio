import React from 'react';

export default function Contact() {
  function mouseOutEvent(e){
  
    switch(e.target.id) {
      case 'contactName':
        if(!e.target.value){document.getElementById('errorLabel').innerHTML = "please enter a name"}
        break;
      case 'contactEmail':
        if(!e.target.value){document.getElementById('errorLabel').innerHTML = "please enter an email"}      
        else if(!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(e.target.value)){document.getElementById('errorLabel').innerHTML = "please enter a valid email"}
        break;
        case 'contactMessage':
          if(!e.target.value){document.getElementById('errorLabel').innerHTML = "please enter a message"}
          break;
        }
      
    }

  return (
<section id="contact_me">
  <h1>Contact</h1>
<form>
<label>Name:</label>
<br></br>
<input className='contactInput' id='contactName'   onMouseOut={(e) => { mouseOutEvent(e)}}></input>
<br></br>
<label>Email address:</label>
<br></br>
<input className='contactInput' id='contactEmail'  onMouseOut={(e) => { mouseOutEvent(e)}}></input>
<br></br>
<label>Message:</label>
<br></br>
<textarea rows="4" className='contactInput' id='contactMessage' onMouseOut={(e) => { mouseOutEvent(e)}} ></textarea><br></br>
<input type='Submit'></input>
<br></br>
<label id='errorLabel'></label>
</form>





{/* <h2>Contact me</h2>
<h4>Mobile: 0456770859</h4>
<h4>Github: <a href="http://www.github.com/Master20100">www.github.com/Master20100 </a></h4>
<h4>email: <a href = "mailto: minanabil@msn.com">minanabil@msn.com</a></h4> */}
</section>
  );
}
