import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="header" className="Header">
      <div className="header_container">
        <h2 className="Brand_Name">CESA</h2>
        <small>limitless,, Unforgive, Hardworking</small>
      </div>
      <div className="header_main"></div>
    </section>
  );
};

export default Header;
