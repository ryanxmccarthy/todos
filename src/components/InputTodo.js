import React, { Component } from 'react'

class InputTodo extends Component {
    state ={
        title: ''
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.title);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name='title'
                    onChange={this.onChange}
                    placeholder='Add Todo' 
                    type='text' 
                    value={this.state.title}                                   
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default InputTodo