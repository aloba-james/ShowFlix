import { useEffect, useState } from 'react';
import './home.css';
import SideBar from "../../components/sidebar/sidebar.component";
import MainView from "../../components/mainview/mainview.component";
import { Route, Routes } from "react-router-dom";
import SubPage from "../../components/subpage/subpage.component";
import SearchBox from '../../components/searchbox/searchbox.component';
import mock from '../../mockdata';

const Home = () => {
    const [searchField, setSearchField] = useState('');
    const [movies, setMovies] = useState();
    const [filteredMovies, setFilterMovies] = useState(movies);
    const [movieTitle, setMovieTitle] = useState('');
    const replaced  = movieTitle.replaceAll(' ', '+');
    
 

    useEffect(
        () => {           
            fetch(`http://www.omdbapi.com/?t=${replaced}&apikey=74a52849`)
                .then(response => response.json())
                .then((item) => setMovies(item));                                       
            
        },
    [replaced]);
    console.log(movies);

    // useEffect(
    //     () => {
    //         const newFilteredMovies = movies.filter((movie) => {
    //             return movie.title.toLocaleLowerCase().includes(searchField);
    //         });

    //         setFilterMovies(newFilteredMovies);

    //     },
    // [movies, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    const onClickHandler = (event) => {
        setMovieTitle(searchField);
    };

   

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
                    <p>Results for: <strong>{movieTitle}</strong></p>
                </div>
                {/* <MainView movies={filteredMovies} /> */}
            </div>
        </>

    );
};

export default Home;