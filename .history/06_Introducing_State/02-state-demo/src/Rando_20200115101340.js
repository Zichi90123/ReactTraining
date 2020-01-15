import React, { Component } from 'react'

export default class Rando extends Component {

    constructor(props) {
        super(props);
        this.state = {num: 0};
    }

    makeTimer(){
        setInterval(() => {
            let rand = Math.random() * this.props.maxNum
            this.setState({num})
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
            </div>
        )
    }
}
