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
            // const reviewResponse = await axios.get(`http://localhost:3001/api/products/reviews`)
            // setReview(reviewResponse.data[0])
            // console.log(reviewResponse.data)
            // console.log(reviewResponse.data[0].reviews[0].comment)
        }
        getData()
    }, [])

    const [product, setProduct] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const productResponse = await axios.get(`http://localhost:3001/api/products/reviews`)
                setProduct(productResponse.data)
                console.log(productResponse.data)
    
        }
        getData()
    }, [])
    
    const newArray = product.filter(category => category.category_id === 1)
    console.log(newArray)



    return bedroom && review ? (
        <div className="container">
            <Link to="/" className="back-btn" id="home-btn"> ◁ Home </Link>

            <div className="product-container">  
                {bedroom.map((products) =>(
                    <div className="product-card" key={products.name}>
                        <h3 className="productline1"> {products.name}</h3>
                        <h2 className="price">${products.price}</h2>
                        <p>In stock. Ships today.</p>
                        <img src={products.image} />
                        <h6>DESCRIPTION</h6>
                        <p>{products.description}</p>
                        <h6>REVIEWS</h6>
                        <p className="review-text"> People who purchased this product rate it a {review.reviews[0].rating} out of 5!</p>
                        <p className="review-text">{review.reviews[0].comment} </p>
                        <div className="review-link">
                            <Link to="/Reviews" className="review-link"> Write a Review </Link>
                        </div>
                        </div>
                ))}
           
            </div>
        </div>
        ) : <h1> Loading Please Wait ... </h1>
    }
