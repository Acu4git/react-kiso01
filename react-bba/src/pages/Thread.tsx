import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  FormControl,
  ListItem,
  Stack,
  Text,
  Textarea,
  UnorderedList,
  useFormErrorStyles,
  VStack,
} from "@chakra-ui/react";
import Footer from "@components/Footer";
import Header from "@components/Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { form } from "framer-motion/client";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { z } from "zod";

type Post = {
  id: string;
  post: string;
};

const formSchema = z.object({
  comment: z.string().min(1, { message: "入力が必須です" }),
});

type formSchemaType = z.infer<typeof formSchema>;

const baseUrl: string = "https://railway.bulletinboard.techtrain.dev";

const Thread = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  const fetchPosts = () => {
    fetch(`${baseUrl}/threads/${id}/posts`)
      .then((res) => res.json())
      .then((data) => {
        const posts: Post[] = [];

        for (let i = 0; i < data.posts.length; i++) {
          const post: Post = { id: data.posts[i].id, post: data.posts[i].post };
          posts.push(post);
        }

        setPosts(posts);
      })
      .catch((error: Error) => console.error(error));
  };

  const handleClick = () => {
    console.log("invoked.");
    const v = getValues();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post: v.comment }),
    };
    fetch(`${baseUrl}/threads/${id}/posts`, requestOptions).then((res) => {
      console.log(res);
      if (res.ok) {
        reset();
        fetchPosts();
      }
    });
  };

  useEffect(fetchPosts, []);
  return (
    <>
      <Header />
      <Flex bgColor={"whitesmoke"}>
        <Container p={0} m={0} h="100vh">
          <UnorderedList styleType={"none"}>
            {posts.map((post: Post) => (
              <ListItem>
                <Card border={"2px solid gray"}>
                  <CardHeader>
                    <Text fontSize={"x-small"}>ID: {post.id}</Text>
                  </CardHeader>
                  <CardBody>
                    <Text>{post.post}</Text>
                  </CardBody>
                </Card>
              </ListItem>
            ))}
          </UnorderedList>
        </Container>
        <Container
          w="50%"
          display="flex"
          justifyContent="center"
          // alignItems="center"
        >
          <form onSubmit={handleSubmit(handleClick)}>
            <VStack>
              <Textarea
                placeholder="入力してね"
                size="lg"
                colorScheme="white"
                errorBorderColor="red"
                {...register("comment")}
              />
              {errors.comment && (
                <Text color="red">{errors.comment.message}</Text>
              )}
              <Button w={100} colorScheme="green" type="submit">
                送信する
              </Button>
            </VStack>
          </form>
        </Container>
      </Flex>
      <Footer />
    </>
  );
};

export default Thread;
