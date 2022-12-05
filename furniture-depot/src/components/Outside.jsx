import { useState, useEffect } from "react"
import axios from 'axios'
<<<<<<< HEAD
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

=======

export default function Outside () {

const [outdoor, setOutdoor] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:3001/api/categories/4`)
            setOutdoor(response.data.products)
            console.log(response.data.products)
        }
        getData()
    }, [])
    if (!outdoor) {
        return <h2> LOADING PAGE! </h2>
    } else {
        return (
         <div className="container">
            
            <div className="outdrfurn">  
                {outdoor.map((products) =>(
                    <div className="box" key={products.name}>
                        <h3 className="productline1"> {products.name}</h3>
                        <h2>{products.description}</h2>
                    </div>
                ))}
>>>>>>> f7517b89c11d548d84f453b79d2cf617b5d84756

            </div>    
        
        
        
        
        
        </div>
        )
    }    
    
}
