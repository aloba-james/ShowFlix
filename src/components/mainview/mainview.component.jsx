import React from "react";
import './mainview.css';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const MainView = () => {
    const location = useLocation();
    const isLoading = useSelector(state => state.query.loading);    
    const dataSelect = useSelector(state => state.query.data);  
    console.log(isLoading, dataSelect);      
    return (
        <>
        {
            isLoading ? (
                <>
            <div className="mainview-container">
            <div className="body">
                <div className="films">

                    <div className="film-card">
                        <img src={dataSelect.Poster} alt="img" />
                        <Link to={`/details/${dataSelect.Title}`} state={{ background: location }} >
                            <button>
                                View
                            </button>
                        </Link>
                    </div>

                </div>


            </div>
        </div> 

    </>
            ) :
        ''
        }
        </>


    );
};

export default MainView;