import React from 'react'
import {Navbar} from 'bootstrap-4-react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <Navbar>
            
            <ul className="nav border nav-pills">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Sākums</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/addGallery">Pievienot galeriju</NavLink>
                </li>
            </ul>
            </Navbar>
        </div>
    )
}
