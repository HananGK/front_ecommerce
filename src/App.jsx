import './App.css'
import Navbar from './components/Navbar/Navbar'
import {createBrowserRouter, Outlet} from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer/Footer'
import ShopContextProvider from './context/ShopContext'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'



// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Shop />,
      },
      {
        path: '/mens',
        element: <ShopCategory banner={men_banner} category="men"/>,
      },
      {
        path: '/womens',
        element: <ShopCategory banner={women_banner} category="women"/>,
      },
      {
        path: '/kids',
        element: <ShopCategory banner={kid_banner} category="kid"/>,
      },
      {
        path: '/product',
        element: <Product />,
        children: [
          {
            path: ':productId',
            element: <Product />
          }
        ]
      },
      {
        path: '/cart',
        element: <Cart/>,
      },
      {
        path: '/login',
        element: <LoginSignup/>,
      },
    ]
  }
])

function App() {
  

  return (
    <>
      <ShopContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ShopContextProvider>
      
    </>
  )
}

export default App
