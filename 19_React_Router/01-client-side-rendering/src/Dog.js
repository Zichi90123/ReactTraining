import React, { Component } from 'react'

export default class Dog extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="Dog">
                <h1>Dog!!!</h1>
                <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQi0jEyMDd9&auto=format&fit=crop&w=1320&9=80" />
            </div>
        )
    }
}
