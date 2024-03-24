import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Text,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useMediaQuery,
  Wrap,
  WrapItem,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Redux/UserReducer/action";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogin = useSelector((store) => store.userReducer.isAuth);
  const name = useSelector((store) => store.userReducer.username);
  const image = "";

  const handelDashboard = () => {
    onClose();
    navigate("/dashboard");
  };
  const handelCreate = () => {
    onClose();
    navigate("/create");
  };
  const handelSetting = () => {
    onClose();
    navigate("/setting");
  };
  const handelLogin = () => {
    onClose();
    navigate("/login");
  };

  const handelNavigate = async () => {
    if (!isLogin) {
      navigate("/login");
    } else {
      await dispatch(Logout());
    }
  };

  return (
    <Flex
      bg="blue.500"
      p={2}
      pl={5}
      pr={3}
      justifyContent="space-between"
      align="center"
      cursor={"pointer"}
    >
      <Text
        fontWeight="bold"
        fontSize="2xl"
        color="yellow"
        onClick={() => navigate("/")}
      >
        Task Management
      </Text>
      {isLargerThan768 ? (
        <Flex align="center">
          <Text
            pl={3}
            fontWeight="bold"
            fontSize="xl"
            color="white"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </Text>
          <Text
            pl={3}
            fontWeight="bold"
            fontSize="xl"
            color="white"
            onClick={() => navigate("/task")}
          >
            Create
          </Text>
          <Text
            pl={3}
            fontWeight="bold"
            fontSize="xl"
            color="white"
            onClick={() => navigate("/profile")}
          >
            Setting
          </Text>
          <Text
            pl={3}
            fontWeight="bold"
            fontSize="xl"
            color="white"
            onClick={handelNavigate}
          >
            {isLogin ? "Logout" : "Login"}
          </Text>
          <Wrap pl={3}>
            <WrapItem>
              <Avatar
                name={name}
                src={image}
                onClick={() => navigate("/profile")}
              />
            </WrapItem>
          </Wrap>
          <Text color={"white"} pl={1} fontSize={"md"}>
            {name}
          </Text>
        </Flex>
      ) : (
        <>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open menu"
            color="black"
            onClick={onOpen}
          />
          <Drawer
            size={"xs"}
            placement="right"
            onClose={onClose}
            isOpen={isOpen}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader bg="teal" color="white">
                Task Menu
                <DrawerCloseButton />
              </DrawerHeader>
              <DrawerBody>
                {/* Menu items go here */}
                <Text
                  pl={3}
                  fontWeight="bold"
                  fontSize="xl"
                  color="teal"
                  onClick={handelDashboard}
                >
                  Dashboard
                </Text>
                <Text
                  pl={3}
                  fontWeight="bold"
                  fontSize="xl"
                  color="teal"
                  onClick={handelCreate}
                >
                  Create
                </Text>
                <Text
                  pl={3}
                  fontWeight="bold"
                  fontSize="xl"
                  color="teal"
                  onClick={handelSetting}
                >
                  Setting
                </Text>
                <Text
                  pl={3}
                  fontWeight="bold"
                  fontSize="xl"
                  color="teal"
                  onClick={handelLogin}
                >
                  {isLogin ? "Logout" : "Login"}
                </Text>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Flex>
  );
};
