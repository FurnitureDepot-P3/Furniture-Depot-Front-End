import React, { useReducer, useState } from 'react';

export default function Reviews () {

    const initialState = { name: '',rating: '', comments: ''}
    const [formState, setFormState] = useState(initialState);



    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
      };


      const handleSubmit = event => {
        event.preventDefault();

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


