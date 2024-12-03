import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
    const [users, setUsers] = useState([]);




    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    const handleDeleteBtn = (id) => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining)
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });

    }
    console.log(users)
    return (
        <div className="flex space-y-6 flex-col justify-center items-center bg-[rgb(0,0,31)] min-h-screen text-white overflow-x-auto">
            <div className="text-center text-3xl font-bold font-rancho ">
                Total Users : {users?.length < 10 ? "0" + users.length : users.length}
            </div>
            <table className="table w-10/12 mx-auto  bg-[rgb(0,0,37)]">
                <thead>
                    <tr className="bg-[rgb(0,0,66)] text-lg py-2 font-semibold">
                        <th className="px-4 border-purple-950 border text-center text-white  py-2">Name</th>
                        <th className="px-4 border-purple-950 border text-center  text-white py-2">Email</th>
                        <th className="px-4 border-purple-950 border text-center text-white  py-2">Account Create </th>
                        <th className="px-4 border-purple-950 border text-center text-white  py-2">Actions  </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, idx) => <tr key={idx}>
                            <td className="px-4 border-purple-950 border text-center  py-2">{user.userName}</td>
                            <td className="px-4 border-purple-950 border text-center  py-2" >{user.email}</td>
                            <td className="px-4 border-purple-950 border text-center  py-2">{user.createAt}</td>
                            <td className="px-4 border-purple-950 border text-center  py-2">
                                <button className=" btn btn-neutral rounded-full text-white mx-2 hover:bg-orange-800 transition  btn-xs duration-300 hover:border-red-950 ">Edit</button>
                                <button onClick={() => handleDeleteBtn(user._id)} className=" btn btn-error btn-xs rounded-full text-white mx-2 hover:bg-orange-800 transition duration-300 hover:border-red-950 ">X</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;