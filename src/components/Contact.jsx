import React,{useEffect} from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact({ user, filteredSocialHandles }) {

  const [formRef, formInView] = useInView({ threshold: 0.8 });
  const [addressRef, addressInView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (formInView) {
     
    }
    if (addressInView) {
 
    }
  }, [formInView, addressInView]);

  return (
    <div id='contact'>
      <h2 className="text-4xl text-center font-bold mb-4 mt-8">Reach Out to Me</h2>

      <div className="mt-24 flex  lg:flex-row flex-col gap-10 justify-center items-start">

        
        <motion.div
          className="w-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-4 contact-form"
          ref={formRef}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: formInView ? 1 : 0, x: formInView ? 0 : -100}}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <label className="text-xl text-transparent bg-gradient-to-r from-violet-400 to-pink-600  font-mono bg-clip-text font-bold mb-2" htmlFor="name">Name</label>
            <input
              className="appearance-none  bg-gray-800 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter"
            />
          </div>
          <div className="mb-4">
            <label className="text-xl text-transparent bg-gradient-to-r from-violet-300 to-pink-700 font-mono bg-clip-text font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="appearance-none bg-gray-800 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter"
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="text-xl text-transparent bg-gradient-to-r from-violet-300 to-pink-700 font-mono bg-clip-text font-bold mb-2" htmlFor="phoneNumber">Phone Number</label>
            <input
              className="appearance-none bg-gray-800 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="text"
              placeholder="Enter"
              disabled
            />
          </div>
          <div className="mb-6">
            <label className="text-xl text-transparent bg-gradient-to-r from-violet-300 to-pink-700 font-mono bg-clip-text font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              className="appearance-none bg-gray-800 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-gradient-to-r from-violet-400 to-pink-600 hover:from-pink-500 hover:to-violet-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </motion.div>

       
        <motion.div
          className='text-2xl contact-address leading-10 text-gray-300 m-10 pt-10 border-t-8 border-fuchsia-200'
          ref={addressRef}
          initial={{ opacity: 0, x: 100}}
          animate={{ opacity: addressInView ? 1 : 0, x: addressInView ? 0 : 100}}
          transition={{ duration: 0.5 }}
        >
          <p>SAY HI: {user?.email}</p>
          <p>CALL ME: {user?.about?.phoneNumber}</p>
          <p>{user?.about?.address}</p>

          <ul className='flex gap-4 '>
            {user.social_handles.map((handle, index) => (
              <li key={index}>
                <a href={handle.url} className="text-lg text-fuchsia-400" target="_blank" rel="noopener noreferrer">
                  {handle.platform}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>

    </div>
  );
}

export default Contact;