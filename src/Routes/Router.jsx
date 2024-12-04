import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AllMovies from "../Pages/AllMovies";
import Root from "../layouts/Root";
import MyFav from "../privateRoutes/MyFav";
import AddMovie from "../privateRoutes/AddMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-movies",
        element: <AllMovies></AllMovies>,
      },
      {
        path: "/add-movie",
        element: <AddMovie></AddMovie>,
      },
      {
        path: "/my-favorite",
        element: <MyFav></MyFav>,
      },
    ],
  },
]);

export default router;
