// Convert "write review" Link to form for delete and edit
import DeleteReview from "./DeleteReview"
import { useState, useEffect } from "react"
import axios from 'axios'
import React from "react";
import { Link } from 'react-router-dom'

export default function UserProfile () {
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:3001/api/users/1`)
            setProfile(response.data.myReviews)
            console.log(response.data.myReviews)
        }
        getData()
    }, [])

    const [reviews, setReviews] = useState([])
    
// create a new value called id, set it in state. make new method when we click on something, set that item's id as stately value. Using `${ID}`. UseParams? event.click. or event.target.value. Console after click to see what id is. is it event.target etc. setId in state





// const [id, setId] = useState()
// const handleChange = event => {
//     setId({ ...id, [event.target.id]: event.target.value })
//     console.log(setId)
// }

//     const handleSubmit = event => {
//         event.preventDefault()
//         console.log(reviews)
//         const response = axios.delete('http://localhost:3001/api/reviews/11').then(
//             response => {

//             }
//         )
        
//         console.log(response.status)
//         }
        


    return profile ? (
        <div className="container">
            {/* <Link to="/" className="back-btn" id="home-btn"> ◁ Home </Link> */}

            <div className="product-container">  
                {profile.map((myReviews) =>(
                    <div className="product-card" key={myReviews.id}>
                        
                        <h6>MY REVIEWS</h6>

                        <h6>PRODUCT</h6>
                        <h3 className="item-reviewed"> {myReviews.product_id}</h3>

                        <h6>RATING</h6>
                        <h2 className="rating">{myReviews.rating}</h2>
                       
                        <h6>REVIEW</h6>
                        <p className="review-text">{myReviews.comment}</p>
                       
                        <DeleteReview myReviews={myReviews}/>
                        </div>
                ))}
            </div>
        </div>
        ) : <h1> Loading Please Wait ... </h1>
    }
