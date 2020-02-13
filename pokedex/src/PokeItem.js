import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
        return (
                <li className="pokemon-item">
                    <h2>{this.props.pokemon.pokemon.toUpperCase()}</h2>
                    <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />
                    <p>Type: {this.props.pokemon.type_1}</p>
                    <p>HP: {this.props.pokemon.hp}</p>
                    <p>Attack: {this.props.pokemon.attack}</p>
                    <p>Defense {this.props.pokemon.defense}</p>
                </li>
        )
    }
}