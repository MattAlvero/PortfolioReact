import React, { useState } from 'react';

type ExperienceProps = {
  title: string;
  dates: string;
  jobDescription: string[];
};

const ExperienceCard = ({ title, dates, jobDescription }: ExperienceProps) => {
  const [isOpen, setIsOpen] = useState(false); // State to track the visibility of the list

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-6">
      <h3 
        className="font-bold cursor-pointer"
        onClick={toggleList} // Toggle the list when clicked
      >
        {/* Arrow icon */}
        <span className="text-lg text-gray-600">{isOpen ? '▼' : '▶'}</span> 
        <span>{title} - {dates}</span>
      </h3>
      {isOpen && (
        <ul className="list-disc pl-5 mt-2">
          {jobDescription.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceCard;
