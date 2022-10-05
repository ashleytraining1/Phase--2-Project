import React from 'react'
import MenuList from '../helpers/MenuList'

function Menu({food}) {
    const myFoods = food.map( food =>
    <MenuList 
key={food.id} 
food={food} 
/>)
  return (
     <div className="ui four column grid">
      <div className="row">
      {myFoods}
      
        {/*...and here..*/}
        Collection of all foods
      </div>
    </div>
  );
} 

export default Menu
