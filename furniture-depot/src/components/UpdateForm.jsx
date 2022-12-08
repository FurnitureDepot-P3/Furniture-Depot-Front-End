import UpdateReview from "./UpdateReview"
import {useState} from "react" 
import axios from "axios";

export default function UpdateForm({myReviews}) {
    // console.log({myReviews})
    // console.log(`${myReviews.id}`)

    // const initialState = {
    //     reviewId: `${myReviews.id}`,
    //     productId: `${myReviews.product_id}`,
    //     rating: `${myReviews.rating}`,
    //     comments: `${myReviews.comments}`
    // }
    // const [formState, setFormState] = useState(initialState)

    // const handleChange = (event) => {
    //     setFormState({ ...formState, [event.target.id]: event.target.value })
    // }

/// 

const initialState = {
    name: "",
    userId: "",
    productId: "",
    rating: "",
    comments: "",
  };
const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState(initialState);
    const updateReview = async () => {
        const response = await axios.put(`http://localhost:3001/api/reviews/${myReviews.id}`, updateReview, {
             headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
    console.log("updated successfully")
    console.log(response.status)
}

    return (
        
        <div className="wrapper">
            <h1>Update your Review</h1>
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
                <button type="submit">Update</button>
                
            </form>
        </div>
        
    )
}

}
