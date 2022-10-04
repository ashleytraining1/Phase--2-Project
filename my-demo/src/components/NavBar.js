import React from 'react';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../styles/NavBar.css";

function NavBar() {   
  return (
    <div className='navbar'>
      {/* <div className='hiddenLinks'> 
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/team"> Team </Link>
          <Link to="/contact"> Contact </Link>
      
      </div> */}
        
        <div className='rightside'>
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
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
