import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/Users/MyOrders";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

const Router = () => {
    return useRoutes([
        {
            path: "/dashboard",
            element: <Dashboard />,
            children: [{ path: "myorders", element: <MyOrders /> }],
        },
        {
            path: "/",
            element: <Home />,
        },
        { path: "login", element: <Login /> },
        { path: "signUp", element: <SignUp /> },
        { path: "blog", element: <Blog /> },
        { path: "*", element: <NotFound /> },
    ]);
};

export default Router;
