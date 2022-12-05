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
                <button className="livingbtn"> <Link to='/Categories/2' style={{textDecoration: 'none', color: 'white', fontSize: '28px'}}>
                    LIVING ROOM
                </Link>
                </button>

                <button className="diningbtn">  <Link to='/Dining' style={{textDecoration: 'none', color: 'white', fontSize: '28px'}}>
                    DINING ROOM
                </Link>
                </button>

                <button className="bedbtn"> <Link to='/Categories/1' style={{textDecoration: 'none', color: 'white', fontSize: '28px'}}>
                    BEDROOM
                </Link>
                </button>

                <button className="outbtn"> <Link to='/Outside' style={{textDecoration: 'none', color: 'white', fontSize: '28px'}}>
                    OUTDOOR
                </Link>
                </button>
        </div>

        </div>
    )
}