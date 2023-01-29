import React from "react";
import BlueFly from "../assets/BlueFly.png"
import Expedia from "../assets/Expedia.png"
import JioMart from "../assets/JioMart.png"
import Smatbot from "../assets/Smatbot.png"


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: JioMart,
      title: "JioMart  Clone",
      techStack: "REACT | Redux | CHAKRA UI ",
      desc: "It is a Grocery website where you can buy day to day grocery for your Household. This was a team project where I with my teammates had created and implemented each functionalities.",
      link: "https://wonderful-choux-93af66.netlify.app/",
      repo: "https://github.com/saurav269/unkempt-group-9754",
    },
    {
      id: 2,
      src: BlueFly,
      title: "BlueFly Clone",
      techStack:"HTML | CSS | JavaScript" ,
      desc: "E-commerce website where users can buy products such as clothing, shoes, handbags, watches etc. This was a team project where I with my teammates had created and implemented each functionalities.",
      link: "https://snazzy-blini-1ddf84.netlify.app/",
      repo: "https://github.com/Anwar7411/direful-order-8525",
    },
    {
      id: 3,
      src: Expedia,
      title: "Expedia  Clone",
      techStack: "REACT | CHAKRA UI | CSS",
      desc: "Here you can easily book flights, cars, hotels, cruises. It was an Individual Project where I implemented some functionalities like login & signup user data authentication.",
      link: "https://rajesh-one.netlify.app/",
      repo: "https://github.com/rajeshranjan22/Bitter-level-627",
    },
    
    {
      id: 4,
      src: Smatbot,
      title: "SmatBot  Clone",
      techStack:"HTML | CSS | JavaScript",
      desc: "SmatBot is a conversational platform with a unified experience across Website. It was an Individual Project where I implemented some functionalities like login & signup user data authentication.",
      link: "https://cool-kringle-027f73.netlify.app/",
      repo: "https://github.com/rajeshranjan22/satisfying-bee-4021",
    },
  ];

  return (
    <div
      name="projects"
      className="w-full h-100   bg-gradient-to-r from-sky-400 to-indigo-900 text-white aboutt">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-7">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-12 px-12 sm:px-0">
          {projects.map(({ id, src, link, repo,title,desc,techStack }) => (
            <div key={id} className="shadow-md shadow-gray-600 bg-black rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105 h-60 w-full"
              />
              <div className="text-2xl text-center">{title}</div>
              <div className="mt-2 p-4 text-lg">{desc}</div>
              <p className="text-center pt-4 text-slate-300	font-medium	text-xl	">Tech Stack: {techStack}</p>

                
              <div className="flex items-center justify-center">
                <button
                  className="w-24 px-6 pl-4  py-3 m-4 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                  onClick={() => window.open(link, "_blank")}>
                  Demo
                </button>
                <button
                  className="w-24 px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => window.open(repo, "_blank")}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
