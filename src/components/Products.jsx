import React, { useEffect } from 'react'
import Product from '../assets/product1.png'
import Programmer from '../assets/programmer.png'
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

function Products() {

  // Inisialisasi AOS
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div>
      {/* About Text */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
        <div className='mt-20 md:w-1/2 mx-auto text-center'>
          <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Pelayanan Product</h2>
          <p className='text-brandPrimary'>Kami memberikan pelayanan product berbagai bisnis UMKM dengan solusi website yang handal dan efisien.</p>
        </div>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row-reverse justify-between items-center gap-12'>
          <div data-aos="fade-left"> {/* Animasi fade dari kiri */}
            <img src={Product} alt="" />
          </div>
          <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Implementation Software System</h2>
            <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>HasBcode membantu anda dalam proses Implementasi software yang sesuai kebutuhan perusahaan Anda.</p>
          </div>
        </div>
      </div>

      {/* About Text */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div data-aos="fade-right"> {/* Animasi fade dari kanan */}
            <img src={Product} alt="" />
          </div>
          <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Development IT System</h2>
            <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>HasBcode juga menyediakan jasa development seperti pembuatan Sistem & Aplikasi serta integrasi.</p>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id='testimonial'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='md:w-1/3' data-aos="fade-up"> {/* Animasi fade dari bawah */}
            <img src={Programmer} alt="" />
          </div>

          {/* stats */}
          <div className='md:w-2/3'>
            <div>
              <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h5 className='text-brandPrimary text-xl font-semibold mb-2'>TIM Developer</h5>
              <p className='text-base text-neutralGrey mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div>
                <div className='flex items-center gap-8 flex-wrap'>
                  <img src="/src/assets/icons/javascript.png" alt="" className='cursor-pointer' />
                  <img src="/src/assets/icons/react.png" alt="" className='cursor-pointer' />
                  <img src="/src/assets/icons/typescript.png" alt="" className='cursor-pointer' />
                  <img src="/src/assets/icons/nodejs.png" alt="" className='cursor-pointer' />
                  <img src="/src/assets/icons/laravel.png" alt="" className='cursor-pointer' />
                  <img src="/src/assets/icons/mongodb.png" alt="" className='cursor-pointer' />
                  <img src="/src/assets/icons/postgre.png" alt="" className='cursor-pointer' />
                  <div>
                    <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Bahasa Teknologi</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;
