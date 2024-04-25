import { useLoaderData } from "react-router-dom";
import CardDetails from "./CardDetails";
import { useState } from "react";


const UpdateCard = () => {

    const teainfo = useLoaderData()
    const [coffees, setcoffees] = useState(teainfo)
    console.log(teainfo)
    return (
        <div className="container mx-auto">
            <h1 className="text-center">{teainfo.length}</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    coffees.map(item => <CardDetails item={item} coffees={coffees} setcoffees={setcoffees}></CardDetails>)
                }
            </div>
        </div>
    );
};

export default UpdateCard;