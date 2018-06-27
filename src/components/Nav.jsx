import React from 'react';
import { Link } from 'react-router-dom';
// 
// import ShoeList from './ShoeList';
// import AboutUs from './AboutUs';

function Nav(){
  return(
    <div>
      <Link to='/'>Home</Link>
      <Link to='/aboutUs'>About Us</Link>
    </div>
  );
}

export default Nav;
