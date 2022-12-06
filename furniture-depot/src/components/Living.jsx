import { useState, useEffect } from "react"
import axios from 'axios'

export default function Living () {
        
const [living, setLiving] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:3001/api/categories/2`)
            setLiving(response.data.products)
            console.log(response.data.products)
        }
        getData()
    }, [])
    if (!living) {
        return <h2> LOADING PAGE! </h2>
    } else {
        return (
         <div className="container">

            <div className="product-card">  
                {living.map((products) =>(
                    <div className="box" key={products.name}>
                        <h3 className="productline1"> {products.name}</h3>
                        <h2 className="price">${products.price}</h2>
                        <p>In stock. Ships today.</p>
                        <img src={products.image} />
                        <h6>DESCRIPTION</h6>
                        <p>{products.description}</p>
                        <h6>REVIEWS</h6>
                    </div>
                ))}

            </div>    
    
        </div>
        )
    }    
    
}