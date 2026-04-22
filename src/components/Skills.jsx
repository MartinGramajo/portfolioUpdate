import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const skills = [
  "React",
  "React Native",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  ".Net",
  "PHP",
  "SQL",
  "Cursor",
  "AWS",
  "APIs",
  "Copilot",
  "Mobile Apps",
  "Git",
  "Docker",
  "Firebase",
];

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Mis Skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Tecnologías</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-2 mt-10">
        {skills.map((skill, index) => (
          <motion.span key={index} className="badge" variants={textVariant()}>
            {skill}
          </motion.span>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
