import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">

      {/* BACKGROUND CIRCLE */}
      <motion.img
        whileInView={{ scale: [0.9, 1], opacity: [0, 0.35] }}
        transition={{ duration: 1 }}
        src={images.circle}
        alt="background circle"
        className="app__header-bg-circle"
      />

      {/* UPPER / LEFT TEXT */}
      <motion.div
        whileInView={{ x: [-60, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
        className="app__header-info left"
      >
        <div className="badge-cmp">
          <span>🧮</span>
          <p className="p-text">Neunorth</p>
        </div>
      </motion.div>

      {/* CENTER HERO */}
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.96, 1] }}
        transition={{ duration: 0.6 }}
        className="app__header-center"
      >
        <h1 className="head-text">
          Build momentum.<br />
          <span>Not bottlenecks.</span>
        </h1>

        <button className="cta-primary">Start a conversation</button>
      </motion.div>

      {/* LOWER / RIGHT TEXT */}
      <motion.div
        whileInView={{ x: [60, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
        className="app__header-info right"
      >
        <div className="tag-cmp">
          <p className="p-text">
            Plug in a ready-made remote team — <span> Project Manager, Software Developer,
            Data Analyst </span> and start delivering faster today.
          </p>
        </div>
      </motion.div>

      {/* TECH STACK */}
      <motion.div
        variants={scaleVariants}
        whileInView="whileInView"
        className="app__header-circles"
      >
        {[images.data, images.bulb, images.software].map((icon, index) => (
          <div className="circle-cmp app__flex" key={index}>
            <img src={icon} alt="tech" />
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default AppWrap(Header, 'home');
