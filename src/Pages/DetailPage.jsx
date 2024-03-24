import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Text,
  Stack,
  Badge,
  Divider,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";

export const DetailPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const auth = "admin";
  const param = useParams();

  const [formData, setData] = useState([]);

  let baseURL = "https://backend-ehr.onrender.com";

  useEffect(() => {
    setLoading(true);
    axios.get(`${baseURL}/user/users/${param.id}`).then((res) => {
      setData(res.data.user);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Box bg="teal.500">
        <Flex
          maxW="7xl"
          mx="auto"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box m={"auto"}>
            <Text
              color="white"
              fontSize={{ base: "2xl", lg: "4xl" }}
              fontWeight="bold"
              mb="3"
            >
              Electronic Health Detail Reports
            </Text>
            <Text color="white" fontSize={{ base: "lg", lg: "xl" }} mb="8">
              Access your health records securely and effortlessly with our
              intuitive platform.
            </Text>
          </Box>
        </Flex>
      </Box>

      {loading ? (
        <>
          <h1>Loading...</h1>
          <Spinner />
        </>
      ) : (
        <Box p={6} maxW="xl" mx="auto">
          <Stack spacing={6}>
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Stack direction="row" align="center" spacing={4}>
                <Avatar size="xl" name={formData?.name} src="/avatar.jpg" />
                <Stack spacing={4}>
                  <Text fontSize="2xl" fontWeight="bold">
                    {formData?.name}
                  </Text>
                  <Text fontSize="lg">
                    <strong>Date of Birth:</strong> {formData?.dob}
                  </Text>
                  <Text fontSize="lg">
                    <strong>Gender:</strong> {formData?.gender}
                  </Text>
                  <Text fontSize="lg">
                    <strong>Email:</strong> {formData?.email}
                  </Text>
                  <Text fontSize="lg">
                    <strong>Blood Type:</strong> {formData?.blood}
                  </Text>
                  <Text fontSize="lg">
                    <strong>Height:</strong> {formData?.height}
                  </Text>
                  <Text fontSize="lg">
                    <strong>Weight:</strong> {formData?.weight}
                  </Text>
                  <Text fontSize="lg">
                    <strong>Allergies:</strong>{" "}
                    <Badge colorScheme="green">{formData.allergies}</Badge>
                  </Text>
                  <Text fontSize="lg">
                    <strong>Medical Conditions:</strong>{" "}
                    <Badge colorScheme="purple">{formData.conditions}</Badge>
                  </Text>
                  <Text fontSize="lg">
                    <strong>Doctor Preference:</strong> {formData.doctor}
                  </Text>
                </Stack>
              </Stack>
            </Box>
            <Divider />
            {auth === "admin" ? (
              <Button
                colorScheme="teal"
                size="lg"
                fontWeight="bold"
                onClick={() => {
                  navigate(`/edit/${formData._id}`);
                }}
              >
                Edit Details
              </Button>
            ) : null}
          </Stack>
        </Box>
      )}
    </div>
  );
};
