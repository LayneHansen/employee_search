import React from 'react';
import './TopCard.css';

function TopCard () {
    return (
        <>
        <div class="card text-center">
            <div class="card-header bg-dark">
                Business Name
            </div>
            <div class="card-body" id="card-body">
                <h1 class="card-title">EMPLOYEE SEARCH</h1>
            </div>
            <nav class="navbar navbar-dark bg-dark">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" 
                    type="submit">Search</button>
                </form>
            </nav>
        </div>
        </>
    )

}



export default TopCard;