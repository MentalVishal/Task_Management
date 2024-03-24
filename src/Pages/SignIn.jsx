import React, { useState } from "react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserLogin } from "../Redux/UserReducer/action";

export const SignIn = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(UserLogin({ email: email, password: password })).then(() => {
      navigate("/dashboard");
    });
  };

  return (
    <Box as="section" py={[10, 16, 24]} px={[4, 6, 8]}>
      <Stack direction={["column", "column", "row"]} spacing={0}>
        <Box
          flex={["none", "none", 1]}
          py={[10, 16, 24]}
          px={[4, 6, 8]}
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <Stack spacing={8} maxW={["none", "none", "sm", "md"]} mx="auto">
            <Text
              fontSize={["3xl", "4xl"]}
              fontWeight="bold"
              lineHeight="tight"
              color="black"
            >
              Sign in
            </Text>
            <Text fontSize="sm" color="gray.600">
              Don't have an account?{" "}
              <Button
                id="create"
                as="a"
                variant="link"
                color="black"
                fontWeight="semibold"
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Create a free account
              </Button>
            </Text>
            <Stack as="form" spacing={5}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<ArrowRightIcon color="gray.400" />}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  borderRadius="md"
                  borderColor="gray.300"
                  _focus={{ borderColor: "gray.400", boxShadow: "outline" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<ArrowRightIcon color="gray.400" />}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  borderRadius="md"
                  borderColor="gray.300"
                  _focus={{ borderColor: "gray.400", boxShadow: "outline" }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
              <Button
                id="Admin"
                type="submit"
                variant="solid"
                colorScheme="black"
                borderRadius="md"
                py="2.5"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="wide"
                bg={"teal.300"}
                _hover={{ bg: "blackAlpha.800" }}
                onClick={handleSubmit}
              >
                Sign in
                <ArrowRightIcon ml={2} />
              </Button>
            </Stack>
            <Stack spacing={3}>
              <Button
                variant="outline"
                colorScheme="gray"
                borderRadius="md"
                borderWidth="1px"
                py="2.5"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="wide"
                _hover={{ bg: "gray.100", color: "black" }}
              >
                <FaGoogle m={3} boxSize={6} color="rose.500" />
                Sign in with Google
              </Button>
              <Button
                variant="outline"
                colorScheme="gray"
                borderRadius="md"
                borderWidth="1px"
                py="2.5"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="wide"
                _hover={{ bg: "gray.100", color: "black" }}
              >
                <FaFacebookF mr={2} boxSize={6} color="#2563EB" />
                Sign in with Facebook
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box flex={["none", "none", 1]}>
          <Box
            h="full"
            w="full"
            bgSize="cover"
            bgPos="center"
            bgImage="url('https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')"
            borderRadius="md"
          />
        </Box>
      </Stack>
    </Box>
  );
};
