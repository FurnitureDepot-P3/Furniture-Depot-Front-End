import { useState, useEffect } from "react"
import axios from 'axios'
import React from "react";

export default function Bed () {

const [bed, setBed] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:3001/api/categories/1`)
            setBed(response.data.products)
            console.log(response.data.products)
        }
        getData()
    }, [])
    if (!bed) {
        return <h2> LOADING PAGE </h2>
    } else {
        return (
            <div className="container">

            <div className="product-card">
              {bedroom.map((products) =>(
                <div className="box" key={products.name}>
                    <h3 className="productline1"> {products.name}</h3>
                    <h2 className="price">${products.price}</h2>
                    <p>In stock. Ships today.</p>
                    <img src={products.image} />
                    <h6>DESCRIPTION</h6>
                    <p>{products.description}</p>
                    <h6>REVIEWS</h6>
                    </div>
                ))}

            </div>    
            </div>
        )
    }    
    
}
