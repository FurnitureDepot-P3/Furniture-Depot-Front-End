import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function OutdoorDetails (props) {

    // let { id } = useParams()


    // const [product, setProduct] = useState([])

    // useEffect(() => {
    //     let selectedProduct = props.products.find(
    //         (product) => props.products.id === id)
    //         setProduct(selectedProduct)
    //     }, [product, id])

    // return product ? (
    //     <div className="detail">

    //       <div className="detail-header">
    //         <img src={products.image} alt={products.name} />
    //       </div>

    //       <div className="info-wrapper">
    //         <h3 className="detail-description"> {products.name} </h3>

    //         <h2 className="price">${products.price}</h2>
    //         <p>In stock. Ships today.</p>

    //         <h6>DESCRIPTION</h6>
    //         <p className="details">{products.description}</p>

    //         <h6>REVIEWS</h6>
    //             <p className="review-text"> People who purchased this product rate it a {review.reviews[0].rating} out of 5!</p>
    //             <p className="review-text">{review.reviews[0].comment} </p>

    //         <div className="review-link">
    //             <Link to="/Reviews" className="review-link"> Write a Review </Link>
           
    //         </div>    
    //           <Link to="/outside" className="back-btn"> ◁ Back to Outdoor </Link>
    //         </div>
        
    //     </div>
    // ) : null; 
}

