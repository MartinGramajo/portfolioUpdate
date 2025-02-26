import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import web from "../assets/img/iconoWeb.png";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <>
      {/* Animación solo en pantallas grandes */}
      <div
      
        className="hidden xl:block"
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-4 rounded-2xl w-[350px] h-[480px]"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={web}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[18px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </div>

      {/* Sin animación en dispositivos móviles */}
      <div className="xl:hidden bg-tertiary p-4 rounded-2xl w-[full] h-[480px]">
        <div className="relative w-full h-[250px] ">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={web}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[18px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};


const Works = () => {
  return (
    <>
      <div className="hidden xl:block">
        <p className={`${styles.sectionSubText}`}>Mi trabajo</p>
        <h2 className={`${styles.sectionHeadText}`}>Proyectos.</h2>
      </div>
      <div  className="block xl:hidden">
        <p className={`${styles.sectionSubText} `}>Mi trabajo</p>
        <h2 className={`${styles.sectionHeadText}`}>Proyectos.</h2>
      </div>

      <div className="w-full flex hidden xl:block">
        <p
          
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          "Trabajemos juntos y creemos algo único"
        </p>
      </div>
      <div className="w-full flex block xl:hidden">
        <p
         
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          "Trabajemos juntos y creemos algo único"
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
