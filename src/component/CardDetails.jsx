import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CardDetails = ({ item, coffees, setcoffees }) => {
    const { Category, Details, Suplier, Photo,
        name, quantity, taste, _id } = item



    const handledelete = id => {
        console.log(id)
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
                fetch(`http://localhost:5000/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            const remaining = coffees.filter(cof => cof._id !== id);
                            setcoffees(remaining);
                        }


                    })

            }
        });


    }

    return (

        <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src={Photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{name}</span>
                <h2 className="text-xl font-semibold tracking-wide">{quantity}</h2>
                <h2 className="text-xl font-semibold tracking-wide">{taste}</h2>
                <h2 className="text-xl font-semibold tracking-wide">{Category}</h2>
            </div>
            <p className="dark:text-gray-800">{Details}</p>
            <button onClick={() => handledelete(_id)} className="btn btn-secondary mx-5 mt-5 text-white">Delete</button>

            <Link to={`/updateinfo/${_id}`}>
                <button className="btn btn-primary text-white mt-5">Update</button>
            </Link>

        </div>

    );
};

export default CardDetails;