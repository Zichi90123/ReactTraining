import React, { Component } from 'react'
import './ColorBox.css'

export default class ColorBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div style={{background: this.props.background}} className="ColorBox">
                <span>{this.props.name}</span>
                <span>MORE</span>
            </div>
        )
    }
}
