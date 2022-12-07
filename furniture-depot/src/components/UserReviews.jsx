import axios from 'axios'
import React, { useState, useEffect } from 'react';

export default function Reviews () {
    const initialState = { name: '', userId: '', productId: '', rating: '', comments: ''}
    const [formState, setFormState] = useState(initialState);
    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
      };
      
      const handleSubmit = event => {
                const response = await axios.post(`http://localhost:3001/api/products/1/myreview`, {
                    user_id: " ",product_id: " ", rating: " ", comment: " "
                })
                (response.data.json)
                console.log(response.data.json)
                event.preventDefault();
            }
            console.log(formState);
            setFormState(initialState);
        
        
       
      };

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
                        <p>userId</p>
                        <input id="userId" type="text" onChange={handleChange} value={formState.userId }/>
                    </label>
                    <label htmlFor='productId'>
                        <p>productId</p>
                        <input id="productId" type="text" onChange={handleChange} value={formState.productId}/>
                    </label>
                    <label htmlFor='rating'>
                        <p>Rating(Couch Potatoes)</p>
                        <select id="rating" onChange={handleChange} value={formState.rating} >
                        <option value = "">--Select Rating--</option>
                        <option value="1 Couch potato">1 Couch Potato</option>
                        <option value="2 Couch Potato">2 Couch Potato</option>
                        <option value="3 Couch Potato">3 Couch Potato</option>
                        <option value="4 Couch Potato">4 Couch Potato</option>
                        <option value="5 Couch Potato">5 Couch Potato</option>
                        </select>
                    </label>
                    <label htmlFor="comments">
                        <p>Comments</p>
                    <textarea id="comments" cols="30" rows="5" onChange={handleChange} value={formState.comments}></textarea>
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
    }


// const handleSubmit = event => {
//     // useEffect(() => {
//         const createReview = async () => {
//             const response = await axios.post(`http://localhost:3001/api/products/1/myreview`, {
//                 user_id: " ",product_id: " ", rating: " ", comment: " "
//             })
//             (response.data.json)
//             console.log(response.data.json)
//         }
//         createReview()
//         event.preventDefault();
//         console.log(formState);
//         setFormState(initialState);
    
    
   
//   };