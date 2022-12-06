import { useState, useEffect } from "react"
import axios from 'axios'

export default function Living () {
        
const [living, setLiving] = useState([])
const [review, setReview] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:3001/api/categories/2`)
            setLiving(response.data.products)
            console.log(response.data.products)
            const reviewResponse = await axios.get(`http://localhost:3001/api/products/reviews`)
            setReview(reviewResponse.data)
            console.log(reviewResponse.data)
            console.log(reviewResponse.data[0].reviews[0].comment)
        }
        getData()
    }, [])
    if (!living && !review) {
        return <h2> LOADING PAGE! </h2>
    } else {
        return (
         <div className="container">

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
                        </div>
                ))}
            <div className="review-card">
                {review.map((reviews) =>(
                    <div className="box" key={reviews.reviews[0]}>
                        <h3 className="productline1"> {reviews.reviews[0].comment}</h3>
                        <h2 className="rating">{reviews.reviews[0].rating}</h2>
                        </div>
                ))}
            </div>
            </div>
        </div>
        )
    }
}