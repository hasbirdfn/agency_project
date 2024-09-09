import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
function Newsletter() {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
    
      <div className='text-center'>
        <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>
          Saatnya UMKM Berperan Dunia Digitalisasi
        </h2>
        <div className='flex items-center justify-center gap-8'>
        <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Anda"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-2"><FaWhatsapp /> Hubungi Kami</a>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
