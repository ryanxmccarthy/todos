import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
//random id generator
import { v4 as uuid } from 'uuid';
import TodosList from './TodosList'
import Header from './Header'
import InputTodo from './InputTodo'

const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitialTodos())

    const handleChange = id => {
        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            })
        )
    }

    const delTodo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            }),
        ])
    }

    const addTodoItem = title => {
        const newTodo = {
            id: uuid(),
            title: title,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }

    function getInitialTodos() {
        // getting stored todos
        const temp = localStorage.getItem('todos')
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    useEffect(() => {
        // storing todos 
        const temp = JSON.stringify(todos)
        localStorage.setItem('todos', temp)
    }, [todos])

    return (
        <div className='container'>
            <div className='inner'>
                <Header />
                <InputTodo addTodoProps={addTodoItem} />
                <TodosList 
                    deleteTodoProps={delTodo}
                    handleChangeProps={handleChange}
                    setUpdate={setUpdate}
                    todos={todos}
                />
            </div>
        </div>
    )
}

export default TodoContainer