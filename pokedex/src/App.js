//// this is your original code before you tried to do this and you broke it. good job james
import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from "./PokeList.js";
import SearchOptions from './SearchOptions.js'
import request from 'superagent'; 
import getPokemon from './getPokemon.js';
// import Search from './Search'
import Paging from "./Paging.js";

export default class App extends Component {
  
  state = { pokemon: [] };
  
  async loadPokemon() { 
    const response = await getPokemon();
    const pokemon = response.results;
    console.log(response);
    console.log("||", pokemon);
    this.setState({
      pokemon: pokemon,
    });
  }
  
  async componentDidMount() {
    const pokeDex = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({pokemon: pokeDex.body.results});
    
        window.addEventListener("hashchange", async () => {
            await this.loadPokemon();
        })
      }   
        
    render() {
  // const { pokemon } = this.state;
  // console.log(this.state.pokemon);
  
  return(
    
    <main>
      <Header />
      {/* <Search /> */}
      <SearchOptions />
        <ul> 
        <PokeList pokemon={this.state.pokemon} />
        </ul> 
        <Paging totalResults={totalResults} />
    </main>

    
  )}
}  






















// {/* this.state.pokemonData.map(()) */}        was tryiing to use this in pokeList LN30
// {/* <Paging totalResults={totalResults} /> */}


//     JUST TRYING TO GET SEARCH TO WORK .. MAP IS NOT DEFINED.

    
// import React, { Component } from 'react';
// import Header from './Header.js';
// import './App.css';
// import PokeList from "./PokeList.js";
// import request from 'superagent';
// import Search from './Search.js'

// // import SearchOptions from './SearchOptions.js'
// // import getPokemon from './getPokemon.js';
// // import Paging from "./Paging.js";
// //searchoptions is the source code

// export default class App extends Component {

  //   state = { pokemonData: [] };
  
    
    //       const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex/5cef3501ef6005a77cd4fd33';
    //       const response = window.location.hash.slice(1);
    //   const searches = URL.Search;
    //   // `${URL}?${searchQue}`;  try this maybe if this doesnt work
    //   //returning my search into new pokemon
    //   const searchedPokemon = await response.get(searches)
    //   this.setState({ pokemon: searchedPokemon.body.results})
    // this.setState({ pokemonData: pokemonData.body.results }) COULD BE THIS LINE NOT SURE
    
    //   }
    //   // how we pull data
    //   async componentDidMount() {
      //     const pokemonData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex/5cef3501ef6005a77cd4fd33')
      //     this.setState({ pokemon: pokemonData.body.results })
      
        // }
        
        // render() {
//   const { pokemon} = this.state;
//   console.log(pokemon);
//   return(
  //         <main>
  
  //             <Header />
  
  //             <Search />
  
  //             <PokeList pokemon={this.state.pokemonData} />
  
  
  
  
             {/* <Paging totalResults={totalResults} /> */}
  
  //         </main>
  
  
  // async componentDidMount() {
  //   await this.loadPokemon();    
  
  
  // const pokemonData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex'); THIS WAS AT LIKE 30, i think i was trying to simplify and not even use loadPokemon? broke it somehow