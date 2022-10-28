import React from 'react'

function LastStoriesCard({storie}) {
  if(!storie.title) return null;
  return (
    <div className='news-card'>
      <h3>{storie.title}</h3>
      {/* <a href={storie.title}>Read More</a> */}
      
    </div>
  )
}

export default LastStoriesCard;
