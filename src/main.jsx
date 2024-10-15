import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './pages/Profile.jsx'
import Home from './pages/Home.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import MyPost from './pages/MyPost.jsx'
import Chat from './pages/Chat.jsx'
import Notification from './pages/Notification.jsx'
import History from './pages/History.jsx'
import Favorite from './pages/Favorite.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/profile',
        element :
         <AuthLayout auth={false}>
           <Profile/>
         </AuthLayout> 
      },
      {
        path : '/my-post',
        element :
         <AuthLayout>
           <MyPost/>
         </AuthLayout> 
      },
      {
        path : '/chat',
        element :
         <AuthLayout>
           <Chat/>
         </AuthLayout> 
      },
      {
        path : '/notification',
        element :
         <AuthLayout>
           <Notification/>
         </AuthLayout> 
      },
      {
        path : '/history',
        element :
         <AuthLayout>
           <History/>
         </AuthLayout> 
      },
      {
        path : '/favorite',
        element :
         <AuthLayout>
           <Favorite/>
         </AuthLayout> 
      }
    ]
  },
  { path : 'login', element : <Login/> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
