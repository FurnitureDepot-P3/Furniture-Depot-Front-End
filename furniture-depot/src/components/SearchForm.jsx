import React from "react";
// import axios from "axios";
// import { useState } from "react";

function Search() {
    // const [formState, setFormState] = useState(null)
    // const [searchResults, setSearch] = useState(null)

    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //   };

    // const handleChange = (event)=> {
    //     setFormState({...formState, [event.target.id]: event.target.value})
    //     console.log(formState)
    // }

    // const getSearch = async () => {
    //     const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${formState['']}`)
      
    //         console.log(response.data.drinks)
    //         setSearch(response.data.drinks)
    //     }

return (
  
   <div className="Search">
     <form id="input" 
    //  onSubmit={handleSubmit}
     >
       <input
          type="text"
          placeholder="Search by room or item"
          // onChange={handleChange}
          />
        
        <button type="button"
            // onClick={getSearch}
            id="searchButton">
          Search
        </button>
      </form>
     
      <div className="container">
        {/* {searchResults?.map((drink) => (  */}
          {/* <div key={drink.strDrink} className="card">
            <h2>{drink.strDrink} </h2>
            <p>{drink.strCategory}</p>
            <img className="srcthum" src={drink.strDrinkThumb} alt="#"/>          
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Search


