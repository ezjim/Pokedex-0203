
const URL = "https://alchemy-pokedex.herokuapp.com/api/pokedex/5cef3501ef6005a77cd4fd33"
  export default async function getPokemon() {
      //get rid of the first char of the ######
      let queryString = window.location.hash.slice(1);
      //build url out of the url and querystring
      const url = `${URL}${queryString}`;
      
      //sned url along to the fethch
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.Response === "False") {
          return {
              Search: [],
              totalResults: 0
            };
        }
        return data;
  }