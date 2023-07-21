import React from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import './subpage.css';
import { useSelector } from "react-redux";

const SubPage = () => {
    const { movie } = useParams();
    const navigate = useNavigate();
    const dataSelect = useSelector(state => state.query.data);
    return (
        <>
            <div className="modal">
                <div className="subpage-container">
                    <div>Single Movie {movie}</div>

                    <div>
                        <Link to={`/${dataSelect.Title}`}>{dataSelect.Title}</Link>
                    </div>
                    <img src={dataSelect.Poster} alt="" />
                    <div className="description">{dataSelect.Plot}</div>


                    <button onClick={() => navigate(-1)}>Close</button>
                </div>
            </div>
            <Outlet />
        </>


    );
};


export default SubPage;