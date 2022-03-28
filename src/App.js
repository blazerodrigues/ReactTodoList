
import './App.css';

//importing the header component that we created in MyComponents folder
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
//importing a kind of STATE HOOK ... Here we are using "useState" state hook. It is used to render variable changes to the front end.
//useEffect is used to run one code after another is completed... kinda
import React, { useState, useEffect } from 'react';
//importing react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos")); //converts JSON to JavaScript-object
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    //correct way of deleting in ReactJS...
    setTodos(
      todos.filter(
        (e) => {
          return e !== todo;
        }
      )
    );

    localStorage.setItem("todos", JSON.stringify(todos));

  }


  const addTodo = (title, desc) => {
    console.log("I am adding this Todo:- ", title, desc);

    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1; //for new todo's serial number
    }

    const myTodo = { // creating new todo and setting the values
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]); //updating (changing) the todos array 
    console.log(myTodo);


  }


  const [todos, setTodos] = useState(initTodo);

  //when there is any change in the [todos] array, useEffect will then call the arrow callback function to save the todos array in localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (

    <>
      <Router>
        <Header title="Blaze's TODO List"/>

        <Switch>
          <Route exact path="/" render={
            () => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              )
            }
          }>
          </Route>
        </Switch>


        <Footer />
      </Router>
    </>

  );
}

export default App;
