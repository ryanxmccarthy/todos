import React from 'react'
//random id generator
import { v4 as uuid } from 'uuid';
import TodosList from './TodosList'
import Header from './Header'
import InputTodo from './InputTodo'

class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: uuid(),
                title: 'Setup development environment',
                completed: true
            },
            {
                id: uuid(),
                title: 'Develop website and add content',
                completed: false
            },
            {
                id: uuid(),
                title: 'Deploy to live server',
                completed: false
            },
        ]
    }

    handleChange = id => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo;
            })
        }));
    };

    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };

    addTodoItem = title => {
        const newTodo = {
            id: uuid(),
            title: title,
            completed: false
        };

        this.setState({
            todos:[...this.state.todos, newTodo]
        });
    };

    setUpdate = (updatedTitle, id) => {
        console.log(updatedTitle, id)
    }
    
    render() {
        return (
            <div className='container'>
                <div className='inner'>
                    <Header />
                    <InputTodo addTodoProps={this.addTodoItem} />
                    <TodosList 
                        todos={this.state.todos} 
                        handleChangeProps={this.handleChange}
                        deleteTodoProps={this.delTodo}
                    />
                </div>
            </div>
        )
    }
}

export default TodoContainer