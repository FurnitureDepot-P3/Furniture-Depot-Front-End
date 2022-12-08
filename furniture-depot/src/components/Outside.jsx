import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Outside () {

const [outdoor, setOutdoor] = useState(null)
const [review, setReview] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:3001/api/categories/4`)
            setOutdoor(response.data.products)
            console.log(response.data.products)
            const reviewResponse = await axios.get(`http://localhost:3001/api/products/reviews`)
            setReview(reviewResponse.data[3])
            console.log(reviewResponse.data)
            // console.log(reviewResponse.data[0].reviews[0].comment)
        }
        getData()
    }, [])


    return outdoor && review ? (
        <div className="container">
            <Link to="/" className="back-btn" id="home-btn"> ◁ Home </Link>

            <div className="product-container">  
                {outdoor.map((products) =>(
                    <div className="product-card" key={products.name}>
                        <h3 className="productline1"> {products.name}</h3>
                        <h2 className="price">${products.price}</h2>
                        <p>In stock. Ships today.</p>
                        <img src={products.image} />
                        <h6>DESCRIPTION</h6>
                        <p>{products.description}</p>
                        <h6>PRODUCT #</h6>
                        <p>{products.id}</p>

                        <Link to={`/outside/${products.id}`} className="view-details">View details ▻</Link>

                        <h6>REVIEWS</h6>
                        <p className="review-text"> People who purchased this product rate it a {review.reviews[0].rating} out of 5!</p>
                        <p className="review-text">{review.reviews[0].comment} </p>
                        <div className="review-link">
                            <Link to="/Reviews" className="review-link"> Write a Review </Link>
                        </div>

                        
                     </div>
                ))}
             {/* <div className="review-card">
    //                 <div className="box" > */}
                         {/* <h3 className="productline1">{review.reviews[0].comment} </h3> */}
                        {/* <h4 className="rating">People who purchased this product rate it a {review.reviews[0].rating} out of 5!</h4>
    //                 </div>
    //         </div> */}
             </div>
         </div>
        ) : <h1> Loading Please Wait ... </h1>
    }