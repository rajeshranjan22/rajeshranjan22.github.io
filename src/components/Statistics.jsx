import React from "react";
import GitHubCalendar from "react-github-calendar";

const Statistics = () => {

  return (
    <div
      style={{ height: "auto" }}
      name="statistics"
      className="py-10  w-full h-screen bg-gradient-to-r from-sky-400 to-indigo-900">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p style={{textShadow: "0 0 5px #040404, 0 0 15px #4a53cf, 0 0 20px #040404, 0 0 40px #040404, 0 0 60px #3bb6c4, 0 0 10px #4a53cf, 0 0 98px #040404"}}
            className="text-5xl font-bold border-b-4 border-gray-500 p-2 inline">
            Statistics
          </p>
          <p className="py-8">
            These are some of statistics graphs to determine my contribution and
            knowledge in this digital world.
          </p>
        </div>

        <div className="flex gap-9  justify-center mt-14">
      <p>
        
        <img align="center" width="400" height="auto"   alt="rajesh's github stats" 
         src="https://github-readme-stats.vercel.app/api?username=rajeshranjan22&show_icons=true&theme=algolia&count_private=true" />
      </p>
      <p> <img align="center"  src="https://github-readme-streak-stats.herokuapp.com/?user=rajeshranjan22&hide=smalltalk&theme=algolia&layout=compact" alt="Rajesh" />
      </p>
      </div>
      

  {/* <div style={{padding: "20px 20px", background:"white", color: "black"}}>
  <img src="https://ghchart.rshah.org/rajeshranjan22"
 alt="" />
 
  </div> */}

        <div data-aos="fade-up" className='w-11/12 m-auto pt-10 pb-10 flex justify-center'>
             <GitHubCalendar username="rajeshranjan22" />
        </div>
      </div>
      
      </div>
   
  );
};
export default Statistics;
