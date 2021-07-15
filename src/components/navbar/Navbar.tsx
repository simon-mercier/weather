import "./Navbar.scss";
import { useState } from "react";

import Search from "../search/Search";

export default function NavBar() {
    return (
        <nav className="container">
            <div className="title">Beautiful Weather 🍂</div>

            <div className="search-bar">
                <Search />
            </div>
        </nav>
    );
}
