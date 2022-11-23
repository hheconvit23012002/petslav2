import React from "react";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import ProductListPage from "./pages/ListProductPage/ProductListPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import SignupPage from "./pages/SignupPage/SignupPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./components/homePage/homePage";
import Toast from "./components/toast/toast";
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
    },
    {
        id: 6,
        path:"account",
        main: () => <AccountPage />
    },
    {
        id:7,
        path:"cart",
        main: () => <CartPage/>
    },
    {
        id:8,
        path:"receiver-info",
        main: () => <CartPage/>
    },
    {
        id:9,
        path:"HomePage",
        main: () => <HomePage/>
    }
]

export default routes;