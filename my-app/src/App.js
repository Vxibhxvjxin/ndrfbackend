// App.js
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Components/Common/Footer";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import LoginForm from "./Components/Common/LoginForm"; // Import the LoginForm component
import Dashboard from "./Components/Common/dashboard"; // Import the Dashboard component

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const triggerPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<HomePage triggerPopup={triggerPopup} isPopupVisible={isPopupVisible} closePopup={closePopup} />} 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginForm isVisible={true} onClose={closePopup} />} /> {/* Update the onClose handler */}
          <Route path="/dashboard" element={<dashboard />} /> {/* Add this route */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
