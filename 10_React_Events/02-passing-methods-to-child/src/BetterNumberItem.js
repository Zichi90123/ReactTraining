import React, { Component } from 'react'

export default class BetterNumberItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
        this.handleRemove = this.handleRemove.bind(this)
    }

    handleRemove() {
        this.props.remove(this.props.value)
    }

    render() {
        return (
            <li>
               {this.props.value}
               <button onClick={this.handleRemove}>X</button> 
            </li>
        )
    }
}
