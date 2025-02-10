import React from "react";
import "./Hero.css"; // Import the new CSS file
import { Link } from "react-router-dom";
 // Import Link from react-router-dom
function Hero() {
  return (
    <>
      
        <div className="min-h-32"></div>
        <div className="flex justify-center">
          <div className="flex bg-[rgb(12,12,12)] min-h-screen py-8 rounded-2xl text-white w-full sm:w-4/5 md:w-3/4 lg:w-2/3 border-white border-1">
            <div className="flex flex-col items-center w-full">
              <div className="text-white mt-8 px-8 w-full">
                <span className="text-5xl">adith biju.</span>
                <br></br>
                <span className=" text-gray-300">-cse undergrad at VIT</span>
                <br></br>
                <span className="text-gray-300">-based in Chennai</span>
                <br></br>
                <hr className="border-gray-300 my-4 mx-auto w-full"></hr>
              </div>
              <div className="flex space-x-5 justify-center mt-4">
                <a
                  href="https://www.linkedin.com/in/adith-biju-224358289/"
                  className="text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.72C24 .77 23.21 0 22.23 0ZM7.13 20.48H3.56V9h3.57v11.48ZM5.34 7.45a2.08 2.08 0 1 1 0-4.16 2.08 2.08 0 0 1 0 4.16ZM20.48 20.48h-3.56v-5.58c0-1.33-.02-3.04-1.86-3.04s-2.15 1.45-2.15 2.94v5.68h-3.57V9h3.43v1.57h.05c.48-.9 1.65-1.86 3.4-1.86 3.63 0 4.3 2.39 4.3 5.49v6.28Z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/adith2005-20"
                  className="text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">GitHub account</span>
                </a>
                <a
                  href="https://www.x.com/royal4u_"
                  className="text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white"/>
                  </svg>
                  <span className="sr-only">X page</span>
                </a>
              </div>
              <div className="flex flex-col mt-8 px-8 w-full">
                <p className="text-gray-300 pb-16">
                I'm a 19-year-old passionate about coding, always looking to explore new technologies and improve my projects. When I'm not coding, I love listening to music or refining my ideas. Feel free to reach out—you can contact me{" "}
                  <Link to="/contact">
                    <u>here</u>
                  </Link>
                  .
                </p>
                <span className="text-3xl text-white mt-4">education</span>
                <hr className="border-gray-300 my-4 mx-auto w-full"></hr>
                <br></br>
                <ul className="text-white py-4">
                  <li>
                    -Vellore Institute of Technology, Chennai
                    <p className="text-gray-400">
                      B.Tech in Computer Science (2023-Present)
                    </p>
                  </li>
                  <li>
                    -Kendriya Vidyalaya Sangathan
                    <p className="text-gray-400"> CBSE</p>
                  </li>
                </ul>
                <span className="text-3xl text-white mt-4">projects</span>
                <hr className="border-gray-300 my-4 mx-auto w-full"></hr>
                <br></br>
                <ul className="text-gray-300 py-4">
                  <li className="pb-4">
                    <a href="https://github.com/adith2005-20/tiktr"className="text-2xl text-white">-tiktr</a>, an Ethereum-based NFT marketplace for concert tickets
                    <p className="text-gray-400">
                      Web3, Solidity, React, Tailwind CSS
                    </p>
                  </li>
                  <li>
                  <a href='https://github.com/adith2005-20'className="text-2xl text-white">-greenfolio</a>, a stock trading platform for sustainable investing
                    <p className="text-gray-400"> Machine Learning, MongoDB, React </p>
                  </li>
                </ul>
                <span className="text-3xl text-white mt-4">skills</span>
              <hr className="border-gray-300 my-4 mx-auto w-full"></hr>
              <ul className="text-white py-4">
                <li className="text-gray-300"><span className="text-white text-xl">- Programming Languages:</span> C++, Java, JavaScript, Python, C</li>
                <li className="text-gray-300"><span className="text-white text-xl">- Web Development:</span> React, HTML, CSS, Tailwind CSS, JavaScript, Express.js</li>
                <li className="text-gray-300"><span className="text-white text-xl">- Blockchain:</span> Solidity, Web3.js</li>
                <li className="text-gray-300"><span className="text-white text-xl">- Networking & OS:</span> Linux, Ubuntu Server, VirtualBox</li>
                <li className="text-gray-300"><span className="text-white text-xl">- Database:</span> MongoDB, mySQL</li>
                <li className="text-gray-300"><span className="text-white text-xl">- Other:</span> Competitive programming, DSA, Git/GitHub</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-8"></div>
    </>
  );
}

export default Hero;
