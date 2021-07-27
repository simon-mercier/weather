import { SetStateAction } from "react";
import { Dispatch, useContext } from "react";
import Location from "../../classes/Location";
import LocationContext from "../../contexts/Location";
import Search from "../search/Search";
import "./Navbar.scss";

export default function NavBar() {
    const [location, setLocation]: [
        Location,
        Dispatch<SetStateAction<Location>>
    ] = useContext(LocationContext);
    return (
        <nav className="container">
            <div className="title">Beautiful Weather 🍂</div>

            <div className="search-bar">
                <Search />
            </div>
        </nav>
    );
}
