import * as React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import TaskIcon from '@mui/icons-material/Task';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

import '../styles/BottomNav.css'  // LOADS ONLY ONCE WTH?

//       <Link className="navbar-link" to="/recipes">
//         <div className="navbar-position-container">
//           <FastfoodIcon pallete="secondary" />
//           <p className="navbar-icon-label">Recipes</p>
//         </div>
//       </Link>

const Navbar = () => {
  return (
    <BottomNavigation
      showLabels
      sx={{
        borderRadius: 3,
        position: "fixed",
        bottom: "2vh",
        alignSelf: "center",
        bgcolor: "primary"
      }}
      className="bottom-nav"
      // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
    >
      <BottomNavigationAction 
        component={Link}
        to="/"
        icon={<HomeIcon />}
        label="Home"
      />
      <BottomNavigationAction 
        component={Link}
        to="/recipes"
        icon={<FastfoodIcon />}
        label="Recipes"
      />
      <BottomNavigationAction 
        component={Link}
        to="/shopping"
        icon={<ShoppingCartIcon />}
        label="Shopping"
      />
      <BottomNavigationAction 
        component={Link}
        to="/todo-list"
        icon={<TaskIcon />}
        label="To-Do"
      />
    </BottomNavigation>
  )
}

export default Navbar
