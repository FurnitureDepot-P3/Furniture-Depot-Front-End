import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <nav className="navbar">
            <div className="links">
                <button id="home">
                <Link to='/'>Home</Link>
                </button>
                <button id="livrom">
                <Link to='/Living'>LIVING ROOM</Link> 
                </button>
                <button id="dinrom">
                <Link to='/Dining'>DINING ROOM</Link>
                </button>
                <button id="bedrom">
                <Link to='/Bed'>BEDROOM</Link>
                </button>
                <button id="outside">
                <Link to='/Outside'>OUTSIDE FURNITURE</Link>
                </button>
            </div>
        </nav>
    )
}