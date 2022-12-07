// Convert "write review" Link to form for delete and edit

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

//create a new value called id, set it in state. make a new method when we click on something, 
    //set that item's id as stately. using "${ID}". UseParams? event.click or event.target.
    //value on click console.log after clisk to see what id is. is it event.target etc setID in state.

        .delete('')

    const handleSubmit = event => {
        event.preventDefault()
        console.log(reviews)
        const response = axios.delete('http://localhost:3001/api/reviews/11')
    }

    // export const DeleteReview = () => {
    // const [reviews, setReviews] = useState<ResponseAPI[]:

    // useEffect (() =>{
    //     getReviews().then(data => setPosts(data))
    // }, [])
    // const handleDelete = async (id: number) => {

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
                       
                        <div className="review-link">
                            <Link to="/Reviews" className="review-link"> Delete Review </Link>
                        </div>
                        </div>
                ))}
            </div>
        </div>
        ) : <h1> Loading Please Wait ... </h1>
    }
