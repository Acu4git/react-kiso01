import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Input,
} from "@chakra-ui/react";
import Footer from "@components/Footer";
import Header from "@components/Header";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const baseUrl: string = "https://railway.bulletinboard.techtrain.dev";

const formSchema = z.object({
  title: z.string().min(1, "1文字以上の入力が必須です"),
});

type formSchemaType = z.infer<typeof formSchema>;

const Create = () => {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });
  const navigate = useNavigate();
  const goToTop = () => {
    navigate("/home");
  };
  return (
    <>
      <Header />
      <Box dir="row" h={500} bgColor={"whitesmoke"}>
        <Card m={"auto"} w="50%">
          <CardHeader>
            <Heading textAlign={"center"}>スレッド新規作成</Heading>
          </CardHeader>
          <CardBody>
            <Input
              placeholder="タイトルを入力してください"
              {...form.register("title")}
            />
          </CardBody>
          <CardFooter>
            <HStack ml="auto" mr="none">
              <Button variant={"ghost"} onClick={goToTop}>
                Topに戻る
              </Button>
              <Button
                colorScheme="blue"
                onClick={() => {
                  const v = form.getValues();
                  const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ title: v.title }),
                  };
                  fetch(`${baseUrl}/threads`, requestOptions).then((res) => {
                    console.log(res);
                  });
                  goToTop();
                }}
              >
                作成
              </Button>
            </HStack>
          </CardFooter>
        </Card>
      </Box>
      <Footer />
    </>
  );
};

export default Create;
