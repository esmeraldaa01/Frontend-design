import React from 'react'
import './Menu.css';

const Menu = () => {

  return (
      <header className="topnav">
        <a className="active" href="#featured">Featured</a>
        <a href="#news">News</a>
        <a href="#sport">Sport</a>
        <a href="#entertainment">Entertainment</a>
        <a href='#music'>Music</a>
      </header>


  )
}

export default Menu;