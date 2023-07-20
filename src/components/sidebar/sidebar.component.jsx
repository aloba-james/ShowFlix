import React from "react";
import './sidebar.css';
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo-container">
                <Link to='/'>
                    Logo
                </Link>
            </div> 
            <div className="search">
                <Link to='/'>
                    Search
                </Link>
            </div>
            <div className="watchlist">
                <Link to='/watchlist'>
                    Watchlist
                </Link>
            </div>
        </div>
    );
};


export default SideBar;
