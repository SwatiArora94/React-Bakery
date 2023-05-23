import React, { useEffect } from "react";
import LandingPage from './components/LandingPage/LandingPage';
import './App.scss';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';
import Header from './components/Header/Header';
import { useDispatch } from "react-redux";
import { setProducts } from "services/products/productsSlice";
import { getProducts } from "mocks/products";
import CartPage from "components/CartPage/CartPage";

export const AppWithHeader = () => {
  return <>
    <Header />
    <Outlet />
  </>
}

export const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setProducts(getProducts()));
    // eslint-disable-next-line
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppWithHeader />,
      children:[
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/product/:id",
          element: <ProductDetailPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
      ]
    }
  ]);

  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
