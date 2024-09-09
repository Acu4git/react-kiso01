import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,  Route, Routes} from "react-router-dom";
import App from '@pages/App';
import {Reset} from 'styled-reset' // ユーザーエージェントスタイルシートの無効化
import '@style/index.css'
import { ChakraProvider, Heading } from '@chakra-ui/react';
import Thread from '@pages/Thread';
import Create from '@pages/Create';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Reset />
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path='/' element={<Heading>Hello</Heading>} />
          <Route path='/home' element={<App />} />
          <Route path='/thread/:id' element={<Thread />} />
          <Route path='/create_thread' element={<Create />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
