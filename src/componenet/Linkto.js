import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from './movies';


export default function Linkto() {
   const {ID}=useParams();
    const movieId = movies.find((e)=> e.id === Number(ID));
  return (
    <div>

    <h1>{movies.title} </h1>
    <p>{movies.description}</p>
      
    </div>
  )
}
