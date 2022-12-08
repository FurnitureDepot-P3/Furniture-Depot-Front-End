import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function OutdoorDetails (props) {
    const [selectedOutdoor, setSelectedOutdoor] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:3001/api/products/4`)
            setOutdoor(response.data.products)
            console.log(response.data.products)
        }
        getData()
    }, [])
}