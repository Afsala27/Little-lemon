import { Heading, HStack, Image, Text, VStack , Box, cardBody} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box borderRadius='xl' bg="white"> 
      <Image src={imageSrc} borderRadius='xl' />
      <Heading color="black" size="md" padding="4"> {title} </Heading> 
      <VStack padding="4" paddingTop="0">
        <Text color="grey" size="sm"> {description} </Text>
      </VStack>
      <HStack padding="4" paddingTop="0">
      <Text color="black" size="sm" >See more</Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
      </HStack>
    </Box>
    
  )
};

export default Card;
