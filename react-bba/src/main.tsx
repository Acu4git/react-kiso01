import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@components/App.tsx'
import {Reset} from 'styled-reset' // ユーザーエージェントスタイルシートの無効化
import '@style/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
)
