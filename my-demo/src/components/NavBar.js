import React from 'react';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../styles/NavBar.css";

function NavBar() { 
  const navbarStyles = {
    margin: "auto",
    width: "1100px",
    display: "flex",
    justifyContent: "space-between",

  }
    
  return (
    <div className='navbar'>
      
        
        <div className='rightside'style={navbarStyles}>
          <Link to="/"> Home </Link>
          <Link to="/MenuPages"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/team"> Team </Link>
          <Link to="/contact"> Contact </Link>
          <button>
            <ShoppingCartIcon />
          </button>
        </div>
      
    </div>
  )
}

export default NavBar
