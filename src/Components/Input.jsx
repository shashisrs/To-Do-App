import React, { useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
function Input(props){
    const [task,setTask]=useState('');
    console.log(task);
    // accessing input element
    const inputBox=useRef();
return(
    <div className="flex justify-around p-3 ">
        <input onClick={(e)=>setTask(e.target.value)}type="text" placeholder="Enter data here!" className="w-[90%] p-3 
        border mt-5 border-slate-400 focus:outline-none" ref={inputBox}/>
        <div className="bg-[#e74c3c] w-[3.125rem] h-[3.125rem]] rounded-[50%] flex 
        justify-center mt-5 items-center text-white text-4xl" onClick={()=>{
            props.handler(inputBox.current.value);
            inputBox.current.value="";
        }}>
            <AiOutlinePlus />
        </div>
    </div>
)
}
export default Input;