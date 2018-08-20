import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const Header = () => (
    <div><h1>Expensify</h1>
    <span>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> 
    <NavLink to="/create" activeClassName="is-active">Create</NavLink> 
    
    </span>
    </div>
);

export default Header;