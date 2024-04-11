import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { CartContext } from "../utils/context/CartContext";
import { useContext, useEffect, useState } from "react";
const Layout = () => {
    const { cart } = useContext(CartContext);
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;