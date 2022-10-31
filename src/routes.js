import React from "react";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import ProductListPage from "./pages/ListProductPage/ProductListPage";
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
    }
]

export default routes;