
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CurdCoffee from './Components/CurdCoffee';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees , setCoffees] = useState(loadedCoffees)

  return (
    <div>
      <h1 className='text-6xl my-16  font-semibold'>Hot Hot Coffee: {coffees.length}</h1>
      <div className='grid grid-cols-2 gap-4 '>
        {
          coffees.map(coffee => <CurdCoffee 
            key={coffee._id} 
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CurdCoffee>)
        }
      </div>
    </div>
  )
}

export default App
