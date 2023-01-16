import React from 'react'

export default function RateMovie({rate,setRate}) {
  
  const arrStar = [1, 2, 3, 4, 5];
  
  return (
    <div className='rate'>
      {
        arrStar.map(el =>
          <span onClick={()=>{setRate(el)}}>
         {el <= rate ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i> }
         </span>
         )}
      
    </div>
  );
}
