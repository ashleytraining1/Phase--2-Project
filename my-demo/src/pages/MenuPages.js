import React,{useState, useEffect} from 'react';
import Menu from "./Menu";


function MenuPages() {
    const [food, setFood] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:8000/foods")
        .then(response => response.json())
        .then(data => console.log(data))
        // .catch((error) => {
        //   console.log(error.message)
        // });
      }, []);
  return (
    <div>
      <Menu food={food} />
    </div>
  )
}

export default MenuPages;
