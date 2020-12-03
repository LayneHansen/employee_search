import React from 'react';
import './TopCard.css';

function TopCard () {
    return (
        <>
        <div className="card text-center">
            <div className="card-header bg-dark">
                Business Name
            </div>
            <div className="card-body" id="card-body">
                <h1 className="card-title">EMPLOYEE SEARCH</h1>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" 
                    type="submit">Search</button>
                </form>
            </nav>
        </div>
        </>
    )

}



export default TopCard;