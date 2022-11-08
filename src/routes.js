import React from "react";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import ProductListPage from "./pages/ListProductPage/ProductListPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import SignupPage from "./pages/SignupPage/SignupPage";
const routes = [
    {
        id:1,
        path: "*",
        main: () => <NotFoundPage />
    },
    {
        id:2,
        path:"",
        main: () => <ProductListPage />
    },
    {
        id:3,
        path:"login",
        main: () => <LoginPage />
    },
    {
        id:4,
        path:"product=:id",
        main: () => <ProductDetail />
    },
    {
        id : 5,
        path:"signup",
        main: () => <SignupPage />
    }
]

export default routes;