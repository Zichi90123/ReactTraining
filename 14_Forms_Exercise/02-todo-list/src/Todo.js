import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleRemove() {
        this.props.removeTodo(this.props.id)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleToggle(evt) {
        this.props.toggleTodo(this.props.id)
    }

    handleUpdate(evt) {
        evt.preventDefault()
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({
            isEditing: false
        })
    }

    render() {
        let result
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className="Todo">
                    <li
                        className={this.props.completed ? "Todo-task completed" : "Todo-task"}
                        onClick={this.handleToggle}
                    >
                        {this.props.task}</li>
                    <div>
                        <button onClick={this.toggleForm}>Edit</button>
                        <button onClick={this.handleRemove}>X</button>
                    </div>
                </div>
            )
        }
        return result
    }
}
