import logo from './logo.svg';
import './App.css';
import Home from './routes/home/home.component';
import { Route, Routes, useLocation } from 'react-router-dom';
import SubPage from './components/subpage/subpage.component';
import MoviePage from './routes/moviepage/moviepage.component';
import SideBar from './components/sidebar/sidebar.component';


function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
 

  return (
    <>
    <SideBar />
      <Routes location={background || location}>
        <Route path='/' element={<Home />}>
          <Route path="details/:movie" element={<SubPage />} />
        </Route>
        <Route path=':movie' element={<MoviePage />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="details/:movie" element={<SubPage />} />
        </Routes>
      )}
    </>

  );
}

export default App;
