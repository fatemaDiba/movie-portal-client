import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AllMovies from "../Pages/AllMovies";
import Root from "../layouts/Root";
import AddMovie from "../privateRoutes/AddMovie";
import PrivateReg from "../privateRoutes/Private/PrivateReg";
import PrivateRoute from "../privateRoutes/Private/PrivateRoute";
import MovieDetails from "../Pages/Details/MovieDetails";
import UpdateMovie from "../privateRoutes/UpdateMovie";
import Reviews from "../Pages/Home/Reviews";
import PrivacyPolicy from "../footerPages/PrivacyPolicy";
import Accessibility from "../footerPages/Accessibility";
import Cookies from "../footerPages/Cookies";
import About from "../footerPages/About";
import Blogs from "../footerPages/Blogs";
import MyFav from "../privateRoutes/favItems/MyFav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://movie-protal-server.vercel.app/featured-movies"),
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
        loader: () =>
          fetch("https://movie-protal-server.vercel.app/all-movies"),
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
          fetch(
            `https://movie-protal-server.vercel.app/all-movies/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateMovie></UpdateMovie>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://movie-protal-server.vercel.app/all-movies/${params.id}`
          ),
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/accessibility",
        element: <Accessibility></Accessibility>,
      },
      {
        path: "/cookies",
        element: <Cookies></Cookies>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
