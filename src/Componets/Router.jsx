import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Shop from "../Pages/Shop";
import Categories from "../Pages/Categories";
import { ProductDetails } from "./ProductDetails";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 🔥 WRAP ALL
    children: [
      { path: "/", element: <Home /> },
      { path: "/product", element: <Product /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop/:category", element: <Shop /> },
      { path: "/categories", element: <Categories /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
    ],
  },
]);