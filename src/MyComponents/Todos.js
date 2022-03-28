import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => { 

    let myStyle = {
        minHeight:"70vh",
        margin:"40px auto"
    }

    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">TODO List</h3>
            
            {
            //checking if there are any elements in the todos array and then deciding the action using ternary operator
            (props.todos.length === 0) ? "No todos to display" : 
            //this function processes each method of the array. this is an example of HIGER ORDER JAVASCRIPT FUNCTIONS.
            props.todos.map((todo)=>{
                return(<TodoItem todo = {todo}  key={todo.sno}  onDelete={props.onDelete}/>)
            })
            }
            
        </div>
    )
}
