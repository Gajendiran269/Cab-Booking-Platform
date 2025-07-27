import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{ BrowserRouter } from 'react-router-dom'
import UserContext from '../src/Context/UserContext'
import CaptainContext from '../src/Context/CaptainContext.jsx'
import SocketProvider from '../src/Context/SocketContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SocketProvider>
      <CaptainContext>
        <UserContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserContext>
      </CaptainContext>
    </SocketProvider>
  </StrictMode>,
)
