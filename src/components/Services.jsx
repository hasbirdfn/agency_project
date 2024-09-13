import React from 'react';

function Services() {
    const options = [
        {id:1, title:"FIT & GAP", description: "Proses analisa bisnis guna mendapatkan formula implementasi system yang efektif dan efisien", image: "/src/assets/icons/membership.png"},
        {id:2, title:"HARGA TERJANGKAU", description: "Memberikan pelayanan terbaik, dengan kantong yang pas untuk Anda", image: "/src/assets/icons/asosiasi.png"},
        {id:3, title:"MAINTENANCE", description: "Membantu pemeliharaan atas penggunaan system yang sesuai pengembangan & analisa bisnis Anda", image: "/src/assets/icons/umkm.png"},
    ];

    const services =  [
        {id:1, title:"MEMBER ORGANISASI", description: "Perangkat lunak manajemen keanggotaan kami menyediakan animasi penuh untuk perpanjangan keanggotaan dan pembayaran", image: "/src/assets/icons/membership.png"},
        {id:2, title:"ASOSIASI NASIONAL", description: "Perangkat lunak manajemen keanggotaan kami menyediakan animasi penuh untuk perpanjangan keanggotaan dan pembayaran", image: "/src/assets/icons/asosiasi.png"},
        {id:3, title:"UMKM", description: "Perangkat lunak manajemen keanggotaan kami menyediakan animasi penuh untuk perpanjangan keanggotaan dan pembayaran", image: "/src/assets/icons/umkm.png"},
    ];

    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
            {/* Options Card */}
            <div className='mt-20 md:w-1/2 mx-auto text-center'>
               <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Mengapa Memilih Kami?</h2>
                <p className='text-brandPrimary'>Kami telah membantu berbagai bisnis UMKM tumbuh dengan solusi website yang handal dan efisien.</p>
            </div>
 
            {/* Option cards */}
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid md:w-11/12 mx-auto gap-12'>
                {
                    options.map(option => (
                        <div key={option.id} className='group px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer transition-all duration-300 flex items-center justify-center h-full bg-white hover:bg-[#4CAF4F]'>
                            <div>
                                <div className='bg-[#E8FSE9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl flex items-center justify-center'>
                                    <img src={option.image} alt={option.title} className="-ml-5 w-32 h-auto md:w-24" />
                                </div>
                                <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2 group-hover:text-white'>{option.title}</h4>
                                <p className='text-sm text-neutralGrey group-hover:text-white'>{option.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Klien Kami</h2>
                <p className='text-neutralGrey'>Kami telah membantu berbagai bisnis UMKM tumbuh dengan solusi website yang handal dan efisien.</p>

                {/* company logo */}
                <div className='my-12 flex flex-wrap justify-center items-center gap-4 md:gap-8'>
                    <img src="/src/assets/icons/tokopedia.png" alt="tokopedia" className="h-12 md:h-16" />
                    <img src="/src/assets/icons/shopee.png" alt="shopee" className="h-12 md:h-16" />
                    <img src="/src/assets/icons/lazada.png" alt="lazada" className="h-12 md:h-16" />
                    <img src="/src/assets/icons/tiktok.png" alt="tiktok" className="h-12 md:h-16" />
                    <img src="/src/assets/icons/instagram.png" alt="instagram" className="h-12 md:h-16" />
                    <img src="/src/assets/icons/facebook.png" alt="facebook" className="h-12 md:h-16" />
                </div>
            </div>


            {/* services cards */}
            <div className='mt-20 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Komunitas</h2>
                <p className='text-neutralGrey'>Kami telah membantu berbagai bisnis UMKM tumbuh dengan solusi website yang handal dan efisien.</p>
            </div>

            {/* services cards */}
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid md:w-11/12 mx-auto gap-12'>
                {
                    services.map(service => (
                        <div key={service.id} className='group px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer transition-all duration-300 flex items-center justify-center h-full bg-white hover:bg-[#4CAF4F]'>
                            <div>
                                <div className='bg-[#E8FSE9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl flex items-center justify-center'>
                                    <img src={service.image} alt={service.title} className="w-32 h-auto md:w-24" />
                                </div>
                                <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2 group-hover:text-white'>{service.title}</h4>
                                <p className='text-sm text-neutralGrey group-hover:text-white'>{service.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Services;
