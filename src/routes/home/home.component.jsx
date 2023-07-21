import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './home.css';
import SideBar from "../../components/sidebar/sidebar.component";
import MainView from "../../components/mainview/mainview.component";
import { Route, Routes } from "react-router-dom";
import SubPage from "../../components/subpage/subpage.component";
import { setQuery, setData, getData, setLoading } from '../../store/query/querySlice';



const Home = () => {
    const [searchField, setSearchField] = useState('');
    const [movies, setMovies] = useState();        
    const querySelect = useSelector(state => state.query.currentQuery);    
    const replaced  = querySelect.replaceAll(' ', '+');    
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const dataSelect = useSelector(state => state.query.data);    

    useEffect(       
        () => {         
            const fetchData = async() => {
                const response = await fetch(`https://www.omdbapi.com/?t=${replaced}&apikey=74a52849`);
                const data = await response.json();
                setMovies(data);
                setIsLoading(true);
                console.log(data);
                if(data.Error){
                    console.log('error');
                    setIsLoading(false);

                }
            };
              
            fetchData();
        },
    [replaced]);
    
    useEffect(
        () => {
            dispatch(setData(movies)); 
            dispatch(setLoading(isLoading));    
                            
        },
        [movies]
    );
        console.log(isLoading);
    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    const onClickHandler = (event) => {
        dispatch(setQuery(searchField));
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
                    <p>Results for: <strong>{querySelect}</strong></p>
                </div>
                
            
                <MainView dataSelect={dataSelect} /> :
              
            
                
            </div>
        </>

    );
};

export default Home;
