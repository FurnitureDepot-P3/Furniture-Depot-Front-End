import { useState, useEffect } from "react"
import axios from 'axios'
<<<<<<< HEAD
import React from "react";
import Nav from './Nav'

export default function Bed () {

const [bed, setBed] = useState([])
=======

export default function Bed () {

const [bedroom, setBed] = useState([])
>>>>>>> f7517b89c11d548d84f453b79d2cf617b5d84756
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:3001/api/categories/1`)
            setBed(response.data.products)
            console.log(response.data.products)
        }
        getData()
    }, [])
<<<<<<< HEAD
    if (!bed) {
=======
    if (!bedroom) {
>>>>>>> f7517b89c11d548d84f453b79d2cf617b5d84756
        return <h2> LOADING PAGE </h2>
    } else {
        return (
            <div className="container">
                <div className="navhome">
            < Nav />
            </div>

            <div className="bedfurn">
<<<<<<< HEAD
            {bed.map((products) =>(
=======
              {bedroom.map((products) =>(
>>>>>>> f7517b89c11d548d84f453b79d2cf617b5d84756
                    <div className="box" key={products.name}>
                        <h3 className="productline1"> {products.name}</h3>
                        <h2>{products.description}</h2>
                    </div>
                ))}
<<<<<<< HEAD

=======
>>>>>>> f7517b89c11d548d84f453b79d2cf617b5d84756

            </div>    
            </div>
        )
    }    
    
}
}