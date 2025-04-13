// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Shop from './components/Shop.jsx';
import Error from './components/Error.jsx';
import Contact from './components/Contact.jsx';
import Signup from './components/Signup.jsx';
import About from './components/About.jsx';
import Cart from './components/Cart.jsx';
import Detail from './components/Detail.jsx';
import Wishlist from './components/Wishlist.jsx';
import CheckOut from './components/CheckOut.jsx';
import Provider1 from './components/Provider.jsx';
import Store from './Redux/Store.js';






import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
  },
  {
    path: "/checkout",
    errorElement: <Error />,
    element: <CheckOut />,
  },
  {
    path: "/wishlist/:id",
    errorElement: <Error />,
    element: <Wishlist />,
  },
  {
    path: "/wishlist",
    errorElement: <Error />,
    element: <Wishlist />,
  },
  {
    path: "/shop",
    errorElement: <Error />,
    element: <Shop />,
  },
  {
    path: "/product/:id",
    errorElement: <Error />,
    element: <Detail />,
  },
  {
    path: "/contact",
    errorElement: <Error />,
    element: <Contact />,
  },
  {
    path: "/about",
    errorElement: <Error />,
    element: <Detail />,
  },
  {
    path: "/cart",
    errorElement: <Error />,
    element: <Cart />
  },
])
createRoot(document.getElementById('root')).render(
  <Provider1>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </Provider1>

)
