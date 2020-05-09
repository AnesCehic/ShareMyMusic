import React from 'react';
import '../styles/Navbar.scss';
import { NavLink } from 'react-router-dom'
import FA from 'react-fontawesome';

export function Navbar() {
    return <div className="nav">
        <NavLink className="headerLink" to="/"><h1>ShareMyMusic</h1></NavLink>

        <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/profile"><i className="far fa-user-circle"></i></NavLink>
        </div>
    </div>
}