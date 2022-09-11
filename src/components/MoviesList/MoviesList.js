import React from "react";
import './MoviesList.css'
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesList() {
    const path = useLocation();
    return (
        <div className='movies-list'>
            <MoviesCard />
            {path.pathname === "/movies" && (<button type="submit" className='movies-list__more'>Ещё</button>)}
        </div >
    )
}

export default MoviesList;