import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import DogList from './DogList'
import DogDetails from './DogDetails'


export default class Routes extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        const getDog = props => {
            let name = props.match.params.name;
            let currentDog = this.props.dogs.find(
                dog => dog.name.toLowerCase() === name.toLowerCase()
            )
            return <DogDetails {...props} dog={currentDog} />
        };

        return (
            <Switch>
                <Route exact path='/dogs' render={() => <DogList dogs={this.props.dogs} />} />
                <Route exact path='/dogs/:name' render={getDog} />
                <Redirect to='/dogs' />
            </Switch>
        )
    }
}
