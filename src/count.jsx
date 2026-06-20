import React, {useState,useEffect} from "react";
function Count() {
    const [count, setCount] = useState(0);
  
    function handleChanges() {
        setCount(c=>c+1);
    }
     useEffect(() => {
        document.title = `Count: ${count}`;
    },[count]);

return(<div>
    <p>Count: {count}</p>
    <button onClick={handleChanges}>ADD</button></div>
);


}
export default Count;