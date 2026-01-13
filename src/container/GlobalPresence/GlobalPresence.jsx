import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { AppWrap } from "../../wrapper";
import { client, urlFor } from "../../client";

 
import "./GlobalPresence.scss";

const GlobalPresence = () => {
  const [presence, setPresence] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const query = `*[_type == "globalPresence"] | order(_createdAt asc)`;
    client.fetch(query).then(setPresence);
  }, []);

  return (
    <>
      <h2 className="head-text">
        Our Global <span>Presence</span>
      </h2>

      <motion.div
        className="app__global"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={20}
          loop
          speed={800}
          watchOverflow
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {presence.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="app__global-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="app__global-image">
                  <img
                    src={urlFor(item.imageurl).url()}
                    alt={item.name}
                  />
                </div>

                <div className="app__global-content">
                  <h4>{item.name}</h4>

                  {item.logourl && (
                    <img
                      className="app__global-logo"
                      src={urlFor(item.logourl).url()}
                      alt={item.company}
                    />
                  )}

                  <p>{item.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
};

export default AppWrap(GlobalPresence, "global", 'app__whitebg');
