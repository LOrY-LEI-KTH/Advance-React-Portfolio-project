import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    <VStack
      w="100%"
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      align="stretch"
      spacing={4}
      color="black"
    >
    <Box borderRadius="lg" overflow="hidden">
      <Image src={imageSrc}/>
    </Box>
    <VStack align="start" px={3} py={1}>
     <Heading  textAlign="left" as="h4" size="md" pb={1}  >{title}</Heading>
      <Text fontSize='md' w="85%" >{description}</Text>
    </VStack>
    <HStack px={3} pb={3} justify="space-between" w="18%">
      <Text fontWeight="semibold" fontSize='sm' >See more</Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </HStack>
  </VStack>
  );
};

export default Card;
