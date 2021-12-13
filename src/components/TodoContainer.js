import React from 'react'
//random id generator
import { v4 as uuid } from 'uuid';
import TodosList from './TodosList'
import Header from './Header'
import InputTodo from './InputTodo'

class TodoContainer extends React.Component {
    state = {
        todos: []
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
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            }),
        })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => console.log(data))
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
                        setUpdate={this.setUpdate}
                    />
                </div>
            </div>
        )
    }
}

export default TodoContainer