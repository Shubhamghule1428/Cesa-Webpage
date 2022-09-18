import React, { Component } from "react";
import "../../src/index.css";
import "../css/eventform.css";
import IMG1 from "../assets/event1.jpg";
import IMG2 from "../assets/event4.jpg";
import IMG3 from "../assets/event2.jpg";
import IMG4 from "../assets/event3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const data = [
  {
    id: 1,
    image: IMG2,
    title: "Event 1",
    Register: "",
    demo: "",
  },
  {
    id: 2,
    image: IMG3,
    title: "Event 2",
    Register: "",
    demo: "",
  },
  {
    id: 3,
    image: IMG1,
    title: "Event 3",
    Register: "",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "Event 4",
    Register: "",
    demo: "",
  },
];

const Eventform = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="LiveEvent">
      <div className="img-slider">
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src={IMG1} className="sliderimg" alt="" />
          <img src={IMG2} className="sliderimg" alt="" />
          <img src={IMG3} className="sliderimg" alt="" />
          <img src={IMG4} className="sliderimg" alt="" />
        </AliceCarousel>
      </div>
      <h5 data-aos="fade-up">Our Live Events</h5>
      <h2 data-aos="fade-up">CESA Events</h2>

      <div data-aos="fade-up" className="container liveEvent_container">
        {data.map(({ id, image, title, Register, demo }) => {
          return (
            <article data-aos="fade-up" key={id} className="liveEvent_item">
              <div className="liveEvent_item-image">
                <img data-aos="fade-up" src={image} alt={title} />
              </div>
              <h3 data-aos="fade-up">{title}</h3>
              <div className="liveEvent_item-cta">
                <a
                  data-aos="fade-up"
                  href={Register}
                  className="btn"
                  target="_blank"
                >
                  Register
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Eventform;
