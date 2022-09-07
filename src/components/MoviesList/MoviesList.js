import React, { useState } from "react";
import './MoviesList.css'
import pic1 from '../../images/pic_1.svg'
import pic2 from '../../images/pic_2.svg'
import { useLocation } from "react-router-dom";

function MoviesList() {
    const path = useLocation();
    function toggleHandler(e) {
        e.preventDefault();
        (e.target.classList.contains("movies-card__like_on") === true) ? e.target.classList.remove("movies-card__like_on") : e.target.classList.add("movies-card__like_on");
    }
    return (
        <div className='movies-list'>
            <div className='movies-card'>
                <div className='movies-card__description'>
                    <h3 className='movies-card__title'>33 слова о дизайне</h3>
                    <p className='movies-card__duration'>1ч 42м</p>
                    {path.pathname === "/movies" && (<button className="movies-card__like" onClick={toggleHandler}></button>)}
                    {path.pathname === "/saved-movies" && (<button className='movies-card__dell'></button>)}
                </div>
                <img className='movies-car__picture' src={pic1} />
            </div>
            <div className='movies-card'>
                <div className='movies-card__description'>
                    <h3 className='movies-card__title'>Киноальманах «100 лет дизайна»</h3>
                    <p className='movies-card__duration'>1ч 42м</p>
                    {path.pathname === "/movies" && (<button className="movies-card__like" onClick={toggleHandler}></button>)}
                    {path.pathname === "/saved-movies" && (<button className='movies-card__dell'></button>)}
                </div>
                <img className='movies-car__picture' src={pic2} />
            </div>
            {path.pathname === "/movies" && (<button className='movies-list__more'>Ещё</button>)}
        </div >
    )
}

export default MoviesList;