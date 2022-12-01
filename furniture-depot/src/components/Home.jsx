import React from 'react'
import SearchForm from './SearchForm'

export default function Home (props) {
    return (
        <div className="homecats">

            <div className="homeh1">
            <h1 className= 'title'> Furniture Depot(Home)</h1>
            <SearchForm/>
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