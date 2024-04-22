const AddNewCoffee = () => {

  const handleAddCoffe = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const coffee = {name, chef,category, supplier, photo, taste, details}
  
    fetch('http://localhost:5000/coffees', {
    method:"POST",
    headers:{
      "content-type" : "application/json"
    },
    body:JSON.stringify(coffee)
    })
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
    })
  }
return (
<div className="px-32">
  <h1 className="text-5xl font-extrabold mb-5">Add a Coffee</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veritatis debitis, earum tempora id
    incidunt alias, recusandae sint non, harum laudantium. Expedita velit quis distinctio optio necessitatibus, ipsa
    iste sed architecto magnam provident quos, quibusdam, nisi at saepe soluta esse! Sequi consectetur atque aliquam
    exercitationem!</p>

  <form 
  onSubmit={handleAddCoffe}
  className="mt-10 space-y-4">
    {/* add item row */}
    <div className="flex gap-4 text-start">
      <div className="w-1/2">
        <label className="font-bold text-2xl">Coffee Name</label>
        <input type="text" placeholder="Enter Coffee Name" name="name" className="input input-bordered w-full" />
      </div>
      <div className="w-1/2">
        <label className="font-bold text-2xl">Chef</label>
        <input type="text" placeholder="Enter Chef Name" name="chef" className="input input-bordered w-full" />
      </div>
    </div>
    {/* add item row */}
    <div className="flex gap-4 text-start">
      <div className="w-1/2">
        <label className="font-bold text-2xl">Supplier</label>
        <input type="text" placeholder="Enter Supplier Name" name="supplier" className="input input-bordered w-full" />
      </div>
      <div className="w-1/2">
        <label className="font-bold text-2xl">Taste</label>
        <input type="text" placeholder="Enter Taste" name="taste" className="input input-bordered w-full" />
      </div>
    </div>
    {/* add item row */}
    <div className="flex gap-4 text-start">
      <div className="w-1/2">
        <label className="font-bold text-2xl">Category</label>
        <input type="text" placeholder="Enter Coffee Category" name="category" className="input input-bordered w-full" />
      </div>
      <div className="w-1/2">
        <label className="font-bold text-2xl">Details</label>
        <input type="text" placeholder="Enter coffee details" name="details" className="input input-bordered w-full" />
      </div>
    </div>
    <div className="w-full text-start">
        <label className="font-bold text-2xl">PhotoURL</label>
        <input type="text" placeholder="Enter photoURL" name="photo" className="input input-bordered w-full" />
      </div>
    <input type="submit" value="Add Item" className="btn btn-block bg-purple-400 " />
  </form>
</div>
);
};

export default AddNewCoffee;