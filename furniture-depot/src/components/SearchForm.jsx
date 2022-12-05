import React from "react";
import axios from "axios";
import { useState } from "react";

function Search() {
    const [formState, setFormState] = useState(null)
    const [searchResults, setSearch] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
      };

    const handleChange = (event)=> {
        setFormState({...formState, [event.target.id]: event.target.value})
        console.log(formState)
    }

    const getSearch = async () => {
        const response = await axios.get(`https://localhost:3001/api/search.php?s=${formState['']}`)
      
            console.log(response.data.products)
            setSearch(response.data.products)
        }

return (
  
   <div className="Search">
     <form id="input" 
     onSubmit={handleSubmit}
     >
       <input
          type="text"
          placeholder="Search by room or item"
          onChange={handleChange}
          />
        
        <button type="button"
            onClick={getSearch}
            id="searchButton">
          Search
        </button>
      </form>
     
      <div className="container">
      {searchResults?.map((products) =>(
                    <div className="box" key={products.name}>
                        <h3 className="productline1"> {products.name}</h3>
                        <h2>{products.description}</h2>
                    </div>
                ))}
      </div>
    </div>
  )
}

export default Search


