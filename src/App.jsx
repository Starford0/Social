import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landingpage from './Component/landingpage/landingpage'
import Login from './Component/Loginpage/Login'
import Profilepage from './Component/Profilepage/Profilepage'



const router = createBrowserRouter([
   {
    path: '/',
    element: <Landingpage />
  },

  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/profile",
    element: <Profilepage />
  },


])

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App