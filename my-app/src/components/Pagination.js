
import React from 'react'
import { useState, useEffect } from "react"

function Pagination() {
    let [todo, setTodo] = useState([]);
    let [todoPerPage, setTodoPerPage] = useState(10);
    let [currentPage, setCurrentPage] = useState(1);
    let[newTodo,setNewTodo]=useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setTodo(json))
    }, [])

    let numOfTotalPages = Math.ceil(todo.length / todoPerPage);
    let pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
    let indexofLastTodo = currentPage * todoPerPage;
    let indexofFirstTodo = indexofLastTodo - todoPerPage;
    let visibleTodo = todo.slice(indexofFirstTodo, indexofLastTodo)

    let prevPageHandler = () =>{
        if(currentPage !==1){
            setCurrentPage(currentPage-1)
        }
    }

    let nextPageHandler = () =>{
        if(currentPage !== numOfTotalPages){
            setCurrentPage(currentPage+1)
        }
    }

    let addNewTodo = ()=>{
        newTodo={
            completed:false,
        id:visibleTodo.length+1,
        title:"hellodosto"
        }
     let info=     [...todo,newTodo]
     console.log(info)
    }

    let changeHandler = (e) =>{
         setNewTodo(e.target.value)
    }
    return (
        <div>
            <h1>new app</h1>
            {visibleTodo.map((item) => {
                return (<div>
                    <li>{item.title}</li>

                </div>)
            })}
            {newTodo}
            <span onClick={prevPageHandler}>prev</span>
            {<p>{pages.map((page) => {
                return (

                    <span id={page} onClick={() => setCurrentPage(page)}>{`${page}  |`}</span>

                )
            })}</p>}
            <span onClick={nextPageHandler}>next</span>
            <input type='text' onChange={changeHandler} value={newTodo}></input>
            <button onClick={addNewTodo}>addNewTodo</button>
        </div>
    )
}

export default Pagination;
