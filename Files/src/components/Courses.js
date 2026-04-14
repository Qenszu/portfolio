import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Box } from "@chakra-ui/react";
import Card from "./Card";

const courses = [
  {
    title: "Introduction to Back-End Development",
    description: `This popular Coursera program, designed by Meta,
     is a comprehensive gateway for anyone looking to build the "brains"
      of websites and applications. It focuses on the server-side logic,
       databases, and APIs that power the modern web.`,
    getImageSrc: () => require("../images/Meta-Logo.png"),
    url: "https://www.coursera.org/programs/career-academy-for-students-yavet/learn/introduction-to-back-end-development?authProvider=agh-university-of-krakow&source=search",
  },
  {
    title: "Introduction to Front-End Development",
    description: `A beginner-friendly course that teaches core 
    web technologies like HTML, CSS, and modern UI frameworks such
     as Bootstrap and React. Coursera It also covers the roles of front-end,
      back-end, and full-stack developers, as well as how the internet works. 
      Class Central No prior experience required.`,
    getImageSrc: () => require("../images/Meta-Logo.png"),
    url: "https://www.coursera.org/programs/career-academy-for-students-yavet/learn/introduction-to-front-end-development?authProvider=agh-university-of-krakow&source=search",
  },
  {
    title: "Advanced React",
    description: `This Coursera course, created by Meta, is designed 
    for developers who already understand the basics of React and want 
    to elevate their skills to a professional level. It focuses on complex 
    state management, performance optimization, and advanced architectural patterns.`,
    getImageSrc: () => require("../images/Meta-Logo.png"),
    url: "https://www.coursera.org/programs/career-academy-for-students-yavet/learn/advanced-react?authProvider=agh-university-of-krakow&source=search",
  },
];

const CourseSection = () => {
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
      alignItems="flex-start"
    >
      <Heading as="h1" id="courses-section">
        Courses
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {courses.map((course) => (
          <Card
            key={course.title}
            title={course.title}
            description={course.description}
            imageSrc={course.getImageSrc()}
            url={course.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default CourseSection;
