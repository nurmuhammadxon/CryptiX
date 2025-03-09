import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import MainLayouts from "./layouts/MainLayouts";

// Pages
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <Login /> },
      { path: 'register', element: <Register /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
