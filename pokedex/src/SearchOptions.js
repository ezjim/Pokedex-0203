                        // CODE SAMPLE////////////////////////
import React, { Component } from 'react';

export default class SearchOptions extends Component {
   
   componentDidMount() {
       this.updateControls();

       window.addEventListener("hashchange", () => {
           this.updateControls();
       });
   }
   
   state = {  
       checkedRadio: [{ name: "pokemon"}],
       searchInput: ""
   };
   
   updateControls(){
       const queryString = window.location.hash.slice(1);
       const searchParams = new URLSearchParams(queryString);
       const type = searchParams.get('type');
       
    this.setState({
        searchInput: searchParams.get("s") || "",
        checkedRadio: type
    });
   }
   
   handleSubmit = event => {
       const form = document.querySelector("form");
       event.preventDefault();
       const formData = new FormData(form);

       const querrystring = window.location.hash.slice(1);
       const searchParams = new URLSearchParams(querrystring);

    //    searchParams.set("type", FormData.get("type"));
       searchParams.set("pokemon", formData.get("search"));
       //reset to page 1  for a new search 
       //unsure of totalpages 
    //    searchParams.set("page", 1);

       window.location.hash = searchParams.toString();
   };
   
    render() { 
        return ( 
            <form className="options" onSubmit={this.handleSubmit}>
                <label for="search">Search:</label>
                <p>
                    <input
                    id="search"
                    name="search"
                    onChange={e => this.setState({ searchInput: e.target.value })}
                    value={this.state.searchInput} 
                    />
                </p>
                <p>
                    <button>Search</button>
                </p>
                </form>              
         );
    }
}
 
