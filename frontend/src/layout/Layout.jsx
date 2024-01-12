import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CategoriesBar from "./CategoriesBar/CategoriesBar";

const Layout = () => {
    return (
        <>
            <Header />
            <CategoriesBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;