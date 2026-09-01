import React from "react";
import { Link } from "react-router";

function NavBar() {
    const navLinks = [
        {
         path:"",
         title:"Home"   
        },

        {
            path:"services",
            title:"Services"
        },

        {
            path:"portfolio",
            title:"Projects"
        },

        {
            path:"contact",
            title:"Contact"
        }
    ]
  return (
    <div className="navbar">
        <h2 className="logo">Mercy</h2>
      <ul className="links">
        {navLinks.map(link=>(
            <li key={link.title}>
                <Link to={link.path}>{link.title}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
