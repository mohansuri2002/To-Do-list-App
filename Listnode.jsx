import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './Todolist.css';
const Listnode = (Props) => {
    let [line,setLine]=useState(false);
    const cutit=()=>{
         setLine(true);
    }
    const deletedata={
        textDecoration:"line-through",
        color:"red"
    }
    return (
        <div className='list'>
            <span onClick={cutit}><DeleteIcon className="delete_btn" /></span>
            <li style={line?deletedata:{textDecoration:"none"}} className="list_item"> {Props.val}</li>
        </div>
    );
}
export default Listnode;