import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

const App = ()=> <PortfolioContainer/>;

export default App;

// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them
// THEN I see titled images of six of the developer’s applications
// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
