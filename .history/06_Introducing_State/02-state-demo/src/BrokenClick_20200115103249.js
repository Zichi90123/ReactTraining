import React, { Component } from 'react'

export default class BrokenClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         clicked: false
      }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.clicked? 'Clicked!!!' : 'Not Clicked'}</h1>
                <button>Click Me!</button>
            </div>
        )
    }
}
