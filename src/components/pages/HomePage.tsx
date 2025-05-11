import React from "react";
import PortfolioPageTemplate from "../templates/PortfolioPageTemplate";
import myImage from '../../assets/me.jpg';
import { CommandLineIcon, EnvelopeIcon, DocumentIcon, UserIcon } from '@heroicons/react/24/solid';

const HomePage = () => {
  const body = (
    <>
      <h1 className="text-col text-4xl font-bold text-center mb-8 text-black">About Me</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold text-black">Nice to meet you!</h2>
          <p className="mt-4 text-gray-800">I am a software engineer with 3 years of experience in .NET development. I have a strong foundation with C# and JavaScript. I am passionate about creating solutions to interesting and complex problems, while thriving in a fast-paced, collaborative environments.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
          <img className="rounded-full object-cover w-52" src={myImage} alt="An image of me."/>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grids-cols-1 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-black mb-8">Links</h2>
          <div className="flex justify-around items-center">
            <div>
              <p className="font-bold text-black">GitHub</p>
              <a href="https://github.com/MattAlvero"><CommandLineIcon className="size-12 text-black"/></a>
            </div>
            <div>
              <p className="font-bold text-black">LinkedIn</p>
              <a href="https://www.linkedin.com/in/matthew-alvero"><UserIcon className="size-12 text-blue"/></a>
            </div>
            <div>
              <p className="font-bold text-black">Email</p>
              <a href="mailto:matthewadrianoalvero@gmail.com"><EnvelopeIcon className="size-12 text-amber-200"/></a>
            </div>
            <div>
              <p className="font-bold text-black">Resume</p>
              <a href="https://docs.google.com/document/d/1SlbHgT0P51dUtwKVLj9B1bEMcAe1kDHeyPsOqLW5Uq4/edit?usp=sharing"><DocumentIcon className="size-12 text-blue-500"/></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <PortfolioPageTemplate children={body} />
  );
};

export default HomePage;
