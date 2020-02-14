
import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        const { pokemon } = this.props;
        const pokemonItems = pokemon.map(pokemon => <PokeItem pokemon={pokemon} />);
// Map is undefined and it is because one of these VARS IS FKED UP  Or i am not calling something correctly
            return (
            
            <main>  
                <section className="pokemon-list">
                    <ul>                   
                        {pokemonItems}
                    </ul>
                </section>
            </main>
        )
    }
}
     



//     // const PokeList = pokemonData.map(item => {
    //     const  pokemonData  = this.props.i dont kow if im doing this right.map(pokemon => <PokeItem pokemon={pokemon} key={shortid.generate()}></PokeItem>)


             
                            //this is your original code//+++++++++++++++++
                // import React, { Component } from 'react';
// import PokeItem from './PokeItem.js';


// export default class PokeList extends Component {
    //     render() {

        //         const pokemonData = this.props.pokemon;
        //         const PokeList = pokemonData.map(item => {
            //             return <PokeItem pokemon={item} key={item.name} />

            //         })
            
            //         return (
                //             <main>
               
                //                 <section className="pokemon-list">
                //                     <ul>
//                         {PokeList}
//                     </ul>
//                 </section>
//             </main>
//         )
//     }
// }


// import shortid from 'shortid'  figure it out 


//other variations for refrence later (source code, try to fix later for fun??? lol) issues: 1. MAP is not defined. i am not sure why its not defined anymore and because it feels like i didnt add that much, and now its broke. 2. need to figure out what the proper call is for 'pokemon' after map.

// export default class PokeList extends Component {
//     render() {
//         const { pokemon } = this.props;
//         // const pokemonByList = pokemon.map(pokemon => <PokeItem pokemon={pokemon} />);

//         return <ul className="pokemon">{pokemon}</ul>;
//     }
// }

            //this your original code
// const { pokemonData } = this.props.pokemon;
// const PokeList = pokemonData.map(item => {
//     return <PokeItem pokemon={item} key={item.name} />

