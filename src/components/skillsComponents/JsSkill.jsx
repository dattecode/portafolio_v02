import { motion } from "framer-motion";
import React from "react";

const JsSkill = () => {
  return (
    <motion.p
      key={Math.random()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration:0.4}}
      exit={{ opacity: 0 }}
    >
      Tengo experiencia en el uso de JavaScript para crear lógica compleja en
      React, incluyendo el manejo de datos, el procesamiento de eventos y la
      interacción con servicios web. Soy capaz de usar JavaScript para crear
      componentes reutilizables y eficientes en React, lo que permite crear
      aplicaciones más escalables y mantenibles.
    </motion.p>
  );
};

export default JsSkill;
