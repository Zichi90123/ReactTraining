import React, { Component } from 'react'
import './Coin.css'

export default class Coin extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="Coin">
                <img src={this.props.url} />
            </div>
        )
    }
}
