import { useContext, useState } from "react";
import { authContext } from "../Auth/AuthContext";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
    const [success, setSuccess] = useState(false);
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    if (success) {
        navigate("/")
            .then(() => {
                setSuccess(false);
            })
    }

    const { signinUser } = useContext(authContext)


    const handleSubmit = (e) => {
        setErr("");
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password)

        signinUser(email, password)
            .then(result => {
                const userinfo = result.user;
                console.log(userinfo)
                setSuccess(true)
            })
            .catch(err => {
                setErr("Invalid Email or Password!")
            })
        e.target.reset();
    }

    return (
        <div className="w-full min-h-screen bg-[rgb(0,0,31)] flex justify-center items-center">
            <div className="bg-[rgb(0,0,51)] rounded-lg shadow-md shadow-purple-800 md:p-20 p-5 py-10 max-w-lg">
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="">
                        <label className="text-white font-semibold" htmlFor="email">Email</label>
                        <input required className="w-full p-2 rounded-lg" type="email" name="email" placeholder="Email" id="" />
                    </div>
                    <div className="mt-4">
                        <label className="text-white font-semibold" htmlFor="password">
                            Password
                        </label>
                        <input required className="w-full p-2 rounded-lg" type="password" name="password" />
                    </div>
                    <div className="text-red-500 text-center mt-4 text-sm">
                        {
                            err
                        }
                    </div>
                    <div className="mt-5 ">
                        <button className="w-full text-center bg-purple-700 rounded-lg p-2 text-white">Signin</button>
                    </div>

                </form>
                <div className="text-white text-sm mt-6 flex justify-between items-center">Don't Have An Acoount : <Link to={"/signup"} className="btn btn-xs btn-neutral">SignUp</Link></div>
            </div>
        </div>
    );
};

export default SignUp;