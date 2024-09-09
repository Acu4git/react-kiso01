import { Box, Card } from "@chakra-ui/react";
import Footer from "@components/Footer";
import Header from "@components/Header";

const Create = () => {
  return (
    <>
      <Header />
      <Box h={500} bgColor={"whitesmoke"}>
        <Card></Card>
      </Box>
      <Footer />
    </>
  );
};

export default Create;
