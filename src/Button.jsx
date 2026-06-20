function Button(){
const handleClick=(e)=>e.target.textContent="Clicked";
return(
   
      
    <button className="btn" onDoubleClick={handleClick}>Click Me</button>
);
     }
export default Button