import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import resume from "../assets/rajesh_Resume.pdf"
import rajesh from "../assets/rajesh.jpeg"
 
const Home = () => {
  return (
    <div  
      name="home"
      className="h-screen w-full bg-gradient-to-r from-sky-400 to-indigo-900"
    >
      <div style={{height:"100"}} className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden mt-10  mx-10">
          <img
            src={rajesh}
            alt="profile"
            className="rounded-full mx-auto  md:w-full filter: brightness(300);"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-xl sm:text-6xl font-bold text-white">
            Hi,    <span className="text-black" >  I'm <br /> Rajesh Ranjan</span> 
            
            <p className=""> Full Stack Web Developer</p>
          </h2>
          <br />
          <p className="text-black	 font-bold text-xl  py-4 max-w-md">
            I love to build websites and desgining software.
            I love to work on web application using MERN stack
          </p>
          
            <div className="portfolio-btn"  >
              <div
                to="/"
                smooth
                duration={500}
                className="group text-white  w-fit  my-2 flex items-center rounded-md   bg-black cursor-pointer">
            <a href={resume} download className="py-3  px-6 flex" style={{height:"100%",width:"100"}} >
                Resume
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </a>
              </div>
            </div>
          
        </div>
        
        <div className="big-screen">
          <img 
            src={rajesh}
            alt="profile"
            className="p-10 w-100 h-90 rounded-full"
          />
        </div>
        
      </div>
    </div>
  );
};


// import React, { useEffect } from "react";
// import { HiArrowNarrowRight } from "react-icons/hi";
// import { Link } from "react-scroll";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Home = () => {

//   useEffect(()=>{
//     AOS.init({
//       duration: 1000,
//       offset: 100,
//     });
//   },[])


//   return (
//     <div
//       name="home"
//       className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
//     >
//       <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 gap-20">
//         <div data-aos="fade-right" className="flex flex-col justify-center">
//           <h4 className="text-sm sm:text-3xl font-bold text-white" >Hello, my name is</h4>
//           <h2 className="text-4xl sm:text-7xl font-bold text-white mt-3">Rajesh Ranjan</h2>
//           <h2 className="text-3xl sm:text-3xl font-bold text-white mt-5">
//             I'm a Full Stack Developer
//           </h2>

//           <div>
//             <div
//               to="/"
//               smooth
//               duration={500}
//               className="group text-white w-fit px-6 mt-10 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//             >
//                <a href={resume} download className="py-3  px-6 flex"  > resume</a>
//               <span className="group-hover:rotate-90 duration-300">
//                 <HiArrowNarrowRight className="ml-1" />
//               </span>
//             </div>
//           </div>
//         </div>
//         <div data-aos="fade-left" >
//           <img
//             src={rajesh}
//             alt="my profile"
//             className="rounded-full mx-auto w-2/4 md:w-3/4"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Home;
