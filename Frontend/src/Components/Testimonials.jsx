import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Mahesh Kumar',
    review: 'Great products and fast delivery! Highly recommended.',
    image: 'https://imgs.search.brave.com/93yp3ScNo0IsegobcX4bb_pK5h59JNiYMml3B_Eaygk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/NzQ5NDY5Ni9waG90/by9pbmRpYW4tbWFu/LXN0dWRpby1wb3J0/cmFpdC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NTFWdDda/UTd0NG5iQUR0d1Z6/UmRGZnAzRDB3clFt/d2RnZEt6aU1HMXQw/ND0',
  },
  {
    id: 2,
    name: 'Suresh Singh',
    review: 'Amazing customer service and high-quality electronics.',
    image: 'https://imgs.search.brave.com/LmabhkOwPY-LXB3OOOwY2QLILQQ2iyTQCJwA04nkBIs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzY4LzE5Lzk3/LzM2MF9GXzM2ODE5/OTcxMF9QTG5GaXhh/QnBoOUxWWWxpREl3/QUlCNWFXeEd6QW9D/UC5qcGc',
  },
  {
    id: 3,
    name: 'Ratan Lal',
    review: 'Fantastic quality and reliable service. Will buy again!',
    image: 'https://imgs.search.brave.com/ZwaaoEqTuikuekr7KJS8-VQdgt2DpEDk3ZdNf1L0AxI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTU4/MDY0MjI4L3Bob3Rv/L3BvcnRyYWl0LW9m/LWhhcHB5LXlvdW5n/LW1hbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9bFpveEFH/d1FkX0lMMXA1MFI2/RkNYd2JLdG9mb1N1/a25tQUtKb2Q2T2t6/UT0',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 text-base">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
