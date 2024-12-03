import { useContext, useState } from "react";
import { authContext } from "../Auth/AuthContext";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const SignUp = () => {

  const { createUser } = useContext(authContext)
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  if (success) {
    navigate("/")
      .then(
        setSuccess(false)
      )

  }

  const handleSubmit = (e) => {

    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const userName = form.get("userName");
    if (password.length < 6) {
      {
        setErr("Password must be Six Character!");
        return;
      }

    }

    // console.log(email, password)
    createUser(email, password)
      .then(res => {
        console.log(res)
        const createAt = res.user.metadata.creationTime;
        const lastSignInTime = res.user.metadata.lastSignInTime;
        const newUser = { userName, email, createAt, lastSignInTime }
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(newUser)

        })
          .then(res => res.json())
          .then(data => {
            if (data.acknowledged) {
              Swal.fire({
                title: "Congratulation!?",
                text: "Your SignUp Is Success!",
                icon: "success"
              })
                .then(result => {
                  if (result.isConfirmed) {
                    setSuccess(true)
                  }
                })

            }
          })
      })
      .catch(err => {
        setErr("Your Emial ALLready Use")
      })
    setErr('')
    e.target.reset();
  }

  return (
    <div className="w-full min-h-screen bg-[rgb(0,0,31)] flex justify-center items-center">
      <div className="bg-[rgb(0,0,51)] rounded-lg shadow-md shadow-purple-800 md:p-20 p-5 py-10 max-w-lg">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="text-white font-semibold" htmlFor="userName">User Name</label>
            <input required className="w-full p-2 rounded-lg" type="text" name="userName" placeholder="User Name" id="" />
          </div>
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
          <div className="text-sm text-red-500 text-center mt-4">{err}</div>
          <div className="mt-5 ">
            <button className="w-full text-center bg-purple-700 rounded-lg p-2 text-white">SignUp</button>
          </div>
        </form>
        <div className="text-white text-sm mt-6 flex justify-between items-center">Allready Have An Acoount : <Link to={"/signin"} className="btn btn-xs btn-neutral">SignIn</Link></div>
      </div>
    </div>
  );
};

export default SignUp;