import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa-dice-one } from '@fortawesome/free-solid-svg-icons'

export default class Dice extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div>
                <h1>Dice!</h1>
                <i className= 'fas fas-dice-one'></i>
                <FontAwesomeIcon icon={fa-dice-one} />
            </div>
        )
    }
}
