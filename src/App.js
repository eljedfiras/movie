import { React, useState } from 'react';
import './App.css';
import AddMovie from './componenet/add';
import Filter from './componenet/filter';
import MovieList from './componenet/movielist';
import Navbaar from './componenet/navbar';
import {movies} from './componenet/movies';
import { Route, Routes } from 'react-router-dom';
import Linkto from './componenet/Linkto';

function App() {
  const [movieList,setMovielist] = useState(movies);
  const addHandler =(newMovie)=>{
     setMovielist(
      [...movieList, newMovie]
     )
  }

  const[search,setSearch]=useState('')

  const[rate,setRate]=useState(1)



  return (
    <div className="App">
   

    <Navbaar />
    <Filter  setSearch={setSearch}  setRate={setRate} rate={rate} />
    <AddMovie  addHandler={addHandler}  />
    <Routes>
<Route path='/'  element= {<MovieList movieList={movieList} search={search} rate={rate}/>}  />
<Route path='/movies/:ID' element={<Linkto/>}  />
</Routes>
    
    
    </div>
  );
}

export default App;
