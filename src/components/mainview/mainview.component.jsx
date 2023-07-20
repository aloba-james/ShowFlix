import React from "react";
import './mainview.css';
import { Link, useLocation } from "react-router-dom";

const MainView = (movies) => {
    const location = useLocation();
    return (
        <div className="mainview-container">            
            <div className="body">               
                <div className="films">
                    {
                        movies.map((item) => (
                            <>
                                <div className="film-card">
                                    <img src={item.imageUrl} alt="img" />
                                    <Link to={`/details/${item.title}`} state={{ background: location }} >
                                        <button>
                                            View
                                        </button>   
                                    </Link>                             
                                </div>
                            </>
                        ))
                    }
                </div>
               

            </div>
        </div>
    );
};

export default MainView;