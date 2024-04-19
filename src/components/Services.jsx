import { motion } from "framer-motion";
import React from 'react';

function Services({ services }) {
  const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.4
      }
    }
  };

  return (
    <div id='services'>
      <h1 className='text-center text-5xl font-bold mb-16'>Services</h1>
      {services.map(service => (
        <motion.div
          key={service._id}
          className='card-container flex flex-col  lg:flex-row justify-between items-baseline ml-10 mb-10'
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div className="card md:w-1/3" variants={cardVariants}>
            {service.image && (
              <motion.img
                src={service.image.url}
                alt={service.name}
                className='lg:w-62 lg:h-44 w-72 h-44 object-cover lg:object-contain rounded-xl shadow-slate-900 shadow-xl'
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
              />
            )}
          </motion.div>
          <div key={service._id} className='border flex lg:flex-row flex-col lg:gap-6 lg:justify-between justify-end lg:items-center md:w-2/3  lg:h-44 w-full h-[20rem] p-6 md:p-10 mt-4 md:mt-0 rounded-lg shadow-lg bg-gray-800'>
            <h2 className='font-extrabold text-xl md:text-4xl lg:mt-0 mt-20 mb-4 lg:w-28'>{service.name}</h2>
            <div>
              <p className="text-base md:text-lg mb-4 lg:w-96">{service.desc}</p>
              <p className='border  w-max rounded-3xl py-2 px-4 mb-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold'>Charge: {service.charge}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Services;
