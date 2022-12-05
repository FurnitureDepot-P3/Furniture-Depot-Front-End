import React from 'react'
// import SearchForm from './SearchForm'
import Nav from './Nav'
import { Link } from 'react-router-dom'


export default function Home (props) {
    return (
        <div className="homecats">

            <div className="navhome">

            < Nav />
            </div>

        <div className="catbtns">
                <button className="livingbtn"> <Link to='/Categories/2' style={{textDecoration: 'none'}}>
                    Living Room
                </Link>
                </button>

                <button className="diningbtn">  <Link to='/Dining' style={{textDecoration: 'none'}}>
                    DINING ROOM
                </Link>
                </button>

                <button className="bedbtn"> <Link to='/Categories/1' style={{textDecoration: 'none'}}>
                    BEDROOM
                </Link>
                </button>

                <button className="outbtn"> <Link to='/Outside' style={{textDecoration: 'none'}}>
                    OUTSIDE FURNITURE
                </Link>
                </button>
        </div>

        </div>
    )
}