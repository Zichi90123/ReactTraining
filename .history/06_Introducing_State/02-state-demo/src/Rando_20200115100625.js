import React, { Component } from 'react'

export default class Rando extends Component {

    constructor(props) {
        super(props);
        this.state = {num: 0};
    }
    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
            </div>
        )
    }
}
