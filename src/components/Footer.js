import React from 'react';
import {FaGithub, FaTwitter, FaBehance} from 'react-icons/fa';

const Footer = () => {
  return (
  <footer  className = 'py-8 lg:mt-[10rem]'>
    <div class="mb-20 border-t border-white/20 lg:pb-[5rem]">
        <div class="flex px-6 items-center justify-between xl:hidden"> 
            <div class="flex gap-2 items-center">
            <p class="text-accent text-xl">My Profile</p>
            </div>
            {/* <span class="text-white text-[18px] font-light flex gap-6 flex-row">
                          <a href="">
                            <FaTwitter />                   
                          </a>

                          <a href="">
                            <FaGithub />                   
                          </a>

                          <a href="">
                            <FaBehance />                   
                          </a>
            </span> */}
        </div>

        <div class="flex flex-col xl:flex-row mt-6 xl:w-[80%] mx-auto xl:gap-10">
            <div class="hidden xl:flex flex-col basis-2/5 justify-between">
                <div class="flex gap-2">
                    <p class="text-accent text-xl">My Profile</p>
                </div>
                <div>
                    <span class="text-white text-[18px] font-light flex gap-6 opacity-75">
                          <a href="">
                            <FaTwitter />                   
                          </a>

                          <a href="">
                            <FaGithub />                   
                          </a>

                          <a href="">
                            <FaBehance />                   
                          </a>
                    </span>
                </div>
            </div>
            <div class="flex w-full xl:basis-1/5 xl:gap-10">
                <div class="basis-2/4 px-6">
                    <h2 class="text-white text-lg pb-4">Experience</h2>
                    <span class="flex flex-col gap-y-2">
                    <p class="text-[#b4bcd0] text-base">Developer</p>
                    <p class="text-[#b4bcd0] text-base">Graphics</p>
                    <p class="text-[#b4bcd0] text-base">YouTuber</p>
                    </span>
                </div>
                <div class="basis-2/4">
                    <h2 class="text-white text-lg pb-4" >Company</h2>
                    <span class="flex flex-col gap-y-2">
                    <p class="text-[#b4bcd0] text-base">About us</p>
                    <p class="text-[#b4bcd0] text-base">Blog</p>
                    <p class="text-[#b4bcd0] text-base">Careers</p>
                    </span>
                </div>
            </div>
            <div class="flex w-full mt-6 xl:basis-1/5 xl:mt-0 xl:gap-10">
                <div class="basis-2/4 px-6">
                    <h2 class="text-white text-lg pb-4" >Resources</h2>  
                    <span class="flex flex-col gap-y-2">
                        <p class="text-[#b4bcd0] text-base">Community</p>
                        <p class="text-[#b4bcd0] text-base">Contact</p>
                        <p class="text-[#b4bcd0] text-base">DPA</p>
                    </span>   
                </div>

                <div class="basis-2/4">
                    <h2 class="text-white text-lg pb-4" >Socials</h2>  
                    <span class="flex flex-col gap-y-2">
                        <p class="text-[#b4bcd0] text-base">Twitter</p>
                        <p class="text-[#b4bcd0] text-base">GitHub</p>
                        <p class="text-[#b4bcd0] text-base">Behance</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
  </footer>
  );
};

export default Footer;







