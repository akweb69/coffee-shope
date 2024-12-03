import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const AddCooffee = () => {

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

        const newCoffee = {
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
        console.log(newCoffee)
        // ! send data to server

        fetch("http://localhost:5000/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Successfully Add The Coffee!",
                        icon: "success"
                    });
                }
                e.target.reset();
            })
    }
    return (
        <div className="w-full bg-bgAddCoffee bg-center bg-no-repeat bg-cover min-h-screen flex justify-center items-center py-20">
            <form onSubmit={handleSubmit} className="w-9/12 mx-auto bg-base-200 md:py-20 py-4">
                <h1 className="text-center font-semibold  font-rancho md:text-4xl text-2xl ">Add New Coffee</h1>
                <div className="md:w-2/3 mx-auto px-4 md:px-0">
                    <p className="text-sm font-poppins text-center py-4  ">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <div className="md:grid grid-cols-2 w-10/12 mx-auto gap-10 ">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input name="name" type="text" placeholder="Enter Your Coffee Name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Chef</span>
                        </div>
                        <input name="chef" type="text" placeholder="Enter Coffee Chef" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Supplier</span>
                        </div>
                        <input name="supplier" type="text" placeholder="Enter Coffee Supplier" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Taste</span>
                        </div>
                        <input name="taste" type="text" placeholder="Enter Coffee Taste" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input name="category" type="text" placeholder="Enter Coffee Category" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input name="details" type="text" placeholder="Enter Coffee Details" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Price</span>
                        </div>
                        <input name="price" type="text" placeholder="Enter Coffee Price" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Available Quantity</span>
                        </div>
                        <input name="quantity" type="text" placeholder="Enter Coffee Quantity" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full col-span-2 ">
                        <div className="label">
                            <span className="label-text">Photo</span>
                        </div>
                        <input name="photo" type="text" placeholder="Enter Photo URL" className="input input-bordered w-full " />
                    </label>
                    <input type="submit" className="w-full py-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-700 col-span-2 text-white font-semibold font-rancho rounded-lg cursor-pointer hover:bg-gradient-to-l my-5 md:my-0 transition-all" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default AddCooffee;