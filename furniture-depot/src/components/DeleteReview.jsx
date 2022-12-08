import axios from 'axios'

const DeleteReview = ({myReviews}) => {

    const deleteReview = async () => {
        const response = await axios.delete(`http://localhost:3001/api/reviews/${myReviews.id}`)
        console.log("deleted successfully")
       
        console.log(response.status)
        // console.log(response.data.token)
    }


    return (
    <div className="delete-button">
                            <button onClick={deleteReview}> Delete Review</button>
                           
                        </div>
    )
}

export default DeleteReview;

