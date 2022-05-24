import React from "react";
import { useRoutes } from "react-router-dom";
import { RequireAuth } from "./Pages";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import AddReview from "./Pages/Dashboard/Users/AddReview";
import MyOrders from "./Pages/Dashboard/Users/MyOrders";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Purchase from "./Pages/Purchase/Purchase";

const Router = () => {
    return useRoutes([
        {
            path: "/dashboard",
            element: (
                <RequireAuth>
                    <Dashboard />
                </RequireAuth>
            ),
            children: [
                { path: "myorders", element: <MyOrders /> },
                { path: "myprofile", element: <MyProfile /> },
                { path: "addreview", element: <AddReview /> },
            ],
        },
        {
            path: "/",
            element: <Home />,
        },
        { path: "login", element: <Login /> },
        { path: "signUp", element: <SignUp /> },
        {
            path: "purchase/:purchaseId",
            element: (
                <RequireAuth>
                    <Purchase />
                </RequireAuth>
            ),
        },
        { path: "blog", element: <Blog /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "*", element: <NotFound /> },
    ]);
};

export default Router;
