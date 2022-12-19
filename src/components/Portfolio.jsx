import React from "react";
import ketto from "../assets/portfolio/ketto.png"
import indeed from "../assets/portfolio/indeed.png"
import engagebey from "../assets/portfolio/engagebey.png"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: indeed,
      title: "Expedia  Clone",
      techStack: "REACT |CHAKRA UI | CSS",
      desc: "Here you can easily book flights, cars, hotels, cruises. Booking with Expedia is easy.",
      link: "https://rajesh-one.netlify.app/",
      repo: "https://github.com/rajeshranjan22/Bitter-level-627",
    },
    {
      id: 2,
      src: ketto,
      title: "Bluefy Clone",
      techStack:"HTML | CSS | JS" ,
      desc: "E-commerce website where users can buy products such as clothing, shoes, handbags, watches etc.",
      link: "https://snazzy-blini-1ddf84.netlify.app/",
      repo: "https://github.com/Anwar7411/direful-order-8525",
    },
    {
      id: 3,
      src: engagebey,
      title: "Smatbot  clone",
      techStack:"HTML | CSS | JS",
      desc: "SmatBot is a conversational platform with a unified experience across Website, Whatsapp, Blog, Facebook Messenger And Mobile Applications",
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
