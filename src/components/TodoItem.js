import React from 'react'
import styles from './TodoItem.module.css'

class TodoItem extends React.Component {
    handleEditing = () => {
        console.log("edit mode activated")
    }
    
    render() {
        const completedStyle = {
            color: '#595959',
            fontStyle: 'italic',
            opacity: 0.4,
            textDecoration: 'line-through',
        }

        const { completed, id, title } = this.props.todo;

        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing}>
                    <input 
                        type='checkbox' 
                        checked={completed}
                        className={styles.checkbox}
                        onChange={() => this.props.handleChangeProps(id)}
                    />
                    <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
                    <span style={completed ? completedStyle : null}>{title}</span>
                </div>
            </li>
        )    
    }     
}

export default TodoItem