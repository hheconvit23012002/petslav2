import React from "react";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import ProductListPage from "./pages/ListProductPage/ProductListPage";
import LoginPage from "./pages/LoginPage/LoginPage";
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
    }
]

export default routes;