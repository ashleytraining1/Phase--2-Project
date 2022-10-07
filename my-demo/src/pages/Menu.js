import React from 'react'
import MenuList from '../helpers/MenuList';


function Menu({food}) {
    const myFoods = food.map((foodata => {
    return <MenuList key={foodata.id} foodata={foodata} />
  }))

  const myFoodStyle = {
    width: "1100px",
    display: "flex",
    flexWrap: "wrap"

  }
const myHeader = {
  fontFamily: "cursive",
  fontSize: "60px"
}
  return (
    <div>
      <div className="ui three column grid">
      <div className="row"> 
      <div className="menuTitle">
         <h1 style={myHeader}>Our Menu</h1>
     </div>
     <div style={myFoodStyle}>
       {myFoods}
     </div>
    </div>
    //   </div>
    //  </div>
     
  );
} 

export default Menu
