import React from 'react';
import {Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import RateMovie from './rate';

export default function MovieCard({movie}) {
  return (
    <div className='cardContainer'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
         {movie.description}
         
        </Card.Text>
        <RateMovie rate={movie.rate} />
        <Link to={`/movies/${movie.id}`} ><Button variant="primary">Movie Details</Button></Link> 
      </Card.Body>
      
    </Card>
    </div>
  )
}
