import React, { useEffect } from 'react';
import { FaAnglesRight } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
    
    const blogs = [
        {id: 1, title: "Bagaimana respon UMKM terhadap pelayanan DINOV?", image:"/assets/programmer.png"},
        {id: 2, title: "Respon Positif dari Membership yang sudah tergabung", image:"/assets/programmer.png"},
        {id: 3, title: "Pentingnya UMKM melakukan transformasi digital", image:"/assets/programmer.png"},
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi dalam milidetik
            easing: 'ease-in-out', // Jenis easing animasi
            once: true, // Animasi hanya terjadi sekali saat scroll
        });
    }, []);

    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Blog Terkini</h2>
                <p className='text-sm text-neutralDGrey mb-8 md:w-3/4 mx-auto'>
                    Blog ini membahas mengenai komunitas UMKM yang tergabung, menjadi sebuah komunitas yang besar
                </p>
            </div>
 
            {/* all blogs */}
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => (
                        <div 
                            key={blog.id} 
                            className='mx-auto relative mb-12 cursor-pointer' 
                            data-aos="zoom-in"
                        >
                            <img src={blog.image} alt={blog.title} className='hover:scale-95 transition-all duration-300'/>
                            <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                                <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                                <div>
                                    <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700 flex items-center justify-center gap-2'>
                                        Selengkapnya <FaAnglesRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blog;
