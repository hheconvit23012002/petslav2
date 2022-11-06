import React from "react";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import ProductListPage from "./pages/ListProductPage/ProductListPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
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
    }
]

export default routes;