<<<<<<< HEAD
// import { useState, useEffect } from "react"
// import axios from 'axios'
import React from "react";
import Nav from "./Nav"
=======
import { useState, useEffect } from "react"
import axios from 'axios'

>>>>>>> f7517b89c11d548d84f453b79d2cf617b5d84756

export default function Dining () {

const [dining, setDining] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:3001/api/categories/3`)
            setDining(response.data.products)
            console.log(response.data.products)
        }
        getData()
    }, [])
    if (!dining) {
        return <h2> LOADING PAGE! </h2>
    } else {
        return (
<<<<<<< HEAD
            <div className="container">
                <div className="navhome">
            < Nav />
            </div>

            <div className="dinefurn">
                dinning
=======
         <div className="container">
            
            <div className="dinefurn">  
                {dining.map((products) =>(
                    <div className="box" key={products.name}>
                        <h3 className="productline1"> {products.name}</h3>
                        <h2>{products.description}</h2>
                    </div>
                ))}
>>>>>>> f7517b89c11d548d84f453b79d2cf617b5d84756

            </div>            
        </div>
        )
    }    
    
}