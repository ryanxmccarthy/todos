import React, { useState, useEffect } from 'react'
import styles from './TodoItem.module.css'

const TodoItem = props => {
    const [editing, setEditing] = useState(false)
    
    const handleEditing = () => {
        setEditing(true)
    }

    const handleUpdateDone = e => {
        if (e.key === 'Enter') {
            setEditing(false)
        }
    }
    const completedStyle = {
        color: '#595959',
        fontStyle: 'italic',
        opacity: 0.4,
        textDecoration: 'line-through',
    }

    const { completed, id, title } = props.todo

    let viewMode = {}
    let editMode = {}
    
    if (editing) {
        viewMode.display = 'none'
    } else {
        editMode.display = 'none'
    }

    useEffect(() => {
        return () => {
            console.log('Cleaning up...')
        }
    }, [])
   
    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input 
                    checked={completed}
                    className={styles.checkbox}
                    onChange={() => props.handleChangeProps(id)}
                    type='checkbox'
                />
                <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
                <span style={completed ? completedStyle : null}>{title}</span>
            </div>
            <input 
                className={styles.textInput} 
                onChange={e => {props.setUpdate(e.target.value, id)}}
                onKeyDown={handleUpdateDone}
                style={editMode} 
                type='text' 
                value={title}
            />
        </li>
    )     
}

export default TodoItem