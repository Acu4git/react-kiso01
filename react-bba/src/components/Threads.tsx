import { useEffect,useState } from 'react'
import '@style/Threads.css'
import {Box, Button, Card, CardFooter ,CardHeader,ListItem,Text, UnorderedList} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

type Thread = {
  id: string
  title: string
}

// 新着10件のスレッドのリストを表示する
const Threads = ({baseUrl}: {baseUrl: string}) => {
  const [threads, setThreads] = useState<Thread[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${baseUrl}/threads`)
    .then((res) => res.json())
    .then((data) => {
      const threads: Thread[] = []
      for(let i = 0; i < data.length; i++) {
        const thread: Thread = {id: data[i].id, title: data[i].title}
        threads.push(thread)
      }
      setThreads(threads)
    })
    .catch((error: Error) => console.error(error))
  },[])

  const goToPage = (id: string) => {
    navigate(`/thread/${id}`)
  }
  
  return (
    <>
      <Box bgColor={'whitesmoke'} pt={5} pb={5}>
        <Text fontWeight={'bold'} fontSize='3xl' textAlign={'center'}>
          新着スレッド
        </Text>
      </Box>
      <div className='threads-container'>
        <UnorderedList styleType={"none"}>
          {threads.map((thread: Thread) => (
            <ListItem id={thread.id} w={500}>
              <Card border={'2px solid gray'}>
                <CardHeader>
                  <Text fontSize="xl" fontWeight={'bold'}>{thread.title}</Text>
                </CardHeader>
                <CardFooter>
                  <Button onClick={() => goToPage(thread.id)} m="auto" colorScheme='blue' width={'50%'}>
                    このスレッドに入る
                  </Button>
                </CardFooter>
              </Card>
            </ListItem>
          ))}
        </UnorderedList>
      </div>
    </>
  )
}

export default Threads