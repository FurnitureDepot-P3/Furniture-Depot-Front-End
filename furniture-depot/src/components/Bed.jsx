import { useState, useEffect } from "react"
import axios from 'axios'

export default function Bed () {

const [bed, setBed] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`https://www.furniture.com`)
            setBed(response.data.bed)
        }
        getData()
    }, [])
    if (!bed) {
        return <h2> LOADING PAGE </h2>
    } else {
        return (
            <div className="container">
            <div className="bedfurn">


            </div>    
            </div>
        )
    }    
    
}