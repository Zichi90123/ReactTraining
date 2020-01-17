import React, { Component } from 'react'

export default class NumberItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <li>
               {this.props.value}
               <button onClick={this.props.remove}>X</button> 
            </li>
        )
    }
}
