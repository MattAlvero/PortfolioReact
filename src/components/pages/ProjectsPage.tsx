import React from 'react';
import PortfolioPageTemplate from "../templates/PortfolioPageTemplate";
import ProjectCard from '../UI/molecules/ProjectCard';
import discord from '../../assets/discord_bot.png';
import ildmv from '../../assets/ILDMVCheck.png';
import fia from '../../assets/fia.png';

const ProjectsPage = () => {
  const body = (
    <>
      <h1 className="text-col text-4xl font-bold text-center mb-8 text-black">Projects</h1>
      <ProjectCard title='Personal Discord Bot' image={discord} link='https://github.com/MattAlvero/BruhBot' description='Created a personal discord bot to use on personal server.'/>
      <ProjectCard title='IL DMV Check' image={ildmv} link='https://ildmvcheck.matthewalvero.dev/' description='During the Covid-19 pandemic, I created this small tool to check which dmv locations have availabile appointments.' />
      <ProjectCard title='FIA' image={fia} link='https://fiauic.org/' description='Serving as a consultant for FIA UIC, attending to their website needs.' />
    </>
  )

  return (
    <PortfolioPageTemplate children={body}/>
  )
}

export default ProjectsPage;
