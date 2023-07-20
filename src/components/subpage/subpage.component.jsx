import React from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import mock from "../../mockdata";
import './subpage.css';

const SubPage = () => {
    const { movie } = useParams();
    const navigate = useNavigate();
    return (
        <>
            <div className="modal">
                <div className="subpage-container">
                    <div>Single Movie {movie}</div>
                    {
                        mock.filter((item) => item.title === movie).map((item) => (
                            <>
                                <div>
                                    <Link to={`/${item.title}`}>{item.title}</Link>
                                </div>
                                <img src={item.imageUrl} alt="" />
                                <div className="description">{item.description}</div>
                            </>
                        )

                        )
                    }

                    <button onClick={() => navigate(-1)}>Close</button>
                </div>
            </div>
            <Outlet />
        </>


    );
};


export default SubPage;