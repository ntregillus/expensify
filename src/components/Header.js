import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout}  from '../actions/auth';

export const Header = (props) => (
    <div><h1>Expensify</h1>
    <span>
    <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Home</NavLink> 
    <NavLink to="/create" activeClassName="is-active">Create</NavLink> 
    
    </span>
    <button onClick={props.logout}>Logout</button>
    </div>
);
const mapDispatchToProps = (dispatch) => {
   return {
       logout: () =>  dispatch(startLogout())
   }
};
export default connect(undefined, mapDispatchToProps)(Header);