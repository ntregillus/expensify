import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const Login = (props) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify App</h1>
      <p>
        Time for Expenses!
      </p>
      <button className="button" onClick={props.startLogin} >Login with Google</button>
    </div>
  </div>  
);
const mapDispatchToProps = (dispatch) => ({
  startLogin: () =>{
     dispatch(startLogin());
  }
});
export default connect(undefined,mapDispatchToProps)(Login);
