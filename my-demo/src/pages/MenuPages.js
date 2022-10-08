import React,{useState, useEffect} from 'react';
import Menu from "./Menu";
import Contact from './Contact';


function MenuPages(){
    const [food, setFood] = useState([]);
    const [messages, setMessages]= useState([]);

    useEffect(()=> {
        fetch("http://localhost:8000/foods")
        .then(response => response.json())
        .then(data => setFood(data))
        
      }, []);


function addMessages(newMessage){
  const updatedMessages = [...messages, newMessage]
  setMessages(updatedMessages)
}
  return (
    <div>
      <Menu food={food} setFood={setFood} />
      <Contact onAddMessage={addMessages} />
    </div>
  )
}

export default MenuPages;
