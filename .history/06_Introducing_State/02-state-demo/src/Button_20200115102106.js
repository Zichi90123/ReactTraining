import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={function() {alert('CLICKED!')}}>Click Me!</button>
            </div>
        )
    }
}
