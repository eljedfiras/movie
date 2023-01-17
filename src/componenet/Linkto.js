import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from './movies';


export default function Linkto() {
   const {ID}=useParams();
    const movieId = movies.find((e)=> e.id == Number(ID));
    console.log('movieid',movieId)
  return (
    <div>

    <h1>{movieId.title} </h1>
    <p>{movieId.description}</p>
      
    </div>
  )
}
