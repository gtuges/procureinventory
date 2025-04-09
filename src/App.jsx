import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./assets/utils/HomePage";
import LoginPage from "./assets/utils/LoginPage";
import UnknownPage from "./assets/utils/UnknownPage";
import Users from "./assets/pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/users", element: <Users /> },
  { path: "*", element: <UnknownPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
