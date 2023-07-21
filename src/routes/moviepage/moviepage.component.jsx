import React from "react";
import { Link, useParams } from "react-router-dom";
import './moviepage.css';
import { useSelector } from "react-redux";


const MoviePage = () => {
    const { movie } = useParams();
    const dataSelect = useSelector(state => state.query.data);
    return (
        <div className="moviepage-container">
            <div className='title'>
                 {dataSelect.Title}
            </div>
            <img src={dataSelect.Poster} alt="" />
            <div className="description">{dataSelect.Plot}</div>
            <div className='more-info'>
                 <div className='release-date'>
                    {dataSelect.Released}
                </div>
                <div className='rating'>
                     {dataSelect.imdbRating}
                </div>
                <div className='duration'>
                     {dataSelect.Runtime}
                </div>    
            </div> 
            <button className='watch'>Watch Now</button>
            <div className='favorite'>Love</div>
            <div className='similar-movies'>
                <h2>Similar Movies</h2>
                <div></div>
            </div>
        </div>     
               
    );
};

export default MoviePage;
