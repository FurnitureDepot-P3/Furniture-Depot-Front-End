import React from 'react'
import SearchForm from './SearchForm'
import Nav from './Nav'

export default function Home (props) {
    return (
        <div className="homecats">

            <div className="navhome">
            < Nav />
            </div>

        <div className="catbtns">
                <button className="livingbtn">
                Living Room
                </button>

                <button className="diningbtn">
                Dining Room
                </button>

                <button className="bedbtn">
                Bedroom
                </button>

                <button className="outbtn">
                Outdoor Furniture
                </button>
        </div>

        </div>
    )
}