import React from 'react'

function MenuList({food, foodEvent}) {
  return (
    <div  className="ui column">
    <div
      className="ui card"
      key={food.id}
      onClick={() => foodEvent(food)}
    >
     </div>
    </div>
  )
}

export default MenuList
