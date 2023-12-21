import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TwitterComponent from "./components/TwitterComponent";

const router = createHashRouter([
  {
    path: "/",
    element: <TwitterComponent />
  }
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
