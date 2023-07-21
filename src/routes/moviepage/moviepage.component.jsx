import React from "react";
import { Link, useParams } from "react-router-dom";
import './moviepage.css';
import { useSelector } from "react-redux";


const MoviePage = () => {
    const { movie } = useParams();
    const dataSelect = useSelector(state => state.query.data);
    let time=parseInt((dataSelect.Runtime.replace( /[^\d.]/g, '' )), 10);
    console.log(time);
    var Hours = Math.floor(time /60);
    var minutes = time - ( Hours * 60 ) ;
    return (
        <div className="moviepage-container">
            <div className='title'>
                 <h2>{dataSelect.Title}</h2>
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
                     {Hours} hr(s) {minutes} min(s)
                </div>    
            </div> 
            <div className="more">
                <button className='watch'>Watch Now</button>
                <div className='favorite' />
            </div>
            
            <div className='similar-movies'>
                <h2>Similar Movies</h2>
                <div></div>
            </div>
        </div>     
               
    );
};

export default MoviePage;
