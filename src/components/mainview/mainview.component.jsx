import React from "react";
import './mainview.css';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const MainView = () => {
    const location = useLocation();
    const dataSelect = useSelector(state => state.query.data);
    const isLoading = useSelector(state => state.query.isLoading);
    return (
        <>
            {
                isLoading ? console.log('Loading' ) : console.log('Data' ) 
                   
                
            }
        </>


    );
};

export default MainView;