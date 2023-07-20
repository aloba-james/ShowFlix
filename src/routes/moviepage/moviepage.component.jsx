import React from "react";
import { Link, useParams } from "react-router-dom";
import mock from "../../mockdata";
import './moviepage.css';


const MoviePage = () => {
    const { movie } = useParams();
    return (
        <>
            {
                mock.filter((item) => item.title === movie).map((item) => (
                    <>
                        <div className="moviepage-container">
                            <div>
                                <Link to={`/${item.title}`}>{item.title}</Link>
                            </div>
                            <img src={item.imageUrl} alt="" />
                            <div className="description">{item.description}</div>
                        </div>
                    </>
                ))
            }
        </>
    );
};

export default MoviePage;