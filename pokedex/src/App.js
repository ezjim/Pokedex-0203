import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
import PokeList from "./PokeList.js";
import request from 'superagent';


export default class App extends Component {

state = { pokemonData: [] };

async componentDidMount() {
  const pokemonData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')

  this.setState({ pokemonData: pokemonData.body.results })

};
     render() {
      return(
        <main>
            <Header />
           
            <PokeList pokemon={this.state.pokemonData} />
              
           
        </main>

      );
    }
}


