import React from 'react'
import aboutImg from '../assets/about.png'
function About() {
  return (
    <div>
        {/* About Text */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div data-aos="fade-right"> {/* Animasi fade dari kanan */}
            <img src={aboutImg} alt="" />
          </div>
          <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>10 Tahun berpengalaman dalam dunia Digital</h2>
            <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>HasBcode Merupakan Software house yang memberikan pelayanan terbaik berdasarkan requirement permintaan client, dan memberikan harga yang cukup dikantong.</p>
          </div>
        </div>
      </div>
     
        {/* UMKM stats */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'> 
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Membantu UMKM <br></br>
                    <span className='text-brandPrimary'>Skala besar maupun kecil</span></h2>
                    <p>HasBcode berkomitmen pelayanan yang merata terhadap Skala UMKM</p>
                </div>

        {/* stats */}
                <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <img src="/src/assets/icons/client.png" alt="" />
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>+100</h4>
                                <p>Klien</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src="/src/assets/icons/product.png" alt="" />
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>+100</h4>
                                <p>Product</p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <img src="/src/assets/icons/member.png" alt="" />
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>+100</h4>
                                <p>Komunitas</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src="/src/assets/icons/developer.png" alt="" />
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>+100</h4>
                                <p>Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About