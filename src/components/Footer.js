import React from 'react';
import gitIcon from '../Assets/gitIcon.jpg';
import linkedIcon from '../Assets/linkedIcon.jpg';
import stackIcon from '../Assets/stackIcon.jpg';
function Footer(){
  return (<footer>
   
    <a href="http://www.github.com/Master20100"> <img id='gitIcon' src={gitIcon} alt="gitIcon"></img></a>
    <a href="https://www.linkedin.com/in/mina-ghaly-a8b23782/"> <img id='linkedIcon' src={linkedIcon} alt="linkedIcon"></img></a>
    <a href="https://stackoverflow.com/users/16223454/mina-nabil"> <img id='stackIcon' src={stackIcon} alt="stackIcon"></img></a>
    </footer>
  );
}

export default Footer;