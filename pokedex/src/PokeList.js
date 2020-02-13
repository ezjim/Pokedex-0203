import React, { Component } from 'react';
import pokemonData from './Data.js';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <main>
                {/* <section className="search-container">

                </section> */}
                <section className="pokemon-list">
                    <ul>
                        { pokemonData.map(pokemon => <PokeItem pokemon={pokemon} key={pokemon.species_id} />)}
                    </ul>
                </section>
            </main>
        )
    }
}