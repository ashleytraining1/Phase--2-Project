import React from 'react'

function FoodCard({foodata, foodEvent}) {
  const cardStyles = {
    width: "250px",
    height: "300px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    
  } 

  const imageStyles = {
    width: "200px",
    height: "200px",
    

  }

  return (
    <div  className="ui column">
    <div className="ui card" style={cardStyles} onClick={() => foodEvent(foodata)}>
      <img src={foodata.image} style={imageStyles}></img>
      <h2>{foodata.name}</h2>
      <h3>{foodata.price}</h3>
      
   
    
     </div>
    </div>
  )
}

export default FoodCard;
