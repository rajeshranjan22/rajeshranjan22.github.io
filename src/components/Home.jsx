import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import rajesh from "../assets/rajesh.jpeg"

const Home = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  },[])


  return (
    <div
      name="home"
      className="w-full res h-screen  bg-gradient-to-r from-sky-400 to-indigo-900 to-gray-800 hy"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 gap-20">
        <div data-aos="fade-right" className="flex flex-col justify-center">
        <h4 className="text-sm sm:text-6xl font-bold text-white" >Hi, I'm</h4>
          <h2 className="text-6xl sm:text-5xl font-bold text-black mt-3">Rajesh Ranjan</h2>
          <h2 className="text-3xl sm:text-3xl font-bold text-white mt-5">
            Full Stack Web Developer
          </h2>
          <br />
          <br />
          <p className="text-black	 font-bold text-xl  py-4 max-w-md">
          An ambitious and aspiring Full Stack Web Developer 
          who's is looking for a software developer role in an established organisation.
          </p>

          <div
                to="/"
                smooth
                duration={500}
                className="group text-white  w-fit  my-2 flex items-center rounded-md   bg-black cursor-pointer">
            <a href="https://drive.google.com/file/d/1PIfe_XFjBqslArfNUrG9b0YTv5vfv4fX/view?usp=sharing"  className="py-3  px-6 flex" style={{height:"100%",width:"100"}} >
                Resume
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </a>
              </div>
        </div>
        <div data-aos="fade-left" >
          <img
            src={rajesh}
            alt="my profile"
            className="rounded-full mx-auto w-2/4 md:w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
