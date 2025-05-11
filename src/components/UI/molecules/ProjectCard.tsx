import React from 'react';

type ProjectProps = {
  title: string,
  link: string,
  image: string,
  description: string 
}

const ProjectCard = ({title, link, image, description} : ProjectProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6 flex flex-col items-center text-black">
      <h3 className="font-bold text-black">
        {title}
      </h3>
      <a href={link}><img className='w-32' src={image}/></a>
      <p>{description}</p>
    </div>
  )
}

export default ProjectCard;