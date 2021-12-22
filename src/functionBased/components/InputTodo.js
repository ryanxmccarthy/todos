import React, { useState } from 'react'

const InputTodo = props => {
    const [title, setTitle] = useState('')
    
    const onChange = e => {
        setTitle(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (title.trim()) {
            props.addTodoProps(title)
            setTitle('')
        } else {
            alert('Please write item')
        }
    }

    return (
        <form 
    )
}

export default InputTodo