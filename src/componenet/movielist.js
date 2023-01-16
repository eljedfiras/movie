import React from 'react'
import MovieCard from './moviecard'

export default function MovieList({movieList, search, rate}) {
  return (
    <div>
      <div className='movieList'>
        {movieList.filter((el) => el.title.toUpperCase().includes(search.toUpperCase().trim()) && el.rate>=rate)
        .map((el,key) => <MovieCard key={el.id} movie={el} />
  )}
      </div>
    </div>
  )
}
