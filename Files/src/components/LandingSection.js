import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePicture from "../images/profile.jpg"

const greeting = "Hi, I'm Patryk!";
const bio1 = "Computer Science Student";
const bio2 = "Passionate about building functional web applications";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <img 
  src={profilePicture} 
  alt="test" 
  style={{ width: '150px', borderRadius: '50%' }} 
/>
      
      <Heading as="h4" size="md" noOfLines={1}>
        {greeting}
      </Heading>

      <VStack spacing={1}>
        <Heading as="h1" size="xl" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size="xl" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
