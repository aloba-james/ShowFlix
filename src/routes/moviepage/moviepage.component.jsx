import React from "react";
import { Link, useParams } from "react-router-dom";
import './moviepage.css';
import { useSelector } from "react-redux";


const MoviePage = () => {
    const { movie } = useParams();
    const dataSelect = useSelector(state => state.query.data);
    return (
        <div className="moviepage-container">
            <div>
                <Link to={`/${dataSelect.Title}`}>{dataSelect.title}</Link>
            </div>
            <img src={dataSelect.Poster} alt="" />
            <div className="description">{dataSelect.Plot}</div>
<div className='release-date'>
 {dataSelect.Released}</div>
<div className='rating'>
 {dataSelect.imdbRating}
</div>

<div className='duration'>
 {dataSelct.Runtime}
</div>     
   </div>     
               
    );
};

export default MoviePage;
