import React from "react";
import "./footer.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <footer>
      <a data-aos="fade-in" href="#" className="footer_logo">
        CESA
      </a>
      <ul className="permalinks">
        <li>
          <a data-aos="fade-in" href="#">
            Home
          </a>
        </li>
        <li>
          <a data-aos="fade-in" href="#Events">
            Event
          </a>
        </li>
        <li>
          <a data-aos="fade-in" href="#experince">
            Community
          </a>
        </li>
        <li>
          <a data-aos="fade-in" href="#portfolio">
            Teams
          </a>
        </li>
        <li>
          <a data-aos="fade-in" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          data-aos="fade-up"
          href="https://www.facebook.com/shubham.ghule.vip"
          target={1}
        >
          <AiOutlineFacebook />
        </a>
        <a
          data-aos="fade-up"
          href="https://twitter.com/shivamsg1428"
          target={1}
        >
          <AiFillTwitterSquare />
        </a>
        <a
          data-aos="fade-up"
          href="https://www.instagram.com/mr_shivam_ghule/"
          target={1}
        >
          <AiOutlineInstagram />
        </a>
      </div>
      <div data-aos="fade-left" className="footer_copyright">
        <small>&copy; CESA: All copyrights are reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
