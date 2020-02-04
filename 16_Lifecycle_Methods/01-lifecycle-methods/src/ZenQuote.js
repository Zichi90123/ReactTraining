import React, { Component } from 'react'
import axios from 'axios'
import './ZenQuote.css'


export default class ZenQuote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quote: '',
            isLoaded: false
        }

        console.log('INSIDE CONSTRUCTOR')
    }

    componentDidMount() {
        console.log('INSIDE COMPONENT DID MOUNT')
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(
                function () {
                    this.setState({ quote: response.data, isLoaded: true })
                }.bind(this),
                3000
            )
        })
    }

    componentDidUpdate() {
        console.log('INSIDE COMPONENT DID UPDATE')
    }

    render() {
        console.log('IN RENDER')
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
                        <h1>Always remember...</h1>
                        <p>{this.state.quote} </p>
                    </div>
                ) : 
                <div className="loader"></div>
                }
            </div>
        )
    }
}
