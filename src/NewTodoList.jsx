import React, { useState } from "react";
function NewTodoList() {
    const[tasks,setTasks]=useState(["EAT","SLEEP","CODE"]);
    const[newTask,setNewTask]=useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);}
        function addTask(){
            if(newTask.trim()==="") return;
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
        function deleteTask(index){
            const updateTasks= 
            tasks.filter((_,i)=>i!== index);
            setTasks(updateTasks);
        }
        function moveTaskUp(index){
            const updatedTasks=[...tasks];
            if(index>0){
                [updatedTasks[index],updatedTasks[index-1]]=
                [updatedTasks[index-1],updatedTasks[index]];
                setTasks(updatedTasks);
            }

        }
        function moveTaskDown(index){
            const updatedTasks=[...tasks];
            if(index<tasks.length-1){
                [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
                setTasks(updatedTasks);
            }}
    return(<div className=" min-h-screen m-top bg-zinc-900 flex justify-center items-center
" >
<div className="bg-zinc-800 p-10 rounded-lg shadow-lg">
    <h1 className="text-5xl font-bold  text-white "> To-Do List</h1>
    <input  className=" border-2 bg-amber-50 mt-4 p-1 font-bold" type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a new task"/>
    <button className="border-2 mt-4 rounded-sm p-1 bg- bg-green-200 font-bold  cursor-pointer" onClick={addTask}>ADD</button>
    <ol className="text-1.5xl font-bold text-white mt-4">
        {tasks.map((task,index)=>(
            <li key={index} >{task}
            <button  className="mr-1.5 ml-2 border-1 bg-amber-50 text-white bg-red-400 rounded-lg  cursor-pointer "onClick={() => deleteTask(index)}>
            <p className="text-0.5xl ">  DELETE </p>
            </button>

            <button  className="mr-1.5 mt-1.5 border-1 bg-amber-50 text-black rounded-lg cursor-pointer" onClick={() => moveTaskUp(index)}>
              👆
            </button>

            <button  className="mr-1.5 border-1 bg-amber-50 text-black rounded-lg cursor-pointer" onClick={() => moveTaskDown(index)}>
              👇
            </button> </li>))}
            </ol>
</div></div>

    );
}
export default NewTodoList;