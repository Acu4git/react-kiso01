import { Box, Card, CardBody, CardHeader, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react"
import Footer from "@components/Footer"
import Header from "@components/Header"
import { useParams } from "react-router-dom"

type Post = {
  id : string,
  post: string
}

const baseUrl: string = 'https://railway.bulletinboard.techtrain.dev'

const Thread = () => {
  const {id} = useParams()
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(()=>{
    fetch(`${baseUrl}/threads/${id}/posts`)
    .then((res) => res.json())
    .then((data) => {
      const posts : Post[] = []

      for(let i= 0; i< data.posts.length; i++) {
        const post: Post = {id: data.posts[i].id, post: data.posts[i].post}
        posts.push(post)
      }

      setPosts(posts)
    })
    .catch((error: Error) => console.error(error))
  },[])
  return (
    <>
      <Header />
      <Box bgColor={'whitesmoke'} display={'flex'} justifyContent={'center'}>
        <UnorderedList styleType={'none'}>
          {posts.map((post:Post) => (
            <ListItem>
              <Card border={'2px solid gray'}>
                <CardHeader>
                  <Text fontSize={'x-small'}>
                    ID: {post.id}
                  </Text>
                </CardHeader>
                <CardBody>
                  <Text>
                    {post.post}
                  </Text>
                </CardBody>
              </Card>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Footer/>
    </>
  )
}

export default Thread