import React from 'react'
import styles from './TodoItem.module.css'

class TodoItem extends React.Component {
    state = {
        editing: false,
    }
    
    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }
    
    render() {
        const completedStyle = {
            color: '#595959',
            fontStyle: 'italic',
            opacity: 0.4,
            textDecoration: 'line-through',
        }

        const { completed, id, title } = this.props.todo;

        let viewMode = {}
        let editMode = {}
        
        if (this.state.editing) {
            viewMode.display = 'none'
        } else {
            editMode.display = 'none'
        }

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
                <input className={styles.textInput} type='text' />
            </li>
        )    
    }     
}

export default TodoItem