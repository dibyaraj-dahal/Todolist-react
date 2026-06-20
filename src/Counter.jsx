import React, {useState} from "react";

function Counter() {
    const [name,setName] = useState();
    const [quantity,setQuantity] = useState(2);
   function handleName(e){
    setName(e.target.value);
   }
      function handleQuantity(e){
    setQuantity(e.target.value);
   }
  return (
    <div>
      <input value={name} onChange={handleName}/>
    <p>Name: {name}</p><br/>
    <input  onChange={handleQuantity} type="number" />
    <p>Quantity: {quantity}</p>
    </div>

  );
}
export default Counter;