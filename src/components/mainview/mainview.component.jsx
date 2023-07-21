import React from "react";
import './mainview.css';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const MainView = () => {
    const location = useLocation();
    const dataSelect = useSelector(state => state.query.data);
    const isLoading = useSelector(state => state.query.isLoading);
    console.log(isLoading);
    return (
        <>
            {/* <div className="mainview-container">
                        <div className="body">
                            <div className="films">

                                <div className="film-card">
                                    <img src={dataSelect.poster} alt="img" />
                                    <Link to={`/details/${dataSelect.title}`} state={{ background: location }} >
                                        <button>
                                            View
                                        </button>
                                    </Link>
                                </div>

                            </div>


                        </div>
                    </div> */}
              
        </>


    );
};

export default MainView;