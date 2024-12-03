import { FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Card = ({ coffee, data1, setData }) => {
    const { _id, name, chef, price, photo } = coffee;
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = data1.filter(cof => cof._id !== _id)
                            setData(remaining);
                        }

                    })
            }
        });
    }
    return (
        <div>
            <div className=" bg-pink-50 rounded-lg grid grid-cols-12 items-center mb-5 md:mb-0 ">
                <div className="p-2 col-span-4">
                    <img className="w-full md:h-[200px]" src={photo} alt="" />
                </div>
                <div className="col-span-6">
                    <h1 className=" text-sm md:text-lg font-semibold text-purple-950">Name: {name}</h1>
                    <h1 className=" text-sm md:text-lg font-semibold text-purple-950">Chef: {chef}</h1>
                    <h1 className=" text-sm md:text-lg font-semibold text-purple-950">Price: {price} Taka Only</h1>
                </div>
                <div className="col-span-2 flex flex-col justify-center items-center space-y-2">
                    <div className="py-2 px-3 cursor-pointer rounded-lg bg-yellow-600 hover:bg-yellow-400"><FaRegEye className="text-white" />
                    </div>
                    <Link to={`/updateCoffee/${_id}`} className="py-2 px-3 cursor-pointer rounded-lg bg-gray-800 hover:bg-gray-600">
                        <GoPencil className="text-white" />
                    </Link>
                    <div onClick={() => handleDelete(_id)} className="py-2 px-3 cursor-pointer rounded-lg bg-red-600 hover:bg-red-400"><MdDelete className="text-white" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;