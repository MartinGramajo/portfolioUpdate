import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Mis Skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Tecnologías</h2>
      </motion.div>
      
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <motion.div
            key={technology.name}
            className="w-28 h-28 flex items-center justify-center bg-white rounded-full shadow-lg"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={technology.icon} alt={technology.name} className="w-16 h-16" />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "");
