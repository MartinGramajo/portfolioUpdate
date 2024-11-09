import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Mis Skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Tecnologías</h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Skills, "");
