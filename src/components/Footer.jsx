import React from "react";
import github from "../assets/img/github.png";
import linken from "../assets/img/linken.png";

export default function Footer() {
  return (
    <footer className="mt-auto  text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full  sm:w-1/3 text-center mb-6 sm:mb-0">
          <img
            src="https://res.cloudinary.com/dtbfspso5/image/upload/v1730777526/logo_a58npi.png"
            alt="logo"
             className="object-contain bg-[#915EFF] rounded-full p-2 w-24 mx-auto sm:mx-0"
          />
          </div>
          <div className="w-full sm:w-1/3 text-center mb-6 sm:mb-0">
            <h4 className="text-xl font-bold mb-2">
              Contáctame <br /> Y pongámonos manos a la obra!
            </h4>
            <p className="text-md mt-6">martingramajo08@gmail.com</p>
            <p className="text-md">San Miguel de Tucumán, Tucumán, Argentina</p>
          </div>
          <div className="w-full sm:w-1/3 text-center sm:text-right">
          <div className="social-icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/martin-gramajo/"
              >
                <img  src={linken} alt="LinkedIn Icon" />
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
            <p className="text-sm">
              Copyright &copy;{new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
