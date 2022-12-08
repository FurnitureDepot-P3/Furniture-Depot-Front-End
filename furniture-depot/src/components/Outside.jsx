import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Outside () {

    const [product, setProduct] = useState([])
    useEffect(() => {
        const getData = async () => {
            const productResponse = await axios.get(`http://localhost:3001/api/products/reviews`)
                setProduct(productResponse.data)
                console.log(productResponse.data)
    
        }
        getData()
    }, [])
    
    const newArray = product.filter(category => category.category_id === 4)
    console.log(newArray)



    return newArray ? (
        <div className="container">
            <div className="back-btn-div">
                <Link to="/" className="back-btn" id="home-btn"> ◁ Home </Link>
            </div>

            <div className="product-container">  
                {newArray.map((products) =>(
                    <div className="product-card" key={products.name}>
                        <h3 className="productline1"> {products.name}</h3>
                        <h2 className="price">${products.price}</h2>
                        <p>In stock. Ships today.</p>
                        <img src={products.image} />
                        <h6>DESCRIPTION</h6>
                        <p>{products.description}</p>
                        <h6>REVIEWS</h6>
                        <p className="review-text"> People who purchased this product rate it a {products.reviews[0].rating} out of 5!</p>
                        <p className="review-text">{products.reviews[0].comment} </p>
                        <div className="review-link">
                            <Link to="/Reviews" className="review-lnk"> Write a Review ✎</Link>
                        </div>
                        </div>
                ))}
           
            </div>
        </div>
        ) : <h1> Loading Please Wait ... </h1>
    }
