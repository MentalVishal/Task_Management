import React from "react";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Box>
        {/* Hero Section */}
        <Box bg="teal.500" py="20" px="4">
          <Flex
            maxW="7xl"
            mx="auto"
            alignItems="center"
            justifyContent="space-between"
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box maxW={{ base: "lg", lg: "xl" }} mr={{ base: 0, lg: "12" }}>
              <Text
                color="white"
                fontSize={{ base: "3xl", lg: "5xl" }}
                fontWeight="bold"
                mb="6"
              >
                Task Management Made Easy
              </Text>
              <Text color="white" fontSize={{ base: "lg", lg: "xl" }} mb="8">
                Organize your tasks, track your progress, and stay productive
                with our task management platform.
              </Text>
              <Button
                id="GetStarted"
                colorScheme="whiteAlpha"
                color="white"
                px="8"
                py="4"
                fontSize="lg"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Get Started
              </Button>
            </Box>
            <Image
              src="https://imgs.search.brave.com/mw4usdnWh60f1AdpfeykJoJHIipDJZDvH92TRT7AOnc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzYwZGIwOTQ0/NjUxZDRiNTlhNzA0/ZWY5My82MWFmNWEw/ZjJkNmVmZjAxMDhh/MmQ4MzNfbFppTURR/VjdzX3NwLUgyMzM1/MmM5Zi1ITFBZUjAw/cUk3UWdGbEdXMEpi/S0V1cV9JVWhqbkx5/ZXpxRmRzWHo1MDBl/dW5yREhwbVQyMno4/NmZ5d21QNUhCeTQz/LUUyOG9LSXpxMmRk/WFV0b1VXcG9xd3B4/TFFubjNqa2x1a3Bw/b213emNhbjVzQS5w/bmc"
              alt="Task Management"
              borderRadius="lg"
              boxShadow="lg"
              maxW={{ base: "full", lg: "md" }}
              m={2}
            />
          </Flex>
        </Box>

        {/* Features Section */}
        <Box bg="gray.100" py="20" px="4">
          <Flex
            maxW="7xl"
            mx="auto"
            justifyContent="center"
            flexWrap="wrap"
            alignItems="center"
          >
            <Box
              maxW={{ base: "lg", lg: "xl" }}
              textAlign="center"
              mb={{ base: "12", lg: 0 }}
            >
              <Text
                id="features"
                color="teal.500"
                fontSize={{ base: "2xl", lg: "4xl" }}
                fontWeight="bold"
                mb="6"
              >
                Features to Simplify Task Management
              </Text>
              <Text fontSize={{ base: "lg", lg: "xl" }} color="gray.600" mb="8">
                Our platform offers powerful features to help you manage your
                tasks efficiently and achieve your goals.
              </Text>
            </Box>
            <Flex
              flexDir="column"
              maxW={{ base: "sm", lg: "xs" }}
              mx={{ base: "auto", lg: "0" }}
              mb={{ base: "8", lg: 0 }}
            >
              <Image
                src="https://www.predictiveanalyticstoday.com/wp-content/uploads/2017/09/What-are-the-Features-of-Task-Management-Software.png"
                alt="Feature 1"
                borderRadius="lg"
                m="2"
                boxShadow="md"
              />
              <Image
                src="https://softwaresuggest-cdn.s3.ap-southeast-1.amazonaws.com/pageimages/features-of-task-management-software.jpg"
                alt="Feature 2"
                borderRadius="lg"
                m="2"
                boxShadow="md"
              />
            </Flex>
            <Flex
              flexDir="column"
              maxW={{ base: "sm", lg: "xs" }}
              mx={{ base: "auto", lg: "0" }}
              mb={{ base: "8", lg: 0 }}
            >
              <Image
                src="https://www.cloudwards.net/wp-content/uploads/2022/08/Best-Task-Management-Software1.png"
                alt="Feature 3"
                borderRadius="lg"
                m="2"
                boxShadow="md"
              />
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KLgeRm7F5DnqGs91mm0Iq23r20kHj8G8Qyn4U6k44Dy3jEXtgx0RVWDx65yGajmWhMU&usqp=CAU"
                alt="Feature 4"
                borderRadius="lg"
                m="2"
                boxShadow="md"
              />
            </Flex>
          </Flex>
        </Box>

        {/* Call to Action */}
        <Box bg="teal.500" py="20" px="4">
          <Flex
            maxW="7xl"
            mx="auto"
            alignItems="center"
            justifyContent="center"
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box
              maxW={{ base: "lg", lg: "xl" }}
              textAlign="center"
              mb={{ base: "12", lg: 0 }}
            >
              <Text
                color="white"
                fontSize={{ base: "3xl", lg: "5xl" }}
                fontWeight="bold"
                mb="6"
              >
                Ready to Manage Your Tasks?
              </Text>
              <Text color="white" fontSize={{ base: "lg", lg: "xl" }} mb="8">
                Sign up now and start organizing your tasks with ease.
              </Text>
              <Button
                id="signup"
                colorScheme="whiteAlpha"
                color="teal.500"
                background={"wheat"}
                px="8"
                py="4"
                fontSize="lg"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </Button>
            </Box>
            <Image
              src="https://assets.materialup.com/uploads/b3794bc9-d020-4e2b-b453-0313011ecebc/preview.jpg"
              alt="Call to Action"
              borderRadius="lg"
              m={3}
              boxShadow="lg"
              maxW={{ base: "full", lg: "md" }}
            />
          </Flex>
        </Box>
      </Box>
    </div>
  );
};
