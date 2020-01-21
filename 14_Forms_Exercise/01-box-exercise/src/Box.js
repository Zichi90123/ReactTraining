import React, { Component } from 'react'

export default class Box extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div style={{
                    height: `${this.props.height}em`,
                    width: `${this.props.width}em`,
                    backgroundColor: this.props.color
                }} />
                <button onClick={this.props.removeBox}>X</button>
            </div>
        )
    }
}
