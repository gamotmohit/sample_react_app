import { React } from "react";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FormPage from "./Component/Formpage";
import ListPage from "./Component/Listpage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FormPage />
    },
    {
      path: "/list",
      element: <ListPage />
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
