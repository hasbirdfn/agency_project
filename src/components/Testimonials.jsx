import React from 'react';
import { Rating } from 'flowbite-react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        rating: 4.95,
        image: "/assets/programmer.png" // Replace with actual image paths
    },
    {
        id: 2,
        name: "Jane Smith",
        text: "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper eleifend.",
        rating: 4.85,
        image: "/assets/programmer.png"
    },
    {
        id: 3,
        name: "Robert Brown",
        text: "Curabitur sit amet mauris morbi in dui quis est pulvinar ullamcorper. Sed ac orci quis lorem hendrerit sollicitudin at nec purus.",
        rating: 5.00,
        image: "/assets/programmer.png"
    }
];

const Testimonial = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='testimonial'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Apa Kata Mereka</h2>
                <p className='text-sm text-neutralDGrey mb-8 md:w-3/4 mx-auto'>
                    Testimonial dari pelanggan kami yang puas dengan layanan kami.
                </p>
            </div>

            {/* Testimonial Grid */}
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center'>
                {testimonials.map(testimonial => (
                    <div 
                        key={testimonial.id}
                        className='mx-auto relative mb-12 cursor-pointer' 
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <div className='flex items-center gap-4 mb-4'>
                            <img src={testimonial.image} alt={testimonial.name} className='w-16 h-16 rounded-full object-cover' />
                            <div>
                                <h3 className='text-lg font-semibold text-neutralDGrey'>{testimonial.name}</h3>
                                <Rating>
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <Rating.Star key={i} filled={i < Math.round(testimonial.rating)} />
                                    ))}
                                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{testimonial.rating} out of 5</p>
                                </Rating>
                            </div>
                        </div>
                        <div className='text-neutralGrey'>
                            <p className='flex items-center gap-2'>
                                <FaQuoteLeft /> {testimonial.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
