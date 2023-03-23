import React, { useEffect, useState } from "react";

const SplashScreen = ({ isDataLoaded }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isDataLoaded) {
      setIsVisible(false);
    }
  }, [isDataLoaded]);

  return (
    <div className={`splash-screen ${isVisible ? "visible" : "splash-hidden"}`}>
      <div className="ripple"></div>
      <div className="ripple"></div>
      <div className="ripple"></div>
      <img className="splash-logo" src='https://www.hipo.one/assets/media/logos/logo.svg' alt="Logo" />
    </div>
  );
};

export default SplashScreen;