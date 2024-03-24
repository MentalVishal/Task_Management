import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Box, Button, Text } from "@chakra-ui/react";

export function ErrorPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: "2", md: "0" }}
      h={"70vh"}
      margin={"auto"}
    >
      <Box>
        <Text fontSize="sm" fontWeight="semibold" color="black">
          404 error
        </Text>
        <Text
          mt="3"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="semibold"
          color="gray.800"
        >
          We can't find that page
        </Text>
        <Text mt="4" color="gray.500">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </Text>
        <Box
          mt="6"
          display="flex"
          alignItems="center"
          spaceX="3"
          justifyContent={"center"}
        >
          <Button
            type="button"
            variant="outline"
            borderColor="black"
            px="3"
            py="2"
            fontSize="sm"
            fontWeight="semibold"
            color="black"
            _focus={{ outline: "2px solid black", outlineOffset: "2px" }}
          >
            <FaArrowLeft size={16} mr="2" />
            Go back
          </Button>
          <Button
            m={4}
            type="button"
            variant="solid"
            bg="black"
            px="3"
            py="2"
            fontSize="sm"
            fontWeight="semibold"
            color="white"
            _hover={{ bg: "black/80" }}
            _focus={{ outline: "2px solid black", outlineOffset: "2px" }}
          >
            Contact us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
