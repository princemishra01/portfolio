
// Header , Intro , Project , Contact, Footer 

// Header

import { Link } from "react-router-dom";
import logo from "./assets/pmlogo.svg";
import logowhite from "./assets/pmlogowhite.svg";
import DeviceImage from "./assets/hero-devices.svg";
import AvatarImage from "./assets/mf-avatar.svg";
import SecretChatImage from "./assets/secret-chat.png";
import SwiftCallImage from "./assets/swift-call.png";

const Nav = () => {
  return (
    <nav className="flex justify-between px-4 md:px-32 pt-4 md:pt-10 items-center">
      {/* <Link to="/"> */}
        <img src={logo} alt="Logo" width={60} height={60} />
      {/* </Link>   */}
      <ul className="flex space-x-7 items-center justify-center">
        <li className="text-lg hidden md:block"> <a href="#projects">Projects</a></li>
        <li> 
          <a href="#contact">
            <button className="border-[#5c1be0] border-2 rounded-full py-1 px-2 md:px-6 md:py-2 md:text-lg text-[#5c1be0]"> Say Hello </button>
          </a>
        </li>
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <div>
      <Nav />
      <section className="flex justify-center items-center">
        <div className="flex flex-col justify-center w-2/3 items-center  pt-14 md:pt-28">
          <div className="flex flex-col items-center justify-center" >
            <h1 className="text-2xl md:text-5xl font-bold text-center font-quicksand">Hey, I am Prince, A Full Stack Developer </h1>
            <p className="text:xl text-center md:text-2xl mt-5 font-quicksand"> I code beautifully simple things, and I love what I do. </p>
            {/* <button className="border-[#5c1be0] border-2 rounded-full px-6 py-2 text-lg text-[#5c1be0] mt-5"> Get in Touch </button> */}
          </div>
          <div className="flex flex-col justify-center items-center  pt-14 space-y-14">
            <img className="w-36 md:w-56" src={AvatarImage}  alt="Avatar" />
            <img src={DeviceImage} className="md:w-2/3" alt="Devices" />
          </div>
        </div>
      </section>

    </div>
  )
}

// skill card 

const SkillCard = () => {
  return (
    <div className="flex items-center justify-center text-center">
      <div className="flex flex-col md:flex-row justify-center items-stretch mt-[-65px] md:mt-[-130px]  border rounded-lg bg-white w-5/6">
        {/* frontend skill */}
        <div className="flex flex-col items-center justify-start py-12 md:w-1/3 px-8 border-b md:border-r">
          <div className="bg-[#84e6bc] p-6 rounded-full">
            <svg className="h-12 svg-inline--fa fa-square-terminal fa-stack-1x has-text-dark" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="square-terminal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M384 64c17.7 0 32 14.3 32 32V416c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM83.9 149.6c-5.8 6.7-5 16.8 1.7 22.6L183.4 256 85.6 339.9c-6.7 5.8-7.5 15.8-1.7 22.6s15.9 7.5 22.6 1.7l112-96c3.5-3 5.6-7.5 5.6-12.1s-2-9.1-5.6-12.1l-112-96c-6.7-5.8-16.8-5-22.6 1.7zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16s-7.2-16-16-16H208z"></path></svg>
          </div>
          <h1 className="text-2xl font-bold py-8"> Frontend Developer </h1>
          <p >I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
          <div className="py-8">
            <h1 className="text-xl font-bold text-[#5c1be0] pb-2"> Languages: </h1>
            <p>HTML, CSS, Javascript, ReactJS, Tailwind </p>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#5c1be0] pb-2"> Tools: </h1>
            <ul className="flex flex-col space-y-1">
              <li>VS Code</li>
              <li>Codepen</li>
              <li>GitHub</li>
              <li>Netlify</li>
            </ul>
          </div>
        </div>
        {/* backend skill */}
        <div className="flex flex-col items-center justify-start py-12 md:w-1/3 px-8 border-b md:border-r">
          <div className="bg-[#84e6bc] p-6 rounded-full">
            <svg className="h-12 svg-inline--fa fa-square-terminal fa-stack-1x has-text-dark" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="square-terminal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M384 64c17.7 0 32 14.3 32 32V416c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM83.9 149.6c-5.8 6.7-5 16.8 1.7 22.6L183.4 256 85.6 339.9c-6.7 5.8-7.5 15.8-1.7 22.6s15.9 7.5 22.6 1.7l112-96c3.5-3 5.6-7.5 5.6-12.1s-2-9.1-5.6-12.1l-112-96c-6.7-5.8-16.8-5-22.6 1.7zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16s-7.2-16-16-16H208z"></path></svg>
          </div>
          <h1 className="text-2xl font-bold py-8"> Backend Developer </h1>
          <p >I build the engine that drives your digital experiences. </p>
          <div className="py-8">
            <h1 className="text-xl font-bold text-[#5c1be0] pb-2"> Languages: </h1>
            <p>NodeJs, ExpressJs, MongoDB, Firebase </p>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#5c1be0] pb-2"> Tools: </h1>
            <ul className="flex flex-col space-y-1">
              <li>VS Code</li>
              <li>Postman</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
        {/* DSA and CP skill */}
        <div className="flex flex-col items-center justify-start py-12 md:w-1/3 px-8">
          <div className="bg-[#84e6bc] p-6 rounded-full">
            <svg className="h-12 svg-inline--fa fa-square-terminal fa-stack-1x has-text-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g id="Layer_33" data-name="Layer 33"><path d="M23,14a9.01,9.01,0,0,0-8.932,7.941,35.09,35.09,0,0,1-8.849-.6,1,1,0,1,0-.438,1.951A34.219,34.219,0,0,0,12,24c.693,0,1.375-.023,2.05-.057a8.979,8.979,0,0,0,2.918,5.717A35.505,35.505,0,0,1,12,30c-6.046,0-9.728-1.329-10-2V14.384c.054.026.12.046.175.071q.341.155.718.293c.1.037.206.073.312.108q.41.135.849.252c.072.019.14.041.214.059.367.092.747.175,1.135.25.1.02.209.037.313.056q.453.081.915.149c.121.017.24.035.361.051.358.047.715.09,1.073.126l.144.016c.407.04.809.071,1.206.1l.323.018c.3.018.591.032.878.042l.32.011c.368.01.727.017,1.064.017,1.046,0,2.081-.039,3.077-.115a1,1,0,0,0-.154-1.994C13.979,13.963,13,14,12,14c-6.046,0-9.728-1.329-10-2V6.384c.054.026.12.046.175.071q.341.154.718.293c.1.037.206.073.312.108q.41.135.849.252c.072.019.14.041.214.059.367.092.747.175,1.135.25.1.02.209.037.313.056q.453.081.915.149c.121.017.24.035.361.051.358.047.715.09,1.073.126l.144.016c.407.04.809.071,1.206.1l.323.018c.3.018.591.032.878.042l.32.011C11.3,7.993,11.663,8,12,8a34.219,34.219,0,0,0,7.219-.709,1,1,0,1,0-.438-1.952A32.123,32.123,0,0,1,12,6c-.515,0-1.007-.013-1.487-.031C5.4,5.777,2.305,4.634,2.011,4.016,2.364,3.3,6.025,2,12,2c6.044,0,9.727,1.329,10,2v7a1,1,0,0,0,2,0V4c0-3.157-7.543-4-12-4S0,.843,0,4V28c0,3.157,7.543,4,12,4a34.219,34.219,0,0,0,7.219-.709.9.9,0,0,0,.145-.065A9,9,0,1,0,23,14Zm0,16a7,7,0,1,1,7-7A7.008,7.008,0,0,1,23,30Z"/><path d="M26,18a.987.987,0,0,0-.85.5,5.1,5.1,0,0,0-5.457.746,1,1,0,0,0,1.323,1.5,3.069,3.069,0,0,1,2.616-.676A1,1,0,0,0,24,22h2a1,1,0,0,0,1-1V19A1,1,0,0,0,26,18Z"/><path d="M24.984,25.25a3.07,3.07,0,0,1-2.615.676A1,1,0,0,0,22,24H20a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1,.986.986,0,0,0,.846-.5,4.961,4.961,0,0,0,5.461-.751,1,1,0,1,0-1.323-1.5Z"/><circle cx="5" cy="10" r="1"/><circle cx="5" cy="18" r="1"/><circle cx="5" cy="26" r="1"/></g></svg>
          </div> 
          <h1 className="text-2xl font-bold py-8"> DSA and CP </h1>
          <p >Achieved Knight Badge on Leetcode and Specialist on Codeforces.</p>
          <div className="py-8">
            <h1 className="text-xl font-bold text-[#5c1be0] pb-2"> Languages: </h1>
            <p>C++ </p>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#5c1be0] pb-2"> Tools: </h1>
            <ul className="flex flex-col space-y-1">
              <li>VS Code</li>
              <li>Codeforces</li>
              <li>Leetcode</li>
              <li>GeeksforGeeks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// Intro

const Intro = () => {
  return (
    <>
      <div className="bg-[#5c1be0] flex justify-center">
        <div className="flex flex-col justify-center items-center w-5/6 pt-16 md:pt-32 pb-28 md:pb-60">
          <h1 className="text-xl md:text-4xl text-white font-bold text-center mb-2 font-mono">Hi, I'm Prince Mishra. Nice to meet you.</h1>
          <p className="text-white text-sm md:text-xl p-3 text-center font-quicksand font-semibold">
            I am final Year Undergraduate Student at Maulana Azad National Institute of Technology, Bhopal. I am a Full Stack Developer with a passion for building beautiful and functional user interfaces. I am a quick learner and a team player who is always ready to learn new technologies and work on new projects. I have a strong foundation in Data Structures and Algorithms and I am always ready to solve new problems.
          </p>
        </div>
      </div>
      <SkillCard />
    </>
  )
}

// Project
const ProjectsCards = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-[-65px] md:mt-[-130px]">
      <div className="grid md:grid-cols-2 w-4/5 bg-white m-auto rounded-lg p-4 md:p-16 gap-4 border-2 mb-16">
        <div className="flex flex-col items-center justify-center p-8 shadow-lg">
          <img src={SecretChatImage} alt="" />
          <h1 className="text-2xl font-bold py-4"> Secret Chat </h1>
          <p> A Secret chat app where you can chat with your friends Based on ReactJs and Socket.io . </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://secret-chat.princemishra.live/" target="_blank" className="bg-[#5c1be0] text-white rounded-md px-4 py-2">Live</a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-8 shadow-lg">
          <img src={SwiftCallImage} alt="" />
          <h1 className="text-2xl font-bold py-4"> Swift Call </h1>
          <p> A Video Calling Web App Based on ReactJS and WEBRTC. You can Video Call on this </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://swift-call.princemishra.live/" target="_blank" className="bg-[#5c1be0] text-white rounded-md px-4 py-2">Live</a>
          </div>
        </div>
      </div>
    </div>
  )
}

// Intro


const Project = () => {
  return (
    <div id="projects">
      <div className="bg-[#5c1be0] flex justify-center mt-16">
        <div className="flex flex-col justify-center items-center w-1/2 pt-16 pb-28 md:pt-32 md:pb-60">
          <h1 className="text-xl md:text-4xl text-white font-bold text-center mb-2 font-mono">Projects I have Worked on</h1>
        </div>
      </div>
      <ProjectsCards />
    </div>
  )
}

// Contact
const Contact = () => {
  return (
    <>
      <div id="contact" className="bg-[#5c1be0] text-white">
        <div className="flex flex-col justify-center items-center p-6 py-10 md:p-16 text-center">
          <h1 className="text-lg md:text-3xl font-bold">Interested in collaborating with me?</h1>
          <p className="text-sm md:text-lg">I'm always open to discussing product design work or partnership opportunities</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-12 md:p-24  text-center">
        <form className="flex flex-col justify-center md:w-1/2 items-stretch">
          <input className="border border-gray-300 rounded-md px-4 py-2 mb-4" type="text" placeholder="Your Name"></input>
          <input className="border border-gray-300 rounded-md px-4 py-2 mb-4" type="email" placeholder="Your Email"></input>
          <textarea className="border border-gray-300 rounded-md px-4 py-2 mb-4" placeholder="Your Message"></textarea>
          <button className="bg-[#5c1be0] text-white rounded-md px-4 py-2 mt-8" type="submit">Send Message</button>
        </form>
      </div>
    
    </>
  )
}

// Footer

const Footer = () => {
    return (
      <div className="bg-[#5c1be0] text-white flex flex-col justify-center items-center py-8">
        <img src={logowhite} className="h-12" alt="" />
        <div className="flex flex-wrap mx-4  space-x-4 justify-center items-center text-center md:space-x-4 font-mono py-4">
          <a href="https://github.com/princemishra01">Github</a>
          <a href="https://codeforces.com/profile/princemishra01">CodeForces</a>
          <a href="https://www.linkedin.com/in/princemishra01/">LinkedIn</a>
          <a href="https://twitter.com/00princemishra">Twitter</a>
          <a href="https://leetcode.com/princemishra01/">LeetCode</a>
        </div>
        <div className="text-xs">Design Credit <a href="https://www.linkedin.com/in/matthew-farley-32526014/" target="_blank">@Matthew Farley</a></div>
      </div>
    )
}


export default function App() {
  return (
    <div className="font-quicksand">
      <Header />
      <Intro />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
