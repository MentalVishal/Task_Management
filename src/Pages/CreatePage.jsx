import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isImportant, setIsImportant] = useState(false);

  let baseURL = "https://backend-task-management-jtxi.onrender.com";

  const Token = useSelector((store) => store.userReducer.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
    const data = {
      title: title,
      description: description,
      isCompleted: isCompleted,
      isImportant: isImportant,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    };
    axios.post(`${baseURL}/task/create`, data, config).then((res) => {
      console.log(res.data);
      if (res.data.msg === "Task added") {
        toast.success("Task Added Successfull");
        setTitle("");
        setDescription("");
        setIsCompleted(false);
        setIsImportant(false);
      } else {
        toast.error("There is Some error");
      }
    });
    // Reset form fields after submission
  };

  return (
    <Box
      p={6}
      mt={"10%"}
      maxWidth="600px"
      mx="auto"
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
    >
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <Checkbox
            isChecked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
            colorScheme="green"
          >
            Mark as Completed
          </Checkbox>
        </FormControl>

        <FormControl mt={2}>
          <Checkbox
            isChecked={isImportant}
            onChange={(e) => setIsImportant(e.target.checked)}
            colorScheme="red"
          >
            Mark as Important
          </Checkbox>
        </FormControl>

        <Button
          mt={6}
          colorScheme="teal"
          type="submit"
          size="lg"
          width="100%"
          fontWeight="bold"
          _hover={{ bg: "teal.600" }}
        >
          Create Task
        </Button>
      </form>
    </Box>
  );
};

export default CreatePage;
