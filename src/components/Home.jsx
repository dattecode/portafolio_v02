import React, { useEffect, useRef, useState } from "react";
import "../styles/homeCss.css";
import programmer from "../gif/programmer.gif";
import {
  IconBrandGithub,
  IconMail,
  IconHome,
  IconNetwork,
  IconAlien,
} from "@tabler/icons-react";
import Proyects from "./homeComponent/Proyects";
import Cssskill from "./skillsComponents/Cssskill";
import JsSkill from "./skillsComponents/JsSkill";
import ReactSkill from "./skillsComponents/ReactSkill";
import { easeIn, easeInOut, easeOut, motion, useAnimation } from "framer-motion";
import circle from "../imgs/circle_num.png";

const Home = () => {
  //useState
  const [skillcontent, setSkillcontent] = useState(ReactSkill);
  const controls = useAnimation();
  // useRef
  const introRef = useRef();
  const projectRef = useRef();
  const skillsRef = useRef();

  //declaracion a scroll
  const scrollToIntro = () => introRef.current.scrollIntoView();
  const scrollToProject = () => projectRef.current.scrollIntoView();
  const scrollSkills = () => skillsRef.current.scrollIntoView();

  //logic
  const pageOnLogic = (pageOnValue) => {
    if (skillcontent == pageOnValue) {
      return "pageOn";
    }
  };

  //animate

  const animateScrollsElement = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const animateBtnSkill = {
    hover: {
      scale: 1.2,
      backgroundColor: "#8d0000",
      color: "#7FFF00",
    },
    tap: {
      scale: 1,
    },
  };

  const text = "front-end";

  const animateText = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.04,
      },
    },
  };

  const animateChar = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  //effect
  useEffect(() => {
    controls.start("visible");
  }, []);

  return (
    <article className="contentTotal">
      <header>
        <motion.section
          className="navbar"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <ul className="selectNav">
            <li onClick={scrollToIntro}>
              <IconHome className="navClick" />
            </li>
            <li onClick={scrollToProject}>
              <IconNetwork className="navClick" />
            </li>
            <li onClick={scrollSkills}>
              <IconAlien className="navClick" />
            </li>
          </ul>
        </motion.section>
      </header>

      <main className="main-container">
        <div className="coverNav"></div>
        <motion.img
          src={circle}
          className="circleNum"
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        <motion.img
          src={circle}
          className="circleNum2"
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        <article className="descripcion" ref={introRef}>
          <motion.div
            className="iconHome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <IconHome />
            <p>Presentacíon</p>
          </motion.div>
          <section className="presentacionContainer">
            <div className="contentImg">
              <motion.img
                src={programmer}
                className="imgDes"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="subImgBar"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.a
                  href="https://github.com/dattecode"
                  target="_blank"
                  className="iconGit"
                  variants={animateBtnSkill}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <IconBrandGithub />
                </motion.a>
                <motion.a
                  className="iconMail"
                  variants={animateBtnSkill}
                  whileHover="hover"
                  whileTap="tap"
                  href="mailto:dattecode@gmail.com"
                >
                  <IconMail/>
                  <p href="mailto:dattecode@gmail.com" className="aCont">
                    contactame
                  </p>
                </motion.a>
              </motion.div>
              <motion.div
                className="barDeco"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.3 }}
              ></motion.div>
            </div>

            <div className="contText">
              <div className="homeCont"></div>
              <motion.h2
                className="titleDes"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                Hola mi nombre es Leonardo Valenzuela, desarrolador
                <motion.div
                  variants={animateText}
                  initial="hidden"
                  animate={controls}
                >
                  {text.split("").map((char, index) => (
                    <motion.span key={index} variants={animateChar}>
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.h2>
              <motion.p
                className="pDes"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                como desarrollador front end tengo la habilidad de tomar los
                datos del backend y hacerlos utiles para los usuarios
                dependiendo de los requisitos que se me solicitan
              </motion.p>
              <motion.p
                className="pDes"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                Tengo experiencia en el uso de JavaScript para crear lógica
                compleja en React, incluyendo el manejo de datos, el
                procesamiento de eventos y la interacción con servicios web. Soy
                capaz de usar JavaScript para crear componentes reutilizables y
                eficientes en React, lo que permite crear aplicaciones más
                escalables y mantenibles.
              </motion.p>
            </div>
          </section>
        </article>

        <article className="proyectsCont" ref={projectRef}>
          <motion.section
            className="iconProyectCont"
            variants={animateScrollsElement}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="barGrayPro"></div>
            <div className="iconProyect">
              <IconNetwork />
              <p>Proyectos</p>
            </div>
            <div className="barGrayPro"></div>
          </motion.section>

          <Proyects animates={animateScrollsElement} />
        </article>

        <motion.article layout className="skills" ref={skillsRef}>
          <motion.section
            className="iconProyectCont"
            variants={animateScrollsElement}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="barGrayPro"></div>
            <div className="iconProyect">
              <IconAlien />
              <p>Habilidades</p>
            </div>
            <div className="barGrayPro"></div>
          </motion.section>

          <motion.section
            className="skillsContent"
            variants={animateScrollsElement}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="contentButtonSkills">
              <motion.button
                onClick={() => setSkillcontent(ReactSkill)}
                variants={animateBtnSkill}
                whileHover="hover"
                whileTap="tap"
                transition={{ ease: easeIn, duration: 0.3 }}
              >
                React
              </motion.button>
              <motion.button
                onClick={() => setSkillcontent(JsSkill)}
                variants={animateBtnSkill}
                whileHover="hover"
                whileTap="tap"
                transition={{ ease: easeIn, duration: 0.3 }}
              >
                JavaScript
              </motion.button>
              <motion.button
                onClick={() => setSkillcontent(Cssskill)}
                variants={animateBtnSkill}
                whileHover="hover"
                whileTap="tap"
                transition={{ ease: easeIn, duration: 0.3 }}
              >
                Css
              </motion.button>
            </div>
            <motion.div layout className="skillsText">
              {skillcontent}
            </motion.div>
          </motion.section>
        </motion.article>
      </main>
    </article>
  );
};

export default Home;
