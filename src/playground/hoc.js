import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>{props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>WARNING! this is private info. please do not share!</p>}
            
            <WrappedComponent {...props} />
        </div>
    );
};
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {!props.isAuthenticated && <p>Please Login to view component</p>} 
        {props.isAuthenticated && <WrappedComponent {...props} /> }
        </div>
    );

};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info="you are authenticated!" />, document.getElementById('app'));
