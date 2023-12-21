import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />
  }
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
