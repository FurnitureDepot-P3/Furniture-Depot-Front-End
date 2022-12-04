import { useState, useEffect } from "react"
import axios from 'axios'
import Nav from './Nav'
export default function Outside () {

const [outside, setOutside] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`https://www.furniture.com`)
            setOutside(response.data.outside)
        }
        getData()
    }, [])
    if (!outside) {
        
        return <h2> LOADING PAGE </h2>
    } else {
        return (
            <div className="container">
                <div className="navhome">
            < Nav />
            </div>
                <div className="navhome">
            < Nav />
            </div>

            <div className="outsfurn">


            </div>    
            </div>
        )
    }    
    
}
