import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/HomeLayout";
import HomePage from "../Components/HomePage";
import AddCooffee from "../Components/AddCooffee";
import UpdateCoffee from "../Components/UpdateCoffee";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Users from "../Components/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [{
            path: "/",
            element: <HomePage></HomePage>
        },
        {
            path: "/addCoffee",
            element: <AddCooffee></AddCooffee>
        },
        {
            path: '/updateCoffee/:id',
            element: <UpdateCoffee></UpdateCoffee>,
            loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
        },
        {
            path: "/signin",
            element: <SignIn></SignIn>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/users-data",
            element: <Users></Users>
        }


        ]
    }
])

export default router;