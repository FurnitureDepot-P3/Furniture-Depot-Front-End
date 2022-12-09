import { useLocation } from 'react-router-dom'
import {useState} from "react" 
import axios from "axios";

export default function UpdateForm () {

    let location = useLocation()
    let review = location.state.review
    console.log(review)
    
const initialState = {
    rating: review.rating,
    comment: review.comment,
  };
const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState(initialState);
    const updateReview = {
        rating: formState.rating,
        comment: formState.comment
    }
    axios.put(`http://localhost:3001/api/reviews/${review.id}`, updateReview).then((response) => {
        console.log("updated successfully")
        console.log(response.status)
        console.log(response.data.json)
        console.log(response.data.headers)

    })
    }       

    return (
        
        <div className="wrapper">
            <h2>Update your Review</h2>
            <form onSubmit={handleSubmit}>
                <fieldset disable={"false"}>
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
                    <input id="comment" type="text" maxlength="255" onChange={handleChange} value={formState.comment}></input>
                    </label>
                </fieldset>
                <button type="submit">Update</button>
                
            </form>
        </div>
        
    )
    
}