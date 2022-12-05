import { useState, useEffect } from "react"
import axios from 'axios'
import Nav from './Nav'

export default function Bed () {

const [bedroom, setBed] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:3001/api/categories/1`)
            setBed(response.data.products)
            console.log(response.data.products)
        }
        getData()
    }, [])
    if (!bedroom) {
        return <h2> LOADING PAGE </h2>
    } else {
        return (
            <div className="container">
                <div className="navhome">
                < Nav />
                </div>

            <div className="bedfurn">
              {bedroom.map((products) =>(
                    <div className="box" key={products.name}>
                        <h3 className="productline1"> {products.name}</h3>
                        <h2>{products.description}</h2>
                    </div>
                ))}

            </div>    
            </div>
        )
    }    
    
}
