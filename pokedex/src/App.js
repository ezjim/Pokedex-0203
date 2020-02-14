
import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
import PokeList from "./PokeList.js";
import request from 'superagent';
import Search from './Search.js'

// import SearchOptions from './SearchOptions.js'
// import getPokemon from './getPokemon.js';
// import Paging from "./Paging.js";
//searchoptions is the source code

export default class App extends Component {

state = { pokemonDex: [] };

async loadPokemon() { 
  
  const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex/5cef3501ef6005a77cd4fd33';
  const response = window.location.hash.slice(1);
  const searches = response.Search;
  // `${URL}?${searchQue}`;  try this maybe if this doesnt work
  //returning my search into new pokemon
  const searchedPokemon = await response.get(searches)
  this.setState({ pokemon: searchedPokemon.body.results})
  
  }
  // how we pull data
  async componentDidMount() {
    const pokemonData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex/5cef3501ef6005a77cd4fd33')
    this.setState({ pokemon: pokemonData.body.results })

    window.addEventListener("hashchange", async () => {
      await this.loadPokemon();
    })
}

render() {
  const { pokemon} = this.state;
  console.log(pokemon);
  return(
        <main>

            <Header />

            <Search />

            <PokeList pokemon={this.state.pokemonData} />
            
           
            

           {/* <Paging totalResults={totalResults} /> */}

        </main>

)};
}



//// this is your original code before you tried to do this and you broke it. good job james

// import React, { Component } from 'react';
// import Header from './Header.js';
// import './App.css';
// import PokeList from "./PokeList.js";
// import request from 'superagent';
// import SearchOptions from './SearchOptions.js'
// import getPokemon from './getPokemon.js';
// import Paging from "./Paging.js";

// export default class App extends Component {

// state = { pokemonData: [] };

// async loadPokemon() {
//   const response = await getPokemon();
//   const pokemon = response.Search;
//   this.setState({
//     pokemon: pokemon,
//   });
// }

// async componentDidMount() {
//   const pokemonData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex/5cef3501ef6005a77cd4fd33')

//   window.addEventListener("hashchange", async () => {
//     await this.loadPokemon();
//   })
//   this.setState({ pokemonData: pokemonData.body.results })
// };

//      render() {
//       const { pokemon, totalResults } = this.state;
//       console.log(pokemon);
//       return(
//         <main>

//             <Header />


//             <SearchOptions />

//             <ul> 
//              this.state.pokemonData.map(())
//             <PokeList pokemon={this.state.pokemonData} />
//             </ul> 

//            <Paging totalResults={totalResults} />

//         </main>

//       );
//     }
// }


