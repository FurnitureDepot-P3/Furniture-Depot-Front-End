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


const deleteReview = async () => {
    const response = await axios.delete('http://localhost:3001/api/reviews/1', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    })
    console.log("deleted successfully")
    console.log(response.status)
}

    return profile ? (
        <div>
            <h2>My Reviews</h2>

            <div className="table-container">

            <table className="table">
                <thead>
                <tr className="table-header">
                    <th>PRODUCT #</th>
                    <th>RATING</th>
                    <th>REVIEW</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
                </thead>

                <tbody>
                {profile.map((myReviews) =>(
                    <tr className="table-rows">
                        <td>{myReviews.product_id}</td>
                        <td>{myReviews.rating}</td>
                        <td className="table-comment"> {myReviews.comment}</td>
                        <td><button> EDIT </button></td>
                        <td><button onClick={deleteReview}> DELETE </button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        ) : <h1> Loading Please Wait ... </h1>
    }
