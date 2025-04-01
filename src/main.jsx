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
} from "./Pages/index.jsx";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "/Marketplace", element: <ItemPage /> },
      { path: "/Marketplace/:itemID", element: <ItemSubPage /> },
      { path: "/Login/", element: <LogInPage /> },
      { path: "/Login-Special/", element: <LogInPageAdmin /> },
      { path: "/Main", element: <AdminPage /> },
      { path: "/Main/NewItem", element: <AdditemPage /> },
      { path: "/Seller/:sellerid", element: <AdminMainpage /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
/* test change*/
