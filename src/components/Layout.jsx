import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = ({cart}) => {
    return (
        <>
            <Header cart={cart}/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;