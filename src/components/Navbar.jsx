import React, { useEffect, useState } from "react";

import { styles } from "../styles/styles";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import close from "../assets/svg/close.svg";
import menu from "../assets/svg/menu.svg";
import linken from "../assets/img/linken.png";
import github from "../assets/img/github.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="https://res.cloudinary.com/dtbfspso5/image/upload/v1730777526/logo_a58npi.png"
            alt="logo"
            className="w-20 h-20 object-contain bg-[#915EFF] rounded-full p-2"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row items-center gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-[#915EFF] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <div className="flex gap-2">
            <div className="social-icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/martin-gramajo/"
              >
                <img src={linken} alt="LinkedIn Icon" />
              </a>
            </div>
            <div className="social-icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MartinGramajo"
              >
                <img src={github} alt="GitHub Icon" />
              </a>
            </div>
            <div className="navbar-text ml-5">
              <HashLink
                className="text-decoration-none"
                to={"/MartinGramajoDevFrontendCV.pdf"}
                download
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  <h6 className="mb-0">CV</h6>
                </button>
              </HashLink>
            </div>
          </div>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
