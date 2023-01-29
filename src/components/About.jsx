import React from "react";

const About = () => {
  return (
    <div 
      name="about"
      className="w-full h-screen bg-black-bg-sky-900 text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-7xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <h1 className="text-2xl mt-5"> 
        Passionate Software Developer with web development technologies. Skilled, collaborative and attentive developer with a drive to develop the most relevant products. 
        Always looking forward to learning something new to strengthen skills learned.<br />
        <br />
 
        I have a clear & logical mind with a practical approach to problem-solving and a drive to see things
        through to completion. I have work experience in multiple projects and clone projects with team collaboration.
         <br />
         <br />
          Seeking a position to utilize my skills and abilities to start up my career that offers 
          professional growth while being resourceful, innovative and flexible & by working
           in a challenging position  
           where I will have opportunities to utilize my experience in projects.</h1>
           
        <br />
        
      </div>
    </div>
  );
};

export default About;
