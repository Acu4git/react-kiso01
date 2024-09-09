import '@style/App.css'
import Header from '@components/Header'
import Threads from '@components/Threads'
import Footer from '@components/Footer'

const baseUrl: string = 'https://railway.bulletinboard.techtrain.dev'

const App = () => {
  return (
    <>
      <Header />
      <Threads baseUrl={baseUrl} />
      <Footer />
    </>
  )
}

export default App
