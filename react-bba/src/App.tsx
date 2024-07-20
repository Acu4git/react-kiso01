import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Header'

const host = 'railway.bulletinboard.techtrain.dev'

function App() {
  // const url = `https://${host}/threads`
  // const [threads, setThreads] = useState([])
  // useEffect(() => {
  //   fetch(url)
  //   .then((res: Response) => res.json())
  //   .then((data: JSON) => {

  //   })
  // },[])
  return (
    <>
      <Header/>
    </>
  )
}

export default App
