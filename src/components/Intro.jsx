import React from "react";
import "../styles/introCss.css";
import { Link } from "react-router-dom";
import circle from "../imgs/circle_num.png";
import { AnimatePresence, motion } from "framer-motion";

const Intro = () => {
  return (
    <article className="containerIntro">
      <motion.img
        src={circle}
        className="circleS"
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />
      <AnimatePresence >
        <motion.div className="containerText">
          <motion.h2
            className="introTitle"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            exit={{ opacity: 0, scale: [1.1, 0.3], duration: 0.8 }}
          >
            ¡ Bienvenido a mi Portafolio !
          </motion.h2>
          <section className="presentacion">
            <motion.p
              className="par"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Soy un programador apasionado por la tecnología y la programación.
              Mi objetivo es crear soluciones innovadoras y resolver problemas a
              través del código.
            </motion.p>
            <motion.p
              className="par"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              En este portafolio, encontrarás una muestra de mis proyectos y
              habilidades. Estoy emocionado de compartir mi trabajo contigo.
            </motion.p>
          </section>
          <Link to={"/home"} className="homeBtn">
            {" "}
            Portafolio{" "}
          </Link>
        </motion.div>
      </AnimatePresence>
    </article>
  );
};

export default Intro;
