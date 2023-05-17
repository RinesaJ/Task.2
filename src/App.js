import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import { useState } from "react";



function App() {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(prevState => !prevState);
  }
  return (
    <div className="container">
    <div className="cards">
      <Card
        profilePicture=""
        name="Jane Doe"
        date="3.3.0 (14/05/2018)"
        buttonText="New"
        buttonColor="green"
        description="File system changed from Dokan to CBFS Host Cloud Drive 
        is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimizon"
        onToggleDetails={handleToggleDetails}
        showDetails={showDetails}
  
      />
      <Card
        profilePicture=""
        name="Jane Doe"
        date="3.1.0 (20/05/2015)"
        buttonText="Fix"
        buttonColor="Blue"
        description="Intruducing Host Cloud Drive - virtual drive functionality
        New Share options and managment New, more user friendly design Sync optimizions Various performance improvements and bug fixes"
  
      />
      <Card
        profilePicture=""
        profileMargin="130px"
        name="Jane Doe"
        date="3.1.0 (20/05/2015)"
        buttonText="Improvment"
        buttonColor="Violet"
        buttonWidth="100px"
        description={'Added Settings for Auto Start\nAdded Update Notification, \nSpeed Optimization, \nBug Fixes'}
  
      />
      <Card
        profilePicture=""
        name="Jane Doe"
        date="3.3.0 (14/05/2018)"
        buttonText="New"
        buttonColor="green"
        description="File system changed from Dokan to CBFS Host Cloud Drive 
        is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimizon"
  
      />
      <Card
        profilePicture=""
        name="Jane Doe"
        date="3.1.0 (20/05/2015)"
        buttonText="Fix"
        buttonColor="Blue"
        description="Intruducing Host Cloud Drive - virtual drive functionality
        New Share options and managment New, more user friendly design Sync optimizions Various performance improvements and bug fixes"
  
      />
      <Card
        profilePicture=""
        name="Jane Doe"
        date="3.1.0 (20/05/2015)"
        buttonText="Improvment"
        buttonColor="Violet"
        buttonWidth="100px"
        description={'Added Settings for Auto Start\nAdded Update Notification, \nSpeed Optimization, \nBug Fixes'}
      />
      <Card
        profilePicture=""
        name="Jane Doe"
        date="3.3.0 (14/05/2018)"
        buttonText="New"
        buttonColor="green"
        description="File system changed from Dokan to CBFS Host Cloud Drive 
        is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimizon"
  
      />
      <Card
        profilePicture=""
        name="Jane Doe"
        date="3.1.0 (20/05/2015)"
        buttonText="Fix"
        buttonColor="Blue"
        description="Intruducing Host Cloud Drive - virtual drive functionality
        New Share options and managment New, more user friendly design Sync optimizions Various performance improvements and bug fixes"
  
      />
      <Card
        profilePicture=""
        name="Jane Doe"
        date="3.1.0 (20/05/2015)"
        buttonText="Improvment"
        buttonColor="Violet"
        buttonWidth="100px"
        description={'Added Settings for Auto Start\nAdded Update Notification, \nSpeed Optimization, \nBug Fixes'}
      />
    </div>
    </div>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
