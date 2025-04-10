import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  AdditemPage,
  AdminPage,
  AdminMainpage,
  BannedUser,
  ItemPage,
  ItemSubPage,
  LogInPage,
  LogInPageAdmin,
  MainPage,
  MoreItemPage,
  RegisterPage,
  CantfindPage,
  SellitemPage,
} from "./Pages/index.jsx";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "/Shop-Page/", element: <MainPage /> },
      { path: "/Shop-Page/Marketplace/", element: <ItemPage /> },
      { path: "/Shop-Page/Marketplace/:itemID", element: <ItemSubPage /> },
      { path: "/Login/", element: <LogInPage /> },
      { path: "/Register/", element: <RegisterPage /> },
      { path: "/Login-Special/", element: <LogInPageAdmin /> },
      { path: "/Main/", element: <AdminPage /> },
      { path: "/Main/NewItem", element: <AdditemPage /> },
      { path: "/Seller/:sellerid", element: <AdminMainpage /> },
      { path: "/Iteminfo/:itemid", element: <MoreItemPage /> },
      { path: "/Q&A/", element: <SellitemPage /> },
    ],
  },
  { path: "*", element: <CantfindPage /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
/* test change*/
