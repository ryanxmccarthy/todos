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
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: '',
            })
        } else {
            alert('Please write item')
        }
    };

    render() {
        return (
            <form 
                className='form-container'
                onSubmit={this.handleSubmit}
            >
                <input 
                    className='input-text'
                    name='title'
                    onChange={this.onChange}
                    placeholder='Add Todo' 
                    type='text' 
                    value={this.state.title}                                   
                />
                <button className='input-submit'>Submit</button>
            </form>
        )
    }
}

export default InputTodo