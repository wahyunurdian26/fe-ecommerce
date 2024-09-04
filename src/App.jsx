import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import AboutView from "./page/AboutView";
import CartView from "./page/CartView";
import HomeView from "./page/HomeView";
import OrderView from "./page/OrderView";
import ProductView from "./page/ProductView";
import LoginView from "./page/auth/LoginView";
import RegisterView from "./page/auth/RegisterView";
import PublicLayout from "./layouts/PublicLayout";
import DetailProduct from "./page/DetailProduct";

// Loader
import { loader as HomeLoader } from "./page/HomeView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomeView />,
        loader: HomeLoader,
      },
      {
        path: "products",
        element: <ProductView />,
      },
      {
        path: "product/:id",
        element: <DetailProduct />,
      },
      {
        path: "orders",
        element: <OrderView />,
      },
      {
        path: "cart",
        element: <CartView />,
      },
      {
        path: "about",
        element: <AboutView />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/register",
    element: <RegisterView />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
