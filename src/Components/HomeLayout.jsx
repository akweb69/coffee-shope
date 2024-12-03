import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <section className="min-h-screen">
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;