import React from 'react'

function TeamItem({image, name, position}) {
  return (
    <div className='teamItem'>
        <div style={{ backgroundImage: `url(${image})`}}></div>
        <h2>{name}</h2>
        <p>{position}</p>
      
    </div> 
  )
}

export default TeamItem
