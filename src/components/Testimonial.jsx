import React from 'react';

function Testimonial({ testimonials }) {
  const duplicatedTestimonials = testimonials.concat(testimonials);

  return (
    <div className="bg-gray-900 text-white py-20 overflow-hidden">
      <h2 className="text-3xl font-bold mb-20 text-center">Testimonials</h2>
      <div className="container  mx-auto px-4 overflow-hidden">
        <div className="testimonial-container flex gap-4 animation "  style={{ animationDuration: '5s' }}>
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className='w-96'>
                <img
                  src={testimonial.image.url}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl text-transparent bg-gradient-to-r from-violet-300 to-pink-700 font-mono bg-clip-text font-bold mb-2">{testimonial.name}</h3>
                <p className="text-gray-300 mb-4">{testimonial.review}</p>
                <p className="text-purple-500">{testimonial.position}</p>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
