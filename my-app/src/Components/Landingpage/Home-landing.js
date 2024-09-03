import React, { useEffect } from "react";
import Navbar from "../Aboutpage/Abt-navbar.js";
import Popup from "../Common/Popup.js";

const HomePage = ({ triggerPopup, isPopupVisible, closePopup }) => {
  useEffect(() => {
    triggerPopup(); // Trigger popup only once on component mount
  }, [triggerPopup]);

  return (
    <div className="home-page">
      <Navbar triggerPopup={triggerPopup} />
      {isPopupVisible && <Popup />} {/* Conditionally render Popup */}
      {/* Home page content */}
    </div>
  );
};

export default HomePage;
