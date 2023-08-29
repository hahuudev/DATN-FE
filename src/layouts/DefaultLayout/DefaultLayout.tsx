import { Outlet } from "react-router-dom";
import  { NavbarWithMegaMenu } from "./Header";
import Footer from "./Footer";

const DefaultLayout = () => {
    return (
        <>
          
            <NavbarWithMegaMenu/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default DefaultLayout;
