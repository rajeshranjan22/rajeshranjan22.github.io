import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useEffect } from "react";
import AOS from "aos";
import rajesh_Resume from "../assets/rajesh_Resume.pdf"
import '../index.css'


const NavBar = () => {
  const [nav, setNav] = useState(false);


  const links = [
    {
      id: 1,
      link: "home",
      title: "home"

    },
    {
      id: 2,
      link: "about",
      title: "about"

    },
    {
      id: 4,
      link: "projects",
      title: "projects"

    },
    {
      id: 3,
      link: "Skills",
      title: "skills"

    }, {
      id: 5,
      link: "contact",
      title: "contact"
    },
    {
      id: 6,
      link: "resume",
      title: "resume"

    },

  ];


  return (
    <div

      class="ya"
      className=" opps flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
      <div>

        <h1 className="text-5xl font-signature ml-2"><a className="link-underline link-underline-black text-sky" target="_blank" rel="noreferrer">
          Rajesh Ranjan</a></h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, title }) => (
          id === 6 ? <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-sky-200 font-medium duration-200 link-underline"
          > <a href={rajesh_Resume} target="_blank" download> Resume</a>   </li>
            :
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-sky-200 font-medium duration-200 link-underline"
            >


              <Link offset={-100} to={link} smooth duration={500} >
                {title}
              </Link>

            </li>
        ))}
      </ul >

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, title }) => (
            id === 6 ?    <li
            key={id}
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
          > <a href={rajesh_Resume} target="_blank" download> Resume</a>    </li>
             :
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  offset={-100}
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {title}
                </Link>
              </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
