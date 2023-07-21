import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './home.css';
import SideBar from "../../components/sidebar/sidebar.component";
import MainView from "../../components/mainview/mainview.component";
import { Route, Routes } from "react-router-dom";
import SubPage from "../../components/subpage/subpage.component";
import SearchBox from '../../components/searchbox/searchbox.component';
import { setQuery, setData } from '../../store/query/querySlice';



const Home = () => {
    const [searchField, setSearchField] = useState('');
    const [movies, setMovies] = useState();        
    const querySelect = useSelector(state => state.query.currentQuery);
    const dataSelect = useSelector(state => state.query.data);
    const replaced  = querySelect.replaceAll(' ', '+');    
    const dispatch = useDispatch();
    const [loading, setLoading] = useState();
      const [errors, setErrors] = useState();
 

    useEffect(
        () => {         
            fetch(`http://www.omdbapi.com/?t=${replaced}&apikey=74a52849`)
                .then(response => response.json())
                .then((item) => setMovies(item));                   
        },
    [replaced]);
    
    useEffect(
        () => {
            
            dispatch(setData(movies));
            
        },
        [movies]
    );

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    const onClickHandler = (event) => {
        dispatch(setQuery(searchField));
    };

    console.log('data',dataSelect);


    return (
        <>
            <div className="home-container">
                <div className="header">
                    <h1>Explore</h1>
                   <div className='search'> 
                        <input type="text" placeholder='Search' onChange = {onSearchChange}/>
                        <button onClick={onClickHandler}>
                            Search
                        </button>
                   </div>
                </div>
                <div className="description">
                    <p>Results for: <strong>{querySelect}</strong></p>
                </div>
                
              <MainView /> 
            
                
            </div>
        </>

    );
};

export default Home;