import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Listnode from './Listnode';
import './Todolist.css';
const TodoList = () => {
    const [val, setval] = useState();
    const [Itemval, Setitemval] = useState([]);
    const content = (event) => {
        setval(event.target.value);
    }
    const Additem = () => {
        setval('');
        let word = 0;
        for (let i = 0; i < val.length; i++) {
            if (val[i] !== ' ') word++;
        }
        if (word === 0) return;
        Setitemval((oldValue) => {
            return [...oldValue, val];
        });

    }
    
    return (
        <>
            <div className="main_div">
                <div className="content_div">
                    <br />
                    <h1>TODO LIST</h1>
                    <br />
                    <input type='text' placeholder='Add an item' onChange={content} value={val}></input>

                    <button className="add_btn" onClick={Additem}>
                        <AddIcon /></button>
                    <br />
                    <ol>
                        {Itemval.map((value,index) => {
                            return <Listnode key={index} val={value}/>
                        }
                        )}

                    </ol>
                </div>
            </div>
        </>
    );
}
export default TodoList;