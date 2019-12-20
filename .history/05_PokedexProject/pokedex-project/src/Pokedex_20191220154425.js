import React, { Component } from 'react'
import './Pokedex.css'
import Pokecard from './Pokecard'

export default class Pokedex extends Component {

    render() {
        let title;
        if(this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>
        }
        else {
            title = <h1 className="Pokedex-loser">Losing Hand</h1>
        }

        return (
            <div className="Pokedex">

                <p>Total Experience: {this.props.exp}</p>
                {title};
                <div className="Pokedex-cards">
                {this.props.pokemon.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))}
                </div>
            </div>
        )
    }
}
