import React from "react";
import "../css/contact.css";
import { TbBrandGmail } from "react-icons/tb";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useRef as UseRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect as UseEffect } from "react";

const contact = (props) => {
  UseEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0n01mxe",
      "template_7c9vf59",
      form.current,
      "y6bbqSdAM58O7Snoi"
    );
    e.target.reset(); //***for empting fields kind of reload */
  };
  return (
    <section id="contact" className="contact-box">
      <h5>Get in touch</h5>
      <h2>Contact Us On</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article data-aos="fade-right" className="contact_option">
            <TbBrandGmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>wweshivamghule149@</h5>
            <a href="mailto:wweshivamghule149@gmail.com" target="1">
              Send a message
            </a>
          </article>
          <article data-aos="fade-up" className="contact_option">
            <FaFacebookMessenger className="contact_option-icon" />
            <h4>Messanger</h4>
            <h5>Shubham Ghule</h5>
            <a href="https://m.me/shubham.ghule.vip" target="1">
              Send a message
            </a>
          </article>
          <article data-aos="fade-left" className="contact_option">
            <FaInstagramSquare className="contact_option-icon" />
            <h4>Instagram</h4>
            <h5>im_shivam_ghule</h5>
            <a href="https://www.instagram.com/mr_shivam_ghule/" target="1">
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            data-aos="flip-right"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            data-aos="flip-left"
            type="text"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            data-aos="zoom-in"
            name="message"
            rows="11"
            placeholder="Your message"
            required
          ></textarea>
          <button
            data-aos="fade-in"
            type="submit"
            href="#"
            className="btn btn-primary"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
