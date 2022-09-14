import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { GiArchiveRegister } from "react-icons/gi";
import { CgCommunity } from "react-icons/cg";
import { RiTeamFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { RiContactsBook2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./sidebar.css";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/Events",
    name: "Events",
    icon: <MdEmojiEvents />,
  },
  {
    path: "/Eventform",
    name: "Register",
    icon: <GiArchiveRegister />,
  },
  {
    path: "/Core",
    name: "Community",
    icon: <CgCommunity />,
  },
  {
    path: "/Teams",
    name: "Teams",
    icon: <RiTeamFill />,
  },
  {
    path: "/Contact",
    name: "Contact",
    icon: <RiContactsBook2Line />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 10px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const linkAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",

      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div className="main-container">
      <motion.div
        animate={{ width: isOpen ? "200px" : "35px" }}
        className="sidebar"
      >
        <div className="top_section">
          {isOpen && (
            <motion.h1
              variants={linkAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="logo"
            >
              CESA
            </motion.h1>
          )}
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="search">
          <div className="search_icon">
            <BiSearchAlt />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimation}
                placeholder="Search"
              />
            )}
          </AnimatePresence>
        </div>

        <section className="routes">
          {routes.map((route) => (
            <NavLink
              activeClassName="active"
              to={route.path}
              key={route.name}
              className="link"
            >
              <div className="icon">{route.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={linkAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
