import React from 'react';

function Header({ currentPage, handlePageChange }) {
  return (
    <>
    <header>Mina Ghaly
    <nav className=" nav nav-tabs">
          <a href="#about_me"
           onClick={() => handlePageChange('About')}
          >About me</a>  
          <a href="#projectcontainer"
          onClick={() => handlePageChange('Work')}          
          >Portfolio</a> 
          <a href="#contact_me"
          onClick={() => handlePageChange('Contact')}
          >Contact me</a> 
          <a href="#resume"
          onClick={() => handlePageChange('Resume')}
          >Resume</a>
     
    </nav>
    </header>
<div id="gradient">
</div>
</>
  );
}

export default Header;