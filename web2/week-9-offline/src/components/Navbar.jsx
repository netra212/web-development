import React, { useState } from 'react'

const Navbar = () => {

    const [count, setCount] = useState(0);

    // const value = useState(0);
    // const count = value[0];
    // const setCount = value[1];

    const [todos, setTodos] = useState([{
        title: "Go to gym",
        description: "Hit the gym regularly",
        done: true
    }]);

    function onClickHandler() {
        setCount(count + 1);
    }

    // Virtual DOM, Diffing, Bulk updates, Reconcilliation.
    // Context api. 
    // prop drilling.

    // function addTodo() {
    //     let newArray = [];
    //     for (let i = 0; i < todos.length; i++) {
    //         newArray.push(todos[i]);
    //     }
    //     newArray.push({
    //         title: document.getElementById("title").value,
    //         description: document.getElementById("description").value,
    //         done: true
    //     })
    //     setTodos(newArray);
    // }

    function addTodo() {
        setTodos([...newArray, {
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            done: true
        }])
    }

    return (
        <div>
            <button onClick={onClickHandler}></button>

            <input type='text' placeholder='Title'></input>
            <input type='text' placeholder='Description'></input>
            <br>
                <button onClick={addTodo}>Add todo</button>
            </br>
            {/* for loop in React. */}
            {todos.map((todo) => {
                <Todo title={todo.title} description={todo.description} done={todo.done}></Todo>
            })
            }
        </div>
    )
}

function Todo(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.description}</h1>
            <h1>{props.done ? "Task is done" : "Task is not done"}</h1>
        </div>
    )
}

export default Navbar
