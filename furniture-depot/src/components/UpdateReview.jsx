import axios from "axios"

const UpdateReview = ({myReviews}) => {

    const updateReview = async () => {
        const response = await axios.put(`http://localhost:3001/api/reviews/${myReviews.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log("updated successfully")
        console.log(response.status)
    }

    return (
        <div className="edit-button">
            <button onClick={updateReview}>
                EDIT
            </button>
        </div>
    )
}

export default UpdateReview


/// User click on 'edit' button
/// click opens a form that is filled with the specific review id
// user will be able to edit "comment" section and "rating" section of data.
// button on the update form will make the axios.put() call and return user to "My Reviews" page
// This UpdateReview Commponent will be built in a new UpdateForm component. The UpdataForm component will be nested in the "UserProfile" component and attached to the "Edit" area of the table in the same way the DeleteReview component is.