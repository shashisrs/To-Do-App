import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Box from './Components/Box';
function App() {
  const[taskList,setTaskList]=useState([]);
  const handleInputBox=(task)=>{
setTaskList(
  [
    ...taskList,
    {
      task,
      time:new Date().toLocaleTimeString()
    }
  ]
);
  }
  // filtering task from taskList based on click on delete icon by using id 
  const removeHandler=(id)=>{
const newTaskList=taskList.filter(
  (d,index)=>{
    if(index !==id){
      return true;
    }
    else{
      return false;
    }
  }
)
// removing task from tasklist and setting the remaining tasks to tasklist
setTaskList(newTaskList);
  }
 
  return (
    <div className="bg-black h-screen p-3">
    <h1 className='text-[#e74c3c] text-center p-9 text-6xl font-bold tracking-wider'>To-Do App</h1>
      <div className='max-w-[46.875rem] bg-white max-h-[34.375rem] mx-auto shadow-2xl rounded overflow-y-scroll'>
        <Input handler={handleInputBox}/>
        <Box tasks={taskList} remover={removeHandler}/>
      </div>
    </div>
  );
}

export default App;
