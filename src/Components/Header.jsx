import { Link, NavLink } from "react-router";
import logo from "../assets/images/more/logo1.png"
const Header = () => {
    return (
        <div className={` w-full flex justify-center items-center bg-bg11 bg-no-repeat bg-center bg-cover`} >
            <div className="w-11/12 mx-auto flex justify-between items-center py-2">
                <div className="flex justify-center items-center space-x-2">
                    <img className="size-12" src={logo} alt="" />
                    <Link to={"/"} className=" text-xl md:text-3xl italic font-rancho text-white">Espresso Emporium</Link>
                </div>
                <div className="">
                    <NavLink className="btn btn-secondary outline-none btn-sm mx-2" to={"/users-data"}>Users Data</NavLink>
                    <NavLink className="btn btn-secondary outline-none btn-sm mx-2" to={"/signin"}>SignIn</NavLink>
                </div>
            </div>

        </div >
    );
};

export default Header;