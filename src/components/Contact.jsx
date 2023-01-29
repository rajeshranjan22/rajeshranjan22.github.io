import  {useEffect} from "react";
import contactus from "../assets/contact-us.jpg";
import {FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      offset: 100,
      delay: 0,
    });
  },[])

  return (
    <div
      name="contact"
      className="w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
      <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div data-aos="fade-up" className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 mt-4">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4 mt-12">
            <img
              src={contactus}
              alt="picture"
              className="rounded-xl"
            />
            <p className="pt-2 pb-8">
              I am open to talk. Fell free to contact me using your preferred medium.
            </p>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 mx-auto w-4/5 gap-10">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <a href="https://www.linkedin.com/in/rajesh-ranjan-sharma-17aa82236/" rel="noreferrer" target="_blank">
                  {<FaLinkedin size={25}/>}
                </a>
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
              <a href="https://github.com/rajeshranjan22" rel="noreferrer" target="_blank">
                {<FaGithub size={25} />}
                </a>
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
              <a href="mailto:Sharmarajeshranjan2000@gmail.com" rel="noreferrer" target="_blank">
                {<SiGmail size={25} />}
                </a>
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <p>+91 9060179361</p>
              </div>
            </div>
          </div>

         
          <div className="w-full md:w-1/2 h-full rounded-xl p-4  ">
            <div className="p-4 text-left">
              <form
                action="https://getform.io/f/67656beb-e66c-4fbd-9518-0a621ef81b98"
                method="POST"
              >
                <div className="flex-col gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-white font-light">
                      name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-white font-light">
                      phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-white font-light">
                      email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-white font-light">
                      message
                    </label>
                    <textarea
                      name="message"
                      rows="10"
                      className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-12 text-center">@2022 Copyright ~ Rajesh Ranjan</h1>
    </div>
  );
};

export default Contact;