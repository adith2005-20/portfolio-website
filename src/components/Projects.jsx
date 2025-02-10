import React from "react";
import SpotlightCard from "../blocks/Components/SpotlightCard/SpotlightCard.jsx";

function Projects() {
  return (
    <div>
      <div className="min-h-32"></div>
      <div className="flex justify-center">
        <div className="flex-col bg-[rgb(12,12,12)] min-h-screen py-8 rounded-2xl text-white w-full sm:w-4/5 md:w-3/4 lg:w-2/3 border-1 border-white">
        <div className="text-white mt-8 px-8 w-full">
            <span className="text-5xl text-white mt-4">projects</span>
            <hr className="border-gray-300 my-4 mx-auto w-full"></hr>
          </div>
          <div className="flex flex-wrap gap-8 p-8 justify-center">
  <SpotlightCard
    className="custom-spotlight-card flex flex-col w-full sm:w-1/2 lg:w-1/3 h-80 p-4 bg-gray-800 rounded-lg shadow-lg"
    spotlightColor="rgba(255, 255, 255, 0.25)"
  >
    <span className="text-3xl">tiktr.</span>
    <div className="text-white mt-4">A web3-based NFT-Marketplace for Event ticket selling </div>
    <div className="flex flex-wrap gap-2 mt-4">
    {["React", "Node.js", "Ethers.js", "Solidity","Ethereum"].map((skill) => (
      <span 
        key={skill} 
        className="text-sm bg-gray-300 text-black px-2 py-1 rounded-xl"
      >
        {skill}
      </span>
    ))}
  </div>

  <a 
    href="https://github.com/adith2005-20/tiktr" 
    target="_blank" 
    rel="noopener noreferrer"
    className="mt-auto self-start hover:bg-white bg-grey-800 text-white border-white hover:border-black border-1 hover:text-black px-4 py-2 rounded-md transition"
  >
    Learn More
  </a>
  </SpotlightCard>
  <SpotlightCard
    className="custom-spotlight-card flex flex-col w-full sm:w-1/2 lg:w-1/3 h-80 p-4 bg-gray-800 rounded-lg shadow-lg"
    spotlightColor="rgba(255, 255, 255, 0.25)"
  >
    <span className="text-3xl">greenfolio</span>
    <div className="text-white mt-4">Sustainable investing made easy</div>
    <div className="flex flex-wrap gap-2 mt-4">
    {["React", "Node.js", "RESTful APIs", "MongoDB","Machine Learning"].map((skill) => (
      <span 
        key={skill} 
        className="text-sm bg-gray-300 text-black px-2 py-1 rounded-xl"
      >
        {skill}
      </span>
    ))}
  </div>

  <a 
    href="https://github.com/adith2005-20/greenfolio" 
    target="_blank" 
    rel="noopener noreferrer"
    className="mt-auto self-start hover:bg-white bg-grey-800 text-white border-white hover:border-black border-1 hover:text-black px-4 py-2 rounded-md transition"
  >
    Learn More
  </a>
    
  </SpotlightCard>
  <SpotlightCard
    className="custom-spotlight-card flex flex-col w-full sm:w-1/2 lg:w-1/3 h-80 p-4 bg-gray-800 rounded-lg shadow-lg"
    spotlightColor="rgba(255, 255, 255, 0.25)"
  >
    <span className="text-3xl">ar-translate</span>
    <div className="text-white mt-4">JS-based on-screen AR translater</div>
    <div className="flex flex-wrap gap-2 mt-4">
    {["React", "JavaScript", "Web Speech API", "AR.js"].map((skill) => (
      <span 
        key={skill} 
        className="text-sm bg-gray-300 text-black px-2 py-1 rounded-xl"
      >
        {skill}
      </span>
    ))}
  </div>

  <a 
    href="https://github.com/adith2005-20/ar-translate" 
    target="_blank" 
    rel="noopener noreferrer"
    className="mt-auto self-start hover:bg-white bg-grey-800 text-white border-white hover:border-black border-1 hover:text-black px-4 py-2 rounded-md transition"
  >
    Learn More
  </a>
  </SpotlightCard>
  
</div>
          
        </div>
      </div>
      <div className="min-h-32"></div>
    </div>
  );
}

export default Projects;
