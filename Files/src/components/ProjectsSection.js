import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "GeoSnap",
    description: `Full-stack web application designed to help users geotag their photos
       and visualize them on a beautiful, interactive map. Built with Django,
        GeoDjango, and Leaflet.js, it combines the power of spatial databases
         with a modern user interface.`,
    getImageSrc: () => require("../images/geosnap1.png"),
    url: "https://github.com/Qenszu/geosnap",
  },
  {
    title: "Phoone book",
    description: `A simple React contact list app built for fun while learning React fundamentals. 
    This project was created to get familiar with React — exploring components, state management, 
    props, and styling with Tailwind CSS. Nothing serious, just a playground!`,
    getImageSrc: () => require("../images/preview.png"),
    url: "https://github.com/Qenszu/phone-book",
  },
  {
    title: "Slot Machine Analyzer",
    description: `This project is a stochastic simulator and ML analyzer 
    for slot machine mechanics, built to explore RNG distributions and player behavior patterns.`,
    getImageSrc: () => require("../images/slot-machine.png"),
    url: "https://github.com/Qenszu/slot-machine-analysis",
  },
  {
    title: "Animals Simulation",
    description: `A Java-based simulation of animal movement on a 2D map, featuring a pheromone system
     that influences animal behavior. Animals move around a rectangular map, eat grass, and reproduce.
      When animals reproduce, they leave pheromones on the map — these scents attract other 
      animals to the same location, creating emergent group behavior over time.`,
    getImageSrc: () => require("../images/animals.png"),
    url: "https://github.com/Qenszu/animals-simulation",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
