import { Carousel } from "flowbite-react";
import React, { useEffect } from "react";
import banner1 from "../assets/banner2.png";
import banner2 from "../assets/about.png";
import banner3 from "../assets/programmer.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
// icons
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: 'ease-in-out', // Jenis easing animasi
      once: true, // Animasi hanya berjalan sekali
    });
  }, []);

  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div data-aos="fade-left"> {/* Gambar muncul dari kanan ke kiri */}
              <img src={banner1} alt="Banner" />
            </div>
            {/* Hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Website Andal, <span className="text-brandPrimary leading-snug">Bisnis UMKM Melaju</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">Solusi digital terbaik untuk meningkatkan visibilitas dan pertumbuhan UMKM Anda.</p>
              <div className="flex space-x-4">
              <a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 px-4 py-2 text-sm md:text-base"
              >
                <FaWhatsapp /> Hubungi Kami
              </a>
                <button className="btn-primary">Register</button>
              </div>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div data-aos="fade-left"> {/* Gambar muncul dari kanan ke kiri */}
              <img src={banner2} alt="Banner" />
            </div>
            {/* Hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Inovasi Digital, <span className="text-brandPrimary leading-snug">Percepatan Bisnis Anda</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">Solusi terbaik memajukan Bisnis Anda berbagai bidang.</p>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/6285795501902?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Anda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <FaWhatsapp /> Hubungi Kami
                </a>
                <button className="btn-primary">Register</button>
              </div>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div data-aos="fade-left"> {/* Gambar muncul dari kanan ke kiri */}
              <img src={banner3} alt="Banner" />
            </div>
            {/* Hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Bersama UMKM, <span className="text-brandPrimary leading-snug">Menuju Era Digital</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">UMKM bisa bersaing memanfaatkan Teknologi.</p>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Anda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <FaWhatsapp /> Hubungi Kami
                </a>
                <button className="btn-primary">Register</button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
