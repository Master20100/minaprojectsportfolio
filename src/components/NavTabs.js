import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="nav nav-tabs">
          <a href="#about_me"
           onClick={() => handlePageChange('About')}
          >About me</a>  
          <a href="#projectcontainer"
          onClick={() => handlePageChange('Work')}          
          >Work</a> 
          <a href="#contact_me"
          onClick={() => handlePageChange('Contact')}
          >Contact me</a> 
          <a href="#resume"
          onClick={() => handlePageChange('About')}
          >Resume</a>
     
    </nav>
  );
}

export default NavTabs;