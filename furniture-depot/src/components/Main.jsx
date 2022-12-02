import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Home'
import Dining from './Dining'
import Living from './Living'
import Bed from './Bed'
import Outside from './Outside'
import Nav from './Nav'


export default function Main () {
    return (
    <div>

        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path ="/Dining" element={<Dining />} />
                <Route path="/categories/2" element={<Living />} />
                <Route path="/categories/1" element={<Bed />} />
                <Route path="/Outside" element={<Outside />} />
            </Routes>
        </div>

    </div>
    )
}

console.log(Main)