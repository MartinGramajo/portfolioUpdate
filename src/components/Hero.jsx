import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import useText from "../hook/useText";
import ComputersCanvas from "../canvas/Computers";
import AnimatedComponent from "./AnimatedComponent";
import { useEffect } from "react";

const Hero = () => {
  const { text } = useText();

  useEffect(() => {
    // Lógica para inicializar el canvas solo cuando se haya montado el componente
    console.log('ComputersCanvas Loaded');
    // Aquí va la lógica para crear el canvas, si no existe ya
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto mb-10`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="mr-4">Hola soy Mago</span>{" "}
            <span className="text-[#915EFF]">{text}</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Me llamo Martin Gramajo pero todos me dicen <b>Mago</b>.{" "}
            <br className="sm:block hidden" />
            Desarrollador
            <b> React, React-native y Next.js </b> 
          </p>
        </div>
      </div>
    
        <ComputersCanvas />

      <AnimatedComponent />
    </section>
  );
};

export default Hero;
