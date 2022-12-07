import React, { useReducer, useState } from 'react';
import axios from 'axios'

export default function Reviews () {
    const initialState = { 
        name: '', userId: '', productId: '', rating: '', comments: ''}
    const [formState, setFormState] = useState(initialState);
   
    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
      };
    
    const handleSubmit = event => {
        event.preventDefault()
        console.log(formState)
        setFormState(initialState)
        const createReview = {
            user_id: formState.userId,
            product_id: formState.productId,
            rating: formState.rating,
            comment: formState.comments
        }
        axios.post('http://localhost:3001/api/products/1/myreview', createReview).then((response) => {
            console.log(response.status)
            console.log(response.data.token)
        })
    }



    return(
        <div className="wrapper">
            <h1>Post a Review!</h1>
            <form onSubmit={handleSubmit}>
                <fieldset disable={"false"}>
                    <label htmlFor='name'>
                        <p>Name</p>
                        <input id="name" type="text" onChange={handleChange} value={formState.name }/>
                    </label>
                    <label htmlFor='userId'>
                        <p>User ID</p>
                        <input id="userId" type="text" onChange={handleChange} value={formState.userId }/>
                    </label>
                    <label htmlFor='productId'>
                        <p>Product ID</p>
                        <input id="productId" type="text" onChange={handleChange} value={formState.productId }/>
                    </label>
                    <label htmlFor='rating'>
                        <p>Rating(Couch Potatoes)</p>
                        <select id="rating" onChange={handleChange} value={formState.rating} >
                        <option value = "">--Select Rating--</option>
                        <option value="1">1 Couch Potato</option>
                        <option value="2">2 Couch Potato</option>
                        <option value="3">3 Couch Potato</option>
                        <option value="4">4 Couch Potato</option>
                        <option value="5">5 Couch Potato</option>
                        </select>
                    </label>
                    <label htmlFor="comments">
                        <p>Comments</p>
                    <input id="comments" type="text" maxlength="255" onChange={handleChange} value={formState.comments}></input>
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
                {/* <button type="delete" onClick={handleRemove}>Delete</button> */}
            </form>
        </div>
    )
}
