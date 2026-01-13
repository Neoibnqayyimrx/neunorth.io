import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  
  useEffect(() => {
    const query = `*[_type == "abouts"]`;
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  
  const problems = abouts.filter(item => item.section === "problem");
  const solutions = abouts.filter(item => item.section === "solution");

  
  const ProfileCard = ({ about }) => (
    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: "tween" }}
      className="app__profile-item"
    >
      <img src={urlFor(about.imgUrl)} alt={about.title} />
      <h2 className="bold-text" style={{ marginTop: 20 }}>
        {about.title}
      </h2>
      <p className="bold-text" style={{ marginTop: 10 }}>
        {about.description}
      </p>
    </motion.div>
  );

  return (
    <>
      <h2 className="head-text">
        What's <span>Slowing</span> you Down ?
      </h2>

      <div className="app__profiles">
        {problems.map((about) => (
          <ProfileCard key={about._id} about={about} />
        ))}
      </div>

      <h2 className="head-text">
        What <span>Changes</span> When You Plug In :
      </h2>

      <div className="app__profiles">
        {solutions.map((about) => (
          <ProfileCard key={about._id} about={about} />
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about', 'app__whitebg');
