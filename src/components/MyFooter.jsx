import React from 'react'
import { Footer } from "flowbite-react";
import logo from '../assets/hasbcode.png'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function MyFooter() {
  return (
    <Footer container>
    <div className="w-full">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className='space-y-4 mb-8'>
        <a href="/" className='text-2xl font-semibold flex items-center space-x-3'>
        <img src={logo} alt="Logo" className='w-24 inline-block items-center' /> {/* Ubah w-10 menjadi w-16 */}
        <span className='text-[#263238]'>HasBcode</span>
      </a>
      <div className='space-y-4'>
          <p className='mb-1'>Copyright © 2024 HasBcode ltd</p>
          <p>All rights reserved</p>
      </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title title="about" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Flowbite</Footer.Link>
              <Footer.Link href="#">Tailwind CSS</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Github</Footer.Link>
              <Footer.Link href="#">Discord</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTwitter} />
          <Footer.Icon href="#" icon={BsGithub} />
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default MyFooter