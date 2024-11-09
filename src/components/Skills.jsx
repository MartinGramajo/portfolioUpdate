import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import {technologies} from '../constants'
import BallCanvas from "../canvas/Ball";

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Mis Skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Tecnologías</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Skills, "");
