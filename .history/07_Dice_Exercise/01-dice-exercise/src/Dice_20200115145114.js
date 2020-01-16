import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default class Dice extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div className="App">
                <h1>Dice!</h1>
                <i className= 'fas fas-dice-one'></i>
                <FontAwesomeIcon icon={faDiceOne} />
            </div>
        )
    }
}
