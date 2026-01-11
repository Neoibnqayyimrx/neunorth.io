import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import './Capability.scss';

const Capability = () => {
  const [capabilityData, setCapabilityData] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const query = `*[_type == "capability"]`;
    client.fetch(query).then((data) => {
      if (data?.length) setCapabilityData(data[0]);
    });
  }, []);

  if (!capabilityData) return null;

  const { ctaText, image, statement } = capabilityData;

  return (
    <>
      <h2 className="head-text">
        Our <span>Capability</span> Statement
      </h2>

      <div className="app__capability">
        {/* LEFT – CTA/BUTTON */}
        <motion.div
          className="app__capability-content"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          <button
            className="app__capability-btn"
            onClick={() => setOpen(true)}
          >
            {ctaText}
          </button>
        </motion.div>

        {/* RIGHT – IMAGE */}
        <motion.div
          className="app__capability-media"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={urlFor(image).url()} alt="Capability" />
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="app__capability-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="modal__content"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <p>{statement}</p>

              <button
                className="modal__close"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppWrap(Capability, 'capability');