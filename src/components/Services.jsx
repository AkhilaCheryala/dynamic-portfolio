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
    <div>
      <h1 className='text-center text-[50px] font-bold my-3'>Services</h1>
      {services.map(service => (
        <motion.div
          key={service._id}
          className='card-container flex justify-between  ml-10 '
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div className="card" variants={cardVariants}>
            {service.image && (
              <motion.img
                src={service.image.url}
                alt={service.name}
                className='w-60 h-54 object-contain rounded-xl shadow-slate-900 shadow-xl'
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
              />
            )}
          </motion.div>
          <div key={service._id} className='border flex  justify-between  w-2/3  h-64 p-10 mt-20 items-center rounded-lg shadow-lg bg-gray-800'>
           
             <h2 className='font-extrabold text-3xl w-28' >{service.name}</h2>
           
            <div>
              <p className="w-96 text-lg">{service.desc}</p>
              <p className='border rounded-3xl w-max py-2 px-4 mt-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold'>Charge: {service.charge}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Services;
