import React from "react";

const About = () => {
  return (
    <div 
      name="about"
      className="w-full h-screen bg-black-bg-sky-900 text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        An enthusiastic fresher & highly motivated Developer having the ability to write efficient code. <br />
        Eager to learn new technologies and methodologies. <br />
        <br />
 
        I have a clear, logical mind with a practical approach to problem-solving and a drive to see things <br />
        through to completion. I have work experience in multiple projects and clone projects with team collaboration.
         <br />
         <br />
          Seeking a position to utilize my skills and abilities to start up my career that offers <br />
          professional growth while being resourceful, innovative and flexible & by working<br />
           in a challenging position where I will have opportunities to utilize my experience in projects.</p>
        <br />
        <p className="text-xl">
        {/* Proficient in  CODING Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start my career as an entry-level software engineer with a reputed firm driven by technology. */}
        </p>
      </div>
    </div>
  );
};

export default About;
