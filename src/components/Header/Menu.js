import React from 'react'
import './Menu.css';

const Menu = () => {
  return (
<div className="topnav">
  <a className="active" href="#featured">Home</a>
  <a  href="#news">News</a>
  <a  href="#sport">Sport</a>
  <a  href="#enterteiment">Enterteiment</a>
  <a  href="#music">Music</a>
</div>

  )
}

export default Menu;