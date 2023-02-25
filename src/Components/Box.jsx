import React from 'react';
import Item from './Item';
function Box(props){
    const tasks=props.tasks.map(
       (singleTask,indexNumber)=><Item remover={props.remover} key={indexNumber} id={indexNumber} task={singleTask.task} time={singleTask.time} />
    );
    console.log(tasks);
    return(
<div className='p-3'>
{tasks}

</div>
    )
}
export default Box;