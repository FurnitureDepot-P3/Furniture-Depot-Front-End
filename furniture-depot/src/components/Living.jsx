import { useState, useEffect } from "react"
import axios from 'axios'
import Nav from './Nav'



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
            <div className="navhome">
            < Nav />
            </div>

            <div className="lvrmfurn">  
                {living.map((products) =>(
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