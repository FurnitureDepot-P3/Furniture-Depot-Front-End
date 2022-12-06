// import React, { useReducer, useState } from 'react';

// export default function Reviews () {

//     const [submitting, setSubmitting] = useState(false)

//     const handleSubmit = event => {
//         EventTarget.preventDefaul ()
//         setSubmitting(true)

//         setTimeout (() => {
//             setSubmitting(false)
//             setFormData({
//                 reset:true
//             })
//         }, 3000)
//     }

//     const formReducer = (state, event) => {
//         if(event.reset) {
//             return{
//                 name: '',
//                 rating: 0,
//                 comments: ''
//             }
//         }
//         return {
//             ...state,
//             [event.name] : event.value
//         }
//     }
//     const [formData, setFormData] = useReducer(formReducer, {count:100}) 


//     const handleChange = event => {
//         const isCheckbox = event.target.type === 'checkbox'
//         setFormData ({
//             name: event.type.name,
//             value: isCheckbox ? event.target.check : event.target.value,
//         })
//     }
//     return(
//         <div className="wrapper">
//             <h1>Post a Review!</h1>
//             <form onSubmit={handleSubmit}>
//                 <fieldset disable={"false"}>
//                     <label>
//                         <p>Name</p>
//                         <input name="name" onChange={handleChange} value={formData.name || ''}/>
//                     </label>
//                     <label>
//                         <p>Rating(Couch Potatoes)</p>
//                         <select value="rating" onChange={handleChange} value={formData.name || ''} >
//                         <option value = "">--Select Rating--</option>
//                         <option value="1 Couch potato">1 Couch Potato</option>
//                         <option value="2 Couch Potato">2 Couch Potato</option>
//                         <option value="3 Couch Potato">3 Couch Potato</option>
//                         <option value="4 Couch Potato">4 Couch Potato</option>
//                         <option value="5 Couch Potato">5 Couch Potato</option>
//                         </select>
//                     </label>
//                     <p>Comments</p>
//                     <input type="text"onChange={handleChange} value={formData.name || ''}/>
//                 </fieldset>
//                 <button type="submit" disable={"false"}>Submit</button>
//             </form>
//         </div>
//     )
// }


