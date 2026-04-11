import { Heading, HStack, Image, Text, VStack, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <VStack
      bg="white"
      p={6}
      borderRadius="lg"
      spacing={4}
      align="start"
      boxShadow="md"
      maxW="sm"
      justifyContent="space-between"
    >
      <Image
        src={imageSrc}
        alt="projectPhoto"
        borderRadius="md"
        objectFit="cover"
        w="100%"
        maxH="200px"
      />
      <Heading as="h2" size="xl" color="gray.800">
        {title}
      </Heading>
      <Text fontSize="md" color="gray.600">
        {description}
      </Text>
      <Button
        as="a"
        href={url}
        target="_blank"
        colorScheme="teal"
        variant="outline"
      >
        Read More
      </Button>
    </VStack>
  );
};

export default Card;
