import React, { useState } from "react";
import {CgTrash} from "react-icons/cg";
function Item(props) {
  const [done,setDone]=useState(false);
  return <div onClick={()=>setDone(!done)} className=" taskElement p-3 border-b select-none cursor-pointer w-full flex justify-between">
  {/* left part */}
  <div >
  <span className="text-slate-600 text-[0.875rem] pr-3">
    {props.time}
  </span>
  <span className={ `${done===true?'line-through':''} text-[1.25rem]`}>
   {props.task}

  </span>
  </div>
  {/* right part */}
  <div onClick={()=>props.remover(props.id)}>
<CgTrash className="text-[#e74c3c] text-4xl" />
  </div>
</div>
}
export default Item;
