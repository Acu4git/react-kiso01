import { useEffect } from 'react'
import { useState } from 'react'
import '@style/Threads.css'

type Thread = {
  id: string
  title: string
}

// 新着10件のスレッドのリストを表示する
const Threads = ({baseUrl}: {baseUrl: string}) => {
  const [threads, setThreads] = useState<Thread[]>([])
  useEffect(() => {
    fetch(`${baseUrl}/threads`)
    .then((res) => res.json())
    .then((data) => {
      let threads: Thread[] = []
      for(let i = 0; i < data.length; i++) {
        let thread: Thread = {id: data[i].id, title: data[i].title}
        threads.push(thread)
      }
      setThreads(threads)
    })
    .catch((error: Error) => console.error(error))
  },[])
  return (
    <div className='threads-container'>
      <ul>
        {threads.map((thread: Thread) => (
          <li id={thread.id} className='thread'>
            <a href="#" className='thread-title'>{thread.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Threads