import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import "./Input.css"
import {saveTodos} from "../features/todoSlice"


function Input() {
    const [inp,setInp] = useState("");
    const dispatch = useDispatch()

    const addTodo = () => {
        dispatch(saveTodos({
            item: inp,
            done: false,
            id: Date.now()
        }))
        setInp("")
    }
    return (
        <div className="input">
            <input type="text" value={inp} onChange={(e)=>setInp(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default Input
