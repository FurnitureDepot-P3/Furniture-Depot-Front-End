import { useState, useEffect } from "react"
import axios from 'axios'
import React from "react";
import { Link } from 'react-router-dom'

export default function Bed () {

const [bedroom, setBed] = useState(null)
const [review, setReview] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:3001/api/categories/1`)
            setBed(response.data.products)
            console.log(response.data.products)
            const reviewResponse = await axios.get(`http://localhost:3001/api/products/reviews`)
            setReview(reviewResponse.data[0])
            console.log(reviewResponse.data)
            // console.log(reviewResponse.data[0].reviews[0].comment)
        }
        getData()
    }, [])
    return bedroom && review ? (
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
            <div className="review-card">
                    <div className="box" >
                        <h3 className="productline1">{review.reviews[0].comment} </h3>
                        <h2 className="rating"></h2>
                    </div>
            </div>
            </div>
        </div>
        ) : <h1> Loading Please Wait ... </h1>
    }
