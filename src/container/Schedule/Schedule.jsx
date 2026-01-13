import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClipboard, FiUsers, FiTrendingUp } from 'react-icons/fi';


import { AppWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import './Schedule.scss';

const stepIcons = [
  FiCalendar,
  FiClipboard,
  FiUsers,
  FiTrendingUp,
];


const Schedule = () => {
  const [scheduleData, setScheduleData] = useState(null); // Changed to null instead of empty array

  useEffect(() => {
    const query = `*[_type == "schedule"]`; // Changed to "schedule"
    
    client.fetch(query).then((data) => {
      if (data && data.length > 0) {
        setScheduleData(data[0]); // Get the first document
      }
    });
  }, []);

  if (!scheduleData) {
    return <div>Loading...</div>; // Add loading state
  }

  return (
    <>
      <h2 className="head-text">
        How it <span>Works</span>
      </h2>

      <div className="app__schedule">
        {/* LEFT */}
        <motion.div
          className="app__schedule-content"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          <ul className="app__schedule-steps">
  {scheduleData.steps &&
    scheduleData.steps.map((step, index) => {
      const Icon = stepIcons[index % stepIcons.length];

      return (
        <motion.li
          key={index}
          className="app__schedule-step"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
        >
          <span className="step-icon">
            <Icon />
          </span>
          <span className="step-text">{step}</span>
        </motion.li>
      );
    })}
</ul>


          <button className="app__schedule-btn">
            {scheduleData.ctaText}
          </button>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="app__schedule-media"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={urlFor(scheduleData.image).url()}
            alt="How it works"
          />

        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Schedule, 'schedule', 'app__primarybg');