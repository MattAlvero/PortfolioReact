import React from "react";
import PortfolioPageTemplate from "../templates/PortfolioPageTemplate";
import myImage from '../../assets/me.jpg';

const HomePage = () => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Implement your search logic here
  };

  const body = (
    <>
      <h1 className="text-col text-4xl font-bold text-center mb-8 text-black">About Me</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-black">Nice to meet you!</h2>
          <p className="mt-4 text-gray-800">My name is Matthew Alvero. I am a software engineer with 3 years of experience in .NET development. I have a strong foundation with C# and JavaScript. I am passionate about creating solutions to interesting and complex problems, while thriving in a fast-paced, collaborative environments.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
          <img className="rounded-full object-cover w-52" src={myImage} alt="An image of me."/>
        </div>
      </div>
    </>
  );

  return (
    <PortfolioPageTemplate onSearch={handleSearch} children={body}>
      
    </PortfolioPageTemplate>
  );
};

export default HomePage;
