import React, { useState } from 'react'
//random id generator
import { v4 as uuid } from 'uuid';
import TodosList from './TodosList'
import Header from './Header'
import InputTodo from './InputTodo'

const TodoContainer = () => {
    const [todos, setTodos] = useState([])

    const handleChange = id => {
        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
            }))
    }
}