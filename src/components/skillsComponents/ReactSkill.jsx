import { motion } from "framer-motion";
import React from "react";

const ReactSkill = () => {
  return (
    <motion.p
      key={Math.random()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration:0.4}}
      exit={{ opacity: 0 }}
    >
      Desarrollo de front end Utilizando react Para el general de lo que se usa
      en el desarrollo, uso de librerías como Axios, React-router-dom, Redux
      Toolkit, Frame Motion, para la implementación en los proyectos, con
      conocimiento correcto de buenas prácticas en la separación de componentes
      y su renderizado.
    </motion.p>
  );
};

export default ReactSkill;
