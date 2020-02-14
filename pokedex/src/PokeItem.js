import React, { Component } from 'react';

export default class PokeItem extends Component {

    render() {
        
        return (
                <li className="pokemon-item">
                    <h2><span className="poke-name">{this.props.pokemon.pokemon}</span></h2>
                    <img className="img" src={this.props.pokemon.url_image} alt="" />
                    {/* { alt={this.props.pokemon.pokemon} />  */}
                    <p>HP: {this.props.pokemon.hp}</p>
                    <p>Attack: {this.props.pokemon.attack}</p>
                    <p>Defense {this.props.pokemon.defense}</p>
                </li>


                //     // i know you can figure out how to chang the background color per type of pokemon, you are so very close. just cant connect the dots.
                //     /* <h3 style={{ backgroundColor: this.props.pokemon.color_1 }}></h3> */
                //    /* { <h3 <span className="poke-name">Type: <span {this.props.pokemon.type_1}</span> */
                // {/* // <p className="type">Type: {this.props.pokemon.type_1}</p> */}

        )
    }
}


