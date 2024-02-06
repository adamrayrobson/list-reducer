import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './reset.css'
import './index.css'
import { PostsProvider } from './contexts/PostsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>
  </React.StrictMode>,
)
