import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CurdCoffee = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, available, supplier, taste, category, details, photo } = coffee;

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('delete conformed');
        //
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining)
            }
          })
      }
    })

  }

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img className="" src={photo} alt="Movie" /></figure>
      <div className=" flex justify-between w-full">
        <div className="space-y-4 ml-4 text-left">
          <h2 className="card-title">Name: {name}</h2>
          <p>Price: {available}$</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>
          <p>Details: {details}</p>
        </div>
        <div className="card-actions justify-end">
          <div>
            <div className="btn-group btn-group-vertical mt-2 space-y-4">
              <button className="btn btn-success">VIEW</button>
              <Link to={`updateCoffee/${_id}`}>
                <button className="btn btn-warning">EDIT</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-info">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurdCoffee;