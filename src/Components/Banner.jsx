import { Link } from "react-router";
import "../Components/Style.css";
import bannerImg from "../assets/images/more/2.png"
const Banner = () => {
    return (
        <div className="bg-bgBanner bg-cover bg-no-repeat bg-accent height flex justify-center items-center">
            <div className="md:w-10/12 p-5 md:p-0 mx-auto md:grid grid-cols-2  items-center">
                <div className="">
                    <img className="w-3/4" src={bannerImg} alt="" />
                </div>
                <div className="">
                    <h1 className="text-4xl font-bold text-white py-3  font-rancho">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="text-sm font-rancho mb-5 text-purple-200">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <Link to={"/signin"} className="py-2 px-7 rounded-lg text-white font-semibold font-poppins bg-gradient-to-r from-purple-500 via-pink-500 to-blue-600 w-fit my-4">SignIn</Link>
                </div>
            </div>

        </div>
    );
};

export default Banner;