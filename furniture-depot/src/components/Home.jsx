import React from "react";
// import SearchForm from './SearchForm'
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="homecats">
      <div className="catbtns">
        {/* made the whole photo clickable by removing <button></button> */}
        <Link
          className="livingbtn"
          to="/Living"
          style={{ textDecoration: "none", color: "white", fontSize: "28px" }}
        >
          LIVING ROOM
        </Link>

        <Link
          className="diningbtn"
          to="/Dining"
          style={{ textDecoration: "none", color: "white", fontSize: "28px" }}
        >
          DINING ROOM
        </Link>

        <Link
          className="bedbtn"
          to="/Bed"
          style={{ textDecoration: "none", color: "white", fontSize: "28px" }}
        >
          BEDROOM
        </Link>

        <Link
          className="outbtn"
          to="/Outside"
          style={{ textDecoration: "none", color: "white", fontSize: "28px" }}
        >
          OUTDOOR
        </Link>
      </div>
    </div>
  );
}
