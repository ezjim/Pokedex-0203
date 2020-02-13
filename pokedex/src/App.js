import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
import pokemonData from "./Data.js";
import PokeList from "./PokeList.js";
// import superagent from 'superagent'




export default class App extends Component {
//  constructor(props) {
//    super(props);
//  }

state = { data: null };

// async componentDidMount() {
//  await this.loadPokemonList();
 
//  console.log('Pokemon loaded!');
// }
  
//   loadPokemonList = async () => {
//     const POKEMON_API = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

//     return superagent.get(POKEMON_API)
//     .then(response => {
//       if (response.body.results) }
//       this.setState({pokemon: response.body.results.slice(0,10)})
//       )
//   }

    render() {
      return(
        <main>
           <div className="App">
            <Header />
            <PokeList />
              
           </div>
        </main>

      );
    }
}


