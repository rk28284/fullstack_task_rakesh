import React from 'react';
import note from "../assets/note.png";
import '../style/Header.css';

export const Header = () => {
  return (
   <div className="header-container">
            <img
                src={note}
                alt="logo"
                className="header-logo"
            />
            <h1 className="header-title">Note App</h1>
        </div>
  )
}