import React from "react";
import "./navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand" id="test">Clickster</div>
        {/* <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </form> */}
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </nav>
);



export default Navbar;