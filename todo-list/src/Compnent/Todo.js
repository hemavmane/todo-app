import React, { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState([]);
 const [items, setItems]=useState("");
  const handleadd = (e) => {
    setTask([...task,items])
    setItems("")
  };

  const handledelete = () => {};

  const handleedit = () => {};
  return (
    <>
      <input  type="text" onChange={(e)=>setItems(e.target.value)} defaultValue={task} />
      <button onClick={handleadd}>Add task</button>
      {task.map(tasks => (
        //  console.log(task)
        <div key={tasks}>
          <input  type="text" defaultValue={tasks} />
          <button onClick={handledelete}>Delete Task</button>
          <button onClick={handleedit}>Edit Task</button>
        </div>
      ))} 
    </>
  );
}
