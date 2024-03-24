import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Container,
  Heading,
  VStack,
  StackDivider,
  Input,
  Textarea,
  Button,
  List,
  ListItem,
  Flex,
  Spacer,
  IconButton,
  useToast,
  Text,
  Center,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { EditIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useSelector } from "react-redux";

export const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [editTaskIndex, setEditTaskIndex] = useState(-1);
  const [editTaskTitle, setEditTaskTitle] = useState("");
  const [editTaskDescription, setEditTaskDescription] = useState("");
  const toast = useToast();
  let baseURL = "https://backend-task-management-jtxi.onrender.com";
  const Token = useSelector((store) => store.userReducer.token);

  const config = {
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  };

  useEffect(() => {
    axios.get(`${baseURL}/task/`, config).then((res) => {
      console.log(res.data);
      setTasks(res.data);
    });
  }, []);

  const handleEditTask = (index) => {
    setEditTaskIndex(index);
    setEditTaskTitle(tasks[index].title);
    setEditTaskDescription(tasks[index].description);
  };

  const handleUpdateTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editTaskIndex] = {
      title: editTaskTitle,
      description: editTaskDescription,
    };
    setTasks(updatedTasks);
    setEditTaskIndex(-1);
    toast({
      title: "Task updated.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleDeleteTask = async (index, taskId) => {
    try {
      await axios.delete(
        `https://backend-task-management-jtxi.onrender.com/task/${taskId}`,
        config
      );
    } catch (error) {
      console.error("Error deleting task:", error);
    }
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
    toast({
      title: "Task deleted.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <Container maxW="xl" centerContent>
        <VStack spacing={4} align="stretch">
          <Heading as="h1" size="xl">
            Task Management Dashboard
          </Heading>

          <List spacing={3} mt={4} divider={<StackDivider />}>
            {tasks.map((task, index) => (
              <ListItem key={index}>
                {editTaskIndex === index ? (
                  <VStack spacing={2} align="stretch">
                    <Input
                      value={editTaskTitle}
                      onChange={(e) => setEditTaskTitle(e.target.value)}
                      placeholder="Enter task title"
                    />
                    <Textarea
                      value={editTaskDescription}
                      onChange={(e) => setEditTaskDescription(e.target.value)}
                      placeholder="Enter task description"
                    />
                    <Flex>
                      <Button onClick={handleUpdateTask} colorScheme="green">
                        Update
                      </Button>
                      <Spacer />
                      <Button
                        onClick={() => setEditTaskIndex(-1)}
                        colorScheme="gray"
                      >
                        Cancel
                      </Button>
                    </Flex>
                  </VStack>
                ) : (
                  <Flex
                    alignItems="center"
                    p={4}
                    boxShadow={"rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset"}
                  >
                    <VStack spacing={1} align="stretch" flex="1">
                      <Heading as="h3" size="md">
                        {task.title}
                      </Heading>
                      <Text>{task.description}</Text>
                    </VStack>
                    <Spacer />
                    <IconButton
                      icon={<FaTrash />}
                      colorScheme="red"
                      onClick={() => handleDeleteTask(index, task._id)}
                      mr={3}
                    />
                    <IconButton
                      icon={<EditIcon />}
                      colorScheme="blue"
                      onClick={() => handleEditTask(index)}
                    />
                  </Flex>
                )}
              </ListItem>
            ))}
          </List>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};
