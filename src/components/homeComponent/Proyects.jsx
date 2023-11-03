import React from "react";
import "./style/proyectsCss.css";
import cmp from "./imgsPro/cmp.png";
import uspp from "./imgsPro/uspp.png";
import rymp from "./imgsPro/rymp.png";
import pkdp from "./imgsPro/pkdp.png";
import { motion } from "framer-motion";

const Proyects = ({ animates }) => {
  const proyects = [
    {
      name: "Web Del Clima",
      image: cmp,
      git: "https://github.com/dattecode/weather_v02",
      url: "https://graceful-meringue-f189ce.netlify.app",
    },
    {
      name: "Panel De Usuarios",
      image: uspp,
      git: "https://github.com/dattecode/userPanelV02",
      url: "https://lucky-maamoul-58474b.netlify.app",
    },
    {
      name: "Rick And Morty Web",
      image: rymp,
      git: "https://github.com/dattecode/RYM_V02",
      url: "https://glistening-figolla-8faff5.netlify.app",
    },
    {
      name: "Pokedex",
      image: pkdp,
      git: "https://github.com/dattecode/pokedex_v02",
      url: "https://rad-cucurucho-74df0c.netlify.app",
    },
  ];

  return (
    <section className="proyectsSc">
      {proyects.map((proyect, i) => (
        <motion.div
          key={i}
          className="proyectContainer"
          variants={animates}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src={proyect.image} className="imgPro" />
          <div className="proyectDesCont">
            <h2 className="tPro">{proyect.name}</h2>
            <div className="targetProy">
              <a href={proyect.url} target="_blank">
                Ir a Web
              </a>
              <a href={proyect.git} target="_blank">
                Ir a Git
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Proyects;
