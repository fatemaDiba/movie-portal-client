import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AllMovies from "../Pages/AllMovies";
import Root from "../layouts/Root";
import MyFav from "../privateRoutes/MyFav";
import AddMovie from "../privateRoutes/AddMovie";
import MyProfile from "../privateRoutes/MyProfile";
import PrivateReg from "../privateRoutes/Private/PrivateReg";
import PrivateRoute from "../privateRoutes/Private/PrivateRoute";
import MovieDetails from "../Pages/Details/MovieDetails";

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
        element: (
          <PrivateReg>
            <Register></Register>
          </PrivateReg>
        ),
      },
      {
        path: "/all-movies",
        element: <AllMovies></AllMovies>,
      },
      {
        path: "/add-movie",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-favorite",
        element: (
          <PrivateRoute>
            <MyFav></MyFav>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/movie-details",
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
