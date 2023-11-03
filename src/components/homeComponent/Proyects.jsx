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
      description: "web para ver la descripcion del clima",
      url: "https://graceful-meringue-f189ce.netlify.app",
    },
    {
      name: "Panel De Usuarios",
      image: uspp,
      description:
        "pagina web para hacer una descripcion de un panel de usuario",
      url: "https://lucky-maamoul-58474b.netlify.app",
    },
    {
      name: "Rick And Morty Web",
      image: rymp,
      description:
        "pagina web de rick an morty para ver los residentes de los universo de RyM",
      url: "https://glistening-figolla-8faff5.netlify.app",
    },
    {
      name: "Pokedex",
      image: pkdp,
      description:
        "pagina web para ver la descripcion de tus pokemones favoritos ",
      url: "https://rad-cucurucho-74df0c.netlify.app",
    },
  ];

  return (
    <section className="proyectsSc">
      {proyects.map((proyect, i) => (
        <motion.a
          key={i}
          className="proyectContainer"
          variants={animates}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          target="_blank"
          href={proyect.url}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src={proyect.image} className="imgPro" />
          <div className="proyectDesCont">
            <h2>{proyect.name}</h2>
            <p>{proyect.description}</p>
          </div>
        </motion.a>
      ))}
    </section>
  );
};

export default Proyects;
