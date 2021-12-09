import React from 'react'
import styles from './TodoItem.module.css'

class TodoItem extends React.Component {
    render() {
        const completedStyle = {
            color: '#595959',
            fontStyle: 'italic',
            opacity: 0.4,
            textDecoration: 'line-through',
        }

        return (
            <li className={styles.item}>
                <input 
                    type='checkbox' 
                    checked={this.props.todo.completed}
                    className={styles.checkbox}
                    onChange={() => this.props.handleChangeProps(this.props.todo.id)}
                />
                <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
                <span style={this.props.todo.completed ? completedStyle : null}>{this.props.todo.title}</span>
                {this.props.todo.title}
            </li>
        )    
    }     
}

export default TodoItem