import React, {useEffect,useState} from 'react'
import { Link } from 'react-scroll'; 

// react icons
import { FaXmark, FaBars } from "react-icons/fa6";
// import logo
import logo from '../assets/hasbcode.png';

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //set toogle menu
    const toogleMenu =  () => {
      setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

       // nav items array
        const navItems = [
            { link: "Beranda", path: "home" },
            { link: "Tentang", path: "about" },
            { link: "Servis", path: "service" },
            { link: "Produk", path: "product" },
            { link: "Testimoni", path: "testimoni" },
            { link: "Blog", path: "blog" },
        ];
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
      <div className='flex justify-between items-center text-base gap-8'>
      <a href="/" className='text-2xl font-semibold flex items-center space-x-3'>
        <img src={logo} alt="Logo" className='w-24 inline-block items-center' /> {/* Ubah w-10 menjadi w-16 */}
        <span className='text-[#263238]'>HasBcode</span>
      </a>


      {/* Nav items for desktop */}
      <ul className='md:flex space-x-12 hidden'>
        {navItems.map(({ link, path }) => (
          <Link
            to={path}
            spy={true}
            smooth={true}
            offset={-100}
            key={path}
            className='block cursor-pointer text-base text-gray-900 hover:text-brandPrimary first:font-medium'
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Login & Sign Up */}
      <div className='space-x-12 hidden lg:flex items-center'>
        <a href="/" className='hidden lg:flex items-center text-brandPrimary hover:text-gray-900'>Login</a>
        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign Up</button>
      </div>

      {/* Menu button for mobile devices */}
      <div className='md:hidden'>
        <button onClick={toogleMenu} className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
          {isMenuOpen ? <FaXmark className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
        </button>
      </div> 
        </div>

         {/* Nav item mobile */}
    <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ?  "block fixed top-0 right-0 left-0" : "hidden"}`}> 
            {navItems.map(({ link, path }) => (
                  <Link
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    key={path}
                    className='block text-base text-white hover:text-brandPrimary first:font-medium'>
            {link}
          </Link>
        ))}
    </div>
          </nav>
    </header>
  )
}

export default Navbar