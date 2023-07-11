import { FC } from 'react'
import Container from './components/Container'
import ErrorPage from './components/ErrorPage'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from "./components/Dashboard"
import ProtectedRoutes from './ProtectedRoutes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//creating router for client side rendering
const router = createBrowserRouter([
  {
    path: '/',
    element: <Container />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'signup',
        element: <Signup />
      }, 
      {
        index: true,
        element: <Login />
      }, 
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />
          }

        ]
        
      }
     
    ]
  }
])

const App: FC = () => {
  return (
    <RouterProvider router={router}/>
    )
}

export default App