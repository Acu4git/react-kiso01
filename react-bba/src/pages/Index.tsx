import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        h="100vh"
        bgColor={"black"}
        backgroundSize={"cover"}
      >
        <Card w="50%" size="md">
          <CardHeader>
            <Text>Welcome to the React-BBA!</Text>
          </CardHeader>
          <CardBody textAlign="center">
            <Text fontSize="x-large" fontWeight="bold">
              お前も掲示板に入らないか？
            </Text>
          </CardBody>
          <CardFooter
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <HStack>
              <Button colorScheme="red" onClick={() => onOpen()}>
                やめとく
              </Button>
              <Button
                onClick={() => {
                  navigate("/home");
                }}
                colorScheme="blue"
              >
                入ります！
              </Button>
            </HStack>
          </CardFooter>
        </Card>
        <AlertDialog
          motionPreset="slideInBottom"
          isOpen={isOpen}
          onClose={onClose}
          isCentered
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader>確認</AlertDialogHeader>
            <AlertDialogBody>本当にやめますか？</AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="red" onClick={onClose}>
                キャンセル
              </Button>
              <Button colorScheme="blue" ml={3}>
                はい、やめます
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Box>
    </>
  );
};

export default Index;
