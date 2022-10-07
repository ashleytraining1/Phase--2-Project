import React,{useState, useEffect} from 'react';
import Menu from "./Menu";


function MenuPages() {
    const [food, setFood] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:8000/foods")
        .then(response => response.json())
        .then(data => setFood(data))
        
      }, []);
  return (
    <div>
      <Menu food={food} setFood={setFood} />
    </div>
  )
}

export default MenuPages;
