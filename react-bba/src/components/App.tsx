import '@style/App.css'
import Header from './Header'
import Threads from './Threads'
import Footer from './Footer'

const baseUrl: string = 'https://railway.bulletinboard.techtrain.dev'

const App = () => {
  return (
    <>
      <Header/>
      <Threads baseUrl={baseUrl} />
      <Footer/>
    </>
  )
}

export default App
