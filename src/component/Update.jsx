import { useLoaderData } from "react-router-dom";



const Update = () => {
    const coffee = useLoaderData()
    console.log(coffee)
    const { Category, Details, Suplier, Photo,
        name, quantity, taste, _id } = coffee


    const handleaddCoffee = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const quantity = form.quantity.value;
        const Suplier = form.Suplier.value;
        const Taste = form.taste.value;
        const Category = form.Category.value;
        const Details = form.Details.value;
        const Photo = form.Photo.value;
        const newCoffee = { name, quantity, Suplier, Taste, Category, Details, Photo }
        console.log(newCoffee)

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'user added succeesfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (

        <section className="p-10 dark:bg-gray-100 dark:text-gray-900 shadow-xl">
            <form onSubmit={handleaddCoffee} className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className=" w-full">
                                <div className="label">
                                    <span className="label-text"> coffee Name</span>

                                </div>
                                <input type="text" name="name" defaultValue={name} placeholder=" Coffee Name" className="input input-bordered w-full " />

                            </label>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">    Available quantity</span>

                                </div>
                                <input type="text" name="quantity" defaultValue={quantity} placeholder="    Available quantity" className="input input-bordered w-full " />

                            </label>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">       Suplier</span>

                                </div>
                                <input type="text" name="Suplier" defaultValue={Suplier} placeholder=" Suplier Name" className="input input-bordered w-full " />

                            </label>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">   Taste     </span>

                                </div>
                                <input type="text" name="taste" defaultValue={taste} placeholder="     Taste" className="input input-bordered w-full " />

                            </label>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">   Category    </span>

                                </div>
                                <input type="text" name="Category" defaultValue={Category} placeholder="   Category" className="input input-bordered w-full " />

                            </label>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">  Details  </span>

                                </div>
                                <input type="text" name="Details" defaultValue={Details} placeholder="  Details" className="input input-bordered w-full " />

                            </label>
                        </div>
                        <div className="col-span-full">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text"> Photo url </span>

                                </div>
                                <input type="url" name="Photo" defaultValue={Photo} placeholder="  Photo url" className="input input-bordered w-full " />

                            </label>
                        </div>
                        <div className="col-span-full">
                            <input type="submit" value="update coffee" className="btn btn-block bg-orange-500" />
                        </div>



                    </div>
                </fieldset>

            </form>
        </section>

    );
};

export default Update;