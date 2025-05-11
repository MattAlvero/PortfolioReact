import React from "react";
import PortfolioPageTemplate from "../templates/PortfolioPageTemplate";
import aceLogo from '../../assets/acelogo.png';
import walshLogo from '../../assets/walshlogo.png';
import ExperienceCard from "../UI/molecules/ExperienceCard";

const ExperiencePage = () => {
  const body = (
    <>
      <h1 className="text-col text-4xl font-bold text-center mb-8 text-black">Experience</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-black">Ace Hardware Corporation</h2>
            <img className="w-52" src={aceLogo} alt="Ace Hardware Logo"/>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex-col items-center justify-center">
          <ExperienceCard
            title="Software Engineer Analyst I"
            dates="March 2025 - Present"
            jobDescription={["Served as the GitHub lead for my team, advising on version control best practices, managing branch strategies, and resolving repository conflicts before escalating to DevOps.",
              "Led React integration in the main wholesale customer application, ensuring secure API communication through JWT authentication and HTTPS enforcement, enhancing both security and user trust.",
              "Created Azure Logic Apps and APIs for integration with SalesForce.",
              "Optimized Informatica ETL workflows feeding data from SAP to Hadoop ensuring accurate data on the wholesale platform."
            ]}
          />
          <ExperienceCard
            title="Associate Software Engineer II"
            dates="May 2023 - March 2025"
            jobDescription={["Optimized UI responsiveness and improved real-time data consistency by resolving a 7-year defect, streamlining two critical applications.",
              "Resolved user profile synchronization issues across two applications, enhancing internal workflow efficiency and user accessibility.",
              "Developed UI features in .NET & C#, improving customer product discovery speed by 50%, significantly enhancing real-time search performance."
            ]}
          />
          <ExperienceCard
            title="Associate Software Engineer I"
            dates="June 2022 - May 2023"
            jobDescription={["Enhanced and maintained .NET web applications, resolving 30+ software defects and optimizing performance.",
              "Implemented GroupBy search & beacon features in a wholesale distribution system, increasing sales by 10% through enhanced UI/UX efficiency.",
              "Developed SAP-integrated APIs to provide real-time data access for users on three website pages."
            ]}
          />
        </div>
      </div>
      <br/>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-black">FoundUp LLC</h2>
        </div>
        <div className="bg-white  text-gray-800 p-6 rounded-lg shadow-lg flex-col items-center justify-center">
          <ExperienceCard
              title="Principle Developer"
              dates="August 2022 - August 2023"
              jobDescription={["Co-founder of startup FoundUp LLC",
                "Designed a scalable backend using NestJS, ensuring high availability and real-time data processing.",
                "Implemented DevOps CI/CD automation for four repositories, improving software deployment speed by 40%.",
                "Led a team of three developers, providing mentorship and guiding technical design decisions."
              ]}
          />
        </div>
      </div>
      <br/>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-black">The Walsh Group</h2>
            <img className="w-52" src={walshLogo} alt="Walsh Group Logo"/>
        </div>
        <div className="bg-white  text-gray-800 p-6 rounded-lg shadow-lg flex-col items-center justify-center">
          <ExperienceCard
              title="Software Developer Intern"
              dates="July 2021 - May 2022"
              jobDescription={["Utilized SQL, VB.NET and C#.NET to modify existing company applications.",
                "Developed new full stack web applications to support the IT team.",
                "Implemented Dapper ORM as the new company standard in database communication with applications."
              ]}
          />
          <ExperienceCard
            title="IT Helpdesk Intern"
            dates="March 2021 - July 2021"
            jobDescription={["Provided technical assistance and support for incoming queries and issues related to computer systems, software, and hardware.",
              "Installeed, modified, and repaired computer hardware and software.",
              "Responded to request via phone calls, in person or by email through help desk software.",
              "Supported company mobile phones and smart phones."
            ]}
          />
        </div>
      </div>
      
    </>
  );

  return (
    <PortfolioPageTemplate children={body} />
  );
};

export default ExperiencePage;
