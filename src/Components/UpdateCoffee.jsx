import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const data = useLoaderData();
    const {
        _id,
        name,
        chef,
        supplier,
        details,
        taste,
        category,
        photo,
        price,
        quantity
    } = data;

    const handleSubmit = (e) => {

        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const chef = form.get("chef");
        const supplier = form.get("supplier");
        const details = form.get("details");
        const taste = form.get("taste");
        const category = form.get("category");
        const photo = form.get("photo");
        const price = form.get("price");
        const quantity = form.get("quantity");

        const updatedCoffee = {
            name,
            chef,
            supplier,
            details,
            taste,
            category,
            photo,
            price,
            quantity
        }

        // !

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Coffee Updated Successfully!",
                        icon: "success"
                    });
                }
                e.target.reset();
            })
    }



    return (
        <div>
            <div className="w-full bg-bgAddCoffee bg-center bg-no-repeat bg-cover min-h-screen flex justify-center items-center py-20">
                <form onSubmit={handleSubmit} className="w-9/12 mx-auto bg-base-200 md:py-20 py-4">
                    <h1 className="text-center font-semibold  font-rancho md:text-4xl text-2xl pb-6 underline">Update Coffee: {name}</h1>

                    <div className="md:grid grid-cols-2 w-10/12 mx-auto gap-10 ">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input name="name" type="text" placeholder="Enter Your Coffee Name" defaultValue={name} className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Chef</span>
                            </div>
                            <input name="chef" type="text" placeholder="Enter Coffee Chef" defaultValue={chef} className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Supplier</span>
                            </div>
                            <input name="supplier" type="text" placeholder="Enter Coffee Supplier" defaultValue={supplier} className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Taste</span>
                            </div>
                            <input name="taste" type="text" placeholder="Enter Coffee Taste" defaultValue={taste} className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <input name="category" type="text" placeholder="Enter Coffee Category" defaultValue={category} className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <input name="details" type="text" placeholder="Enter Coffee Details" defaultValue={details} className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input name="price" type="text" placeholder="Enter Coffee Price" defaultValue={price} className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Available Quantity</span>
                            </div>
                            <input name="quantity" type="text" placeholder="Enter Coffee Quantity" defaultValue={quantity} className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full col-span-2 ">
                            <div className="label">
                                <span className="label-text">Photo</span>
                            </div>
                            <input name="photo" type="text" placeholder="Enter Photo URL" defaultValue={photo} className="input input-bordered w-full " />
                        </label>
                        <input type="submit" className="w-full py-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-700 col-span-2 text-white font-semibold font-rancho rounded-lg cursor-pointer hover:bg-gradient-to-l my-5 md:my-0 transition-all" value="Add Coffee" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;