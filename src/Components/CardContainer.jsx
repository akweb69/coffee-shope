import { useEffect, useState } from "react";
import { RiCupLine } from "react-icons/ri";
import Card from "./Card";
import { Link } from "react-router";

const CardContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/coffee")
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    return (
        <div className="md:w-10/12 w-11/12 mx-auto">
            <div className="text-center">
                <h1 className="text-gray-400">
                    --- Sip & Savor ---
                </h1>
                <h1 className="text-4xl font-bold text-purple-950">
                    Our Popular Products
                </h1>
                <Link to={"/addCoffee"} className="flex items-center justify-center gap-2 py-2 px-5 rounded-lg border w-fit mx-auto my-5 bg-gradient-to-tr from-purple-600 via-violet-500 cursor-pointer transition hover:bg-gradient-to-tl to-violet-700 text-white">
                    Add Coffee <span><RiCupLine />
                    </span>
                </Link>
            </div>
            <div className="md:grid grid-cols-2 gap-10  ">
                {
                    data.map((coffee, idx) => <Card key={idx} coffee={coffee} data1={data} setData={setData} ></Card>)
                }
            </div>
        </div>
    );
};

export default CardContainer;