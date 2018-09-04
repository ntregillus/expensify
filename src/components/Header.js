import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout}  from '../actions/auth';

export const Header = (props) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content"> 
                <Link to="/dashboard" className="header__title">
                    <h1>Expensify</h1>
                </Link> 
                <button className="button button--link" onClick={props.logout}>Logout</button>
            </div>
        </div>
    </header>
);
const mapDispatchToProps = (dispatch) => {
   return {
       logout: () =>  dispatch(startLogout())
   }
};
export default connect(undefined, mapDispatchToProps)(Header);