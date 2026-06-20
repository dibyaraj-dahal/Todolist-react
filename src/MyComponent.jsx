import react,{useState} from "react";

function MyComponent(){
    
        const [car,setCar] =useState({
            year:2020,
            model:"Mustang",
            make:"Ford"
        });
        const handleYear=(e)=>{
            setCar( c=>({...c,year:e.target.value}))
        }
            const handleModel=(e)=>{
            setCar({...car,model:e.target.value})
        }
            const handleMake=(e)=>{
            setCar({...car,make:e.target.value})
        }

    return(<div>
        <p>Your Favourite car is: {car.year} {car.model} {car.make}</p>

        <input type="number" value={car.year} onChange={handleYear}/><br></br>
        <input type= "text"value={car.model} onChange={handleModel}/><br></br>
        <input type="text" value={car.make} onChange={handleMake}/><br></br>
        </div>
    )
}

export default MyComponent;