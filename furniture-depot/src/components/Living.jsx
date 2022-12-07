import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Living () {
        
const [living, setLiving] = useState(null)
const [review, setReview] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:3001/api/categories/2`)
            setLiving(response.data.products)
            console.log(response.data.products)
            const reviewResponse = await axios.get(`http://localhost:3001/api/products/reviews`)
            setReview(reviewResponse.data[1])
            console.log(reviewResponse.data)
            // console.log(reviewResponse.data[0].reviews[0].comment)
        }
        getData()
    }, [])
<<<<<<< HEAD

    return living && review ? (
        <div className="container">
=======
    if (!living) {
        return <h2> LOADING PAGE! </h2>
    } else {
        return (
         <div className="container">
            <Link to="/" className="back-btn" id="home-btn"> ◁ Home </Link>

>>>>>>> dc1db0bfa57b8a4dd1fc6262efaf122aafc51932

            <div className="product-card">  
                {living.map((products) =>(
                    <div className="box" key={products.name}>
                        <h3 className="productline1"> {products.name}</h3>
                        <h2 className="price">${products.price}</h2>
                        <p>In stock. Ships today.</p>
                        <img src={products.image} />
                        <h6>DESCRIPTION</h6>
                        <p>{products.description}</p>
                        <h6>REVIEWS</h6>
<<<<<<< HEAD
                        </div>
=======
                        <Link to="/Reviews" className="review-link"> Write a Review </Link>
                    </div>
>>>>>>> dc1db0bfa57b8a4dd1fc6262efaf122aafc51932
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
