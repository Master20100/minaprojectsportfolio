import React from 'react';

function Header({ currentPage, handlePageChange }) {
  function highLightActive(e){
    document.querySelectorAll('.navButtons').forEach(
      navButton=>navButton.style.backgroundColor='transparent');
      e.target.style.backgroundColor='green';
  }

  return (
    <>
    <header>Mina Ghaly
    <nav className=" nav nav-tabs">
          <a className='navButtons' href="#about_me"
           onClick={(e) => {handlePageChange('About');highLightActive(e)}}
          >About me</a>  
          <a className='navButtons' href="#projectcontainer"
          onClick={(e) => {handlePageChange('Work');highLightActive(e)}}         
          >Portfolio</a> 
          <a className='navButtons' href="#contact_me"
          onClick={(e) => {handlePageChange('Contact');highLightActive(e)}}
          >Contact me</a> 
          <a className='navButtons' href="#resume"
          onClick={(e) => {handlePageChange('Resume');highLightActive(e)}}
          >Resume</a>
     
    </nav>
    </header>
<div id="gradient">
</div>
</>
  );
}

export default Header;