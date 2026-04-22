
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles/styles";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  isLarge,
}) => {
  return (
    <>
      {/* DESKTOP */}
      <div className="hidden xl:block w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
            type: "spring",
          }}
        >
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="cursor-pointer"
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className={`bg-tertiary p-4 rounded-2xl ${
                isLarge
                  ? "w-full h-[600px]"
                  : "w-[350px] h-[480px]"
              }`}
            >
              <div
                className={`relative w-full ${
                  isLarge ? "h-[350px]" : "h-[230px]"
                }`}
              >
                <img
                  src={image}
                  alt="project_image"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="mt-5">
                <h3
                  className={`text-white font-bold ${
                    isLarge ? "text-[24px]" : "text-[18px]"
                  }`}
                >
                  {name}
                </h3>
                <p
                  className={`mt-2 text-secondary ${
                    isLarge ? "text-[16px]" : "text-[12px]"
                  }`}
                >
                  {description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <p
                    key={`${name}-${tag.name}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </Tilt>
          </div>
        </motion.div>
      </div>

      {/* MOBILE */}
      <motion.div
        className={`xl:hidden bg-tertiary p-4 rounded-2xl w-full cursor-pointer ${
          isLarge ? "h-[550px]" : "h-[480px]"
        }`}
        onClick={() => window.open(source_code_link, "_blank")}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.2,
          type: "spring",
        }}
      >
        <div
          className={`relative w-full ${
            isLarge ? "h-[300px]" : "h-[250px]"
          }`}
        >
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3
            className={`text-white font-bold ${
              isLarge ? "text-[22px]" : "text-[18px]"
            }`}
          >
            {name}
          </h3>
          <p
            className={`mt-2 text-secondary ${
              isLarge ? "text-[12px]" : "text-[10px]"
            }`}
          >
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </>
  );
};


const Works = () => {
  const firstProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <>
      {/* TITULOS */}
      <div>
        <p className={`${styles.sectionSubText}`}>Mi trabajo</p>
        <h2 className={`${styles.sectionHeadText}`}>Proyectos.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          "Trabajemos juntos y creemos algo único"
        </p>
      </div>

      {/* 🔥 PROYECTO DESTACADO */}
      <div className="mt-20 w-full">
        <ProjectCard
          index={0}
          {...firstProject}
          isLarge={true}
        />
      </div>

      {/* 📦 RESTO */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {otherProjects.map((project, index) => (
          <ProjectCard
            key={`project-${index + 1}`}
            index={index + 1}
            {...project}
          />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(Works, "works");
