import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export const PatientRecords = () => {
  const auth = useSelector((store) => store.userReducer.role);
  const Token = useSelector((store) => store.userReducer.token);

  let baseURL = "https://backend-ehr.onrender.com";
  const [patientData, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios.get(`${baseURL}/user/users`).then((res) => {
      setData(res.data.users);
      setLoading(false);
    });
  }, [render]);

  const handelDelete = async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    };
    const response = await axios.delete(`${baseURL}/user/delete/${id}`, config);
    console.log(response);
    setRender(render + 1);
    toast.success("Patient Data Deleted");
  };

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
              fontSize={{ base: "3xl", lg: "5xl" }}
              fontWeight="bold"
              mb="6"
            >
              Electronic Health Reports Made Easy
            </Text>
            <Text color="white" fontSize={{ base: "lg", lg: "xl" }} mb="8">
              Access your health records securely and effortlessly with our
              intuitive platform.
            </Text>
          </Box>
        </Flex>

        {loading ? (
          <>
            <h2 style={{ fontSize: "2rm", color: "teal.500" }}>Loading...</h2>
            <Spinner />
          </>
        ) : (
          <Table
            variant="simple"
            colorScheme="teal"
            size="md"
            mt={4}
            background={"whitesmoke"}
            overflow={"hidden"}
          >
            <Thead>
              <Tr>
                <Th textAlign={"center"}>Avatar</Th>
                <Th textAlign={"center"}>Full Name</Th>
                <Th textAlign={"center"}>Date of Birth</Th>
                <Th textAlign={"center"}>Gender</Th>
                <Th textAlign={"center"}>Email</Th>
                <Th textAlign={"center"}>Blood Type</Th>
                {auth === "admin" ? (
                  <>
                    <Th textAlign={"center"}>Details</Th>
                    <Th textAlign={"center"}>Edit</Th>
                    <Th textAlign={"center"}>Delete</Th>
                  </>
                ) : null}
              </Tr>
            </Thead>
            <Tbody>
              {patientData.map((patient, index) => (
                <Tr key={index} _hover={{ bg: "teal.50" }}>
                  <Td textAlign={"center"}>
                    <Avatar
                      size="sm"
                      name={patient.name}
                      src={`url_to_avatar_image/${patient.avatar}`}
                    />
                  </Td>
                  <Td textAlign={"center"}>{patient.name}</Td>
                  <Td textAlign={"center"}>{patient.dob}</Td>
                  <Td textAlign={"center"}>{patient.gender}</Td>
                  <Td textAlign={"center"}>{patient.email}</Td>
                  <Td textAlign={"center"}>{patient.blood}</Td>
                  {auth === "admin" ? (
                    <>
                      <Td
                        textAlign={"center"}
                        color={"blueviolet"}
                        cursor={"pointer"}
                      >
                        <Link to={`/details/${patient._id}`}>View Details</Link>
                      </Td>
                      <Td
                        textAlign={"center"}
                        color={"green"}
                        cursor={"pointer"}
                      >
                        <Link to={`/edit/${patient._id}`}>Edit</Link>
                      </Td>
                      <Td
                        textAlign={"center"}
                        color={"red"}
                        cursor={"pointer"}
                        onClick={() => handelDelete(patient._id)}
                      >
                        Delete
                      </Td>
                    </>
                  ) : null}
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </Box>
    </div>
  );
};
