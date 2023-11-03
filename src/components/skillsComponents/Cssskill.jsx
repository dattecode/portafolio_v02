import { motion } from "framer-motion";
import React from "react";

const Cssskill = () => {
  return (
    <motion.p
      key={Math.random()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration:0.4}}
      exit={{ opacity: 0 }}
    >
      Tengo experiencia en el uso de CSS para crear aplicaciones web y móviles
      que sean accesibles para todos los usuarios. Soy capaz de usar CSS para
      crear diseños que sean compatibles con una variedad de dispositivos y
      navegadores.
    </motion.p>
  );
};

export default Cssskill;
