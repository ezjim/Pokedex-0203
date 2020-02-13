import React, { Component } from 'react';
import PokeItem from './PokeItem.js';


export default class PokeList extends Component {
    render() {

        const pokemonData = this.props.pokemon;
        const PokeList = pokemonData.map(item => {
            return <PokeItem pokemon={item} key={item.name} />

        })

        return (
            <main>
               
                <section className="pokemon-list">
                    <ul>
                        {PokeList}
                    </ul>
                </section>
            </main>
        )
    }
}