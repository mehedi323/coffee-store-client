import Swal from 'sweetalert2'



const AddCoffee = () => {

  const handleAddCoffee = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const available = form.available.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee ={name, available, supplier, taste, category, details, photo};
    console.log(newCoffee);

    fetch('http://localhost:5000/coffee',{
      method:'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })

  }
  return (
    <div className="bg-[#F4F3F0] p-20 rounded-xl">
      <h2 className="text-3xl font-extrabold text-purple-500">Add a Coffee</h2>
      <p className="text-xl text-gray-500">
        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleAddCoffee} className="  ">
        {/* form name and chef row */}
        <div className="md:flex ">
          <div className="form-control md:w-1/2 p-2">
            <label className="label ">
              <span className="label-text text-2xl text-gray-700">Name</span>
            </label>
            <label className="input-group ">
              <input type="text" placeholder="Enter coffee Name" name="name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 p-2">
            <label className="label">
              <span className="label-text text-2xl text-gray-700">Available Quantity</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Enter coffee quantity" name="available" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        {/* form supplier and taste row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 p-2">
            <label className="label">
              <span className="label-text text-2xl text-gray-700">Supplier</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Enter coffee supplier" name="supplier" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 p-2">
            <label className="label">
              <span className="label-text text-2xl text-gray-700">Taste</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Enter coffee taste" name="taste" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        {/* form category and details row */}
        <div className="md:flex ">
          <div className="form-control md:w-1/2 p-2">
            <label className="label">
              <span className="label-text text-2xl text-gray-700 ">Category</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Enter coffee category" name="category" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 p-2">
            <label className="label">
              <span className="label-text text-2xl text-gray-700">Details</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Enter coffee details" name="details" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        {/* form photo url row */}
        <div className="flex">
          <div className="form-control w-full text-center">
            <label className="label">
              <span className="label-text text-2xl text-gray-700">Photo</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Enter photo URL" name="photo" className="input input-bordered w-full" />
            </label>
          </div>
        </div> 
        <input type="submit" value="Add Coffee" className="btn btn-block mt-6 text-white bg-purple-500 border-none" />
      </form>
    </div>
  );
};

export default AddCoffee;