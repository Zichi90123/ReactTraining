import React, { Component } from 'react'
import './Box.css'
import {choice} from './helpers'

export default class Box extends Component {

    static defaultProps = {
        allColors: ["purple", "magenta", "violet", "pink"]
    }

    constructor(props) {
        super(props)

        this.state = {
            color: 'purple'     
        }
        this.handleClick = this.handleClick.bind(this)
    }

    pickColor() {
        let newColor 
        do {
            choice(this.props.allColors);
        } while (newColor === this.state.color)
        
        this.setState({ color: newColor})
    }

    handleClick() {
        this.pickColor()
    }

    render() {
        return (
            <div className="Box" style={{backgroundColor: choice(this.props.allColors)}} onClick={this.handleClick}> 
                
            </div>
        )
    }
}
