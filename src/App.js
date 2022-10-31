import React from "react";
import './App.css';
import './base.css';
import Menu from "./components/menu/Menu";
import { Route, Routes } from 'react-router-dom';
import routes from "./routes";
function App() {
    return (
        <div>
            <Menu />
            <Routes>
                {
                    routes.map((item) => {
                        return (
                            <Route key={item.id} path={item.path} element={item.main()} />
                        )
                    })
                }
            </Routes>
        </div>
    )
}

export default App;
