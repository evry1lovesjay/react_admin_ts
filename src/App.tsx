import './App.scss'
import Home from './pages/home/Home'

import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import "./styles/global.scss"
import User from './pages/user/User';
import Product from './pages/product/Product';

function App() {

  const Layout = () =>{
    return (
      <div className="main">
          <Navbar/>
          <div className="container">
            <div className="menuContainer">
              <Menu/>
            </div>
            
            <div className="contentContainer">
              <Outlet/>
            </div>
          </div>
          <Footer/>
      </div>
    )
  }

  // const user = JSON.parse(localStorage.getItem("currentUser"))
  const user = true

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
          // exact: true
        },
       {
          path: "/users",
          element: <Users/>
        },
       {
          path: "/products",
          element: <Products/>
        },
       {
          path: "/users/:id",
          element: <User/>
        },
       {
          path: "/products/:id",
          element: <Product/>
        },
      ]
    },

    {
      path: "/login",
      element: !user ? <Login/> : <Navigate to="/"/>
    },
    {
      path: "/register",
      element: !user ? <Register/> : <Navigate to="/"/>
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App