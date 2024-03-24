import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserSignup } from "../Redux/UserReducer/action";

export function SignUpPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: name,
      email: email,
      password: password,
    };

    dispatch(UserSignup(data)).then((res) => {
      navigate("/login");
    });
  };

  return (
    <Box as="section" p={4} mt={"6%"}>
      <Stack direction={["column", "column", "row"]} spacing={0}>
        <Box
          flex={["none", "none", 1]}
          py={[5, 8, 6]}
          px={[2, 3, 4]}
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <Stack spacing={6}>
            <Text fontSize="3xl" fontWeight="bold" color="teal.600">
              Sign up
            </Text>
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                <FormControl id="name" isRequired>
                  <FormLabel fontSize="lg">Full Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    size="md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel fontSize="lg">Email address</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    size="md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel fontSize="lg">Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    size="md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Button
                  mt={3}
                  type="submit"
                  colorScheme="teal"
                  size="lg"
                  fontWeight="bold"
                  w="full"
                  rightIcon={<FaArrowRight />}
                >
                  Create Account
                </Button>
              </form>
              <Text mt={2} fontSize="lg" color="gray.600">
                Already have an account?{" "}
                <span
                  onClick={() => {
                    navigate("/login");
                  }}
                  style={{ cursor: "pointer", color: "blueviolet" }}
                >
                  Sign in
                </span>
              </Text>
              <Stack spacing={3}>
                <Button
                  variant="outline"
                  colorScheme="black"
                  fontWeight="bold"
                  w="full"
                >
                  Sign up with Google
                </Button>
                <Button
                  variant="outline"
                  colorScheme="facebook"
                  fontWeight="bold"
                  w="full"
                >
                  Sign up with Facebook
                </Button>
              </Stack>
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
}
