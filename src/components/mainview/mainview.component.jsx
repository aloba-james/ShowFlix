import React from "react";
import './mainview.css';
import { Link, useLocation } from "react-router-dom";

const MainView = (movies) => {
    const location = useLocation();    
    return (
        <div className="mainview-container">
            <div className="body">
                <div className="films">

                    <div className="film-card">
                        <img src={movies.movies.poster} alt="img" />
                        <Link to={`/details/${movies.movies.title}`} state={{ background: location }} >
                            <button>
                                View
                            </button>
                        </Link>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default MainView;