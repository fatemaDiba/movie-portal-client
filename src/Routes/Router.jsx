import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AllMovies from "../Pages/AllMovies";
import Root from "../layouts/Root";
import MyFav from "../privateRoutes/MyFav";
import AddMovie from "../privateRoutes/AddMovie";
import PrivateReg from "../privateRoutes/Private/PrivateReg";
import PrivateRoute from "../privateRoutes/Private/PrivateRoute";
import MovieDetails from "../Pages/Details/MovieDetails";
import UpdateMovie from "../privateRoutes/UpdateMovie";
import Reviews from "../Pages/Home/Reviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/featured-movies"),
      },
      {
        path: "/login",
        element: (
          <PrivateReg>
            <LogIn></LogIn>
          </PrivateReg>
        ),
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
        loader: () => fetch("http://localhost:5000/all-movies"),
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
        path: "/my-favorites",
        element: (
          <PrivateRoute>
            <MyFav></MyFav>
          </PrivateRoute>
        ),
      },
      {
        path: "/movie-details/:id",
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-movies/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateMovie></UpdateMovie>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-movies/${params.id}`),
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
    ],
  },
]);

export default router;
