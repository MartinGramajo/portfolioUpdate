import { motion } from "framer-motion";

const AnimatedComponent = () => (
    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
    <a href="#about">
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
        <motion.div
          animate={{
            y: [0, 24, 0], // El círculo sube y baja
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity, // Repite infinitamente
            repeatType: "loop", // Tipo de repetición
            ease: "easeInOut", // Suaviza el movimiento
          }}
          className="w-3 h-3 bg-white rounded-full"
        />
      </div>
    </a>
  </div>
);

export default AnimatedComponent;
