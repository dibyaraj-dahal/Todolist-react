import React, { useState } from "react";

function MyList() {
  const [foods, setFoods] = useState([
    "Pizza",
    "Burger",
    "Pasta",
    "Sushi",
  ]);
  function handleAddFood() {
const newFood= document.getElementById("foodInput").value;
document.getElementById("foodInput").value="";
setFoods( f=>[...f, newFood]);}
function handleRemoveList(index){
    setFoods(foods.filter((_,i)=>i!==index));
}
  return (
    <div>
      <h1>My List</h1>

      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={()=>handleRemoveList(index)}>{food}</li>
        ))}
      </ul>
      <input type="text"  id="foodInput" placeholder="Add a food" />
      <button onClick={handleAddFood} >Add</button>

    </div>
  );
}

export default MyList;