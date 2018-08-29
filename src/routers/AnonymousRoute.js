import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';


export const AnonymousRoute = ({
    isAuthenticated, 
    component:Component,
    ...rest //contains all properties not destructured!
})=> (
    <Route {...rest} component={(props) => (
        !isAuthenticated ? (
            <div>
                <Component {...props} />
            </div>
        ): (
            // note to future self, this will cause infinateloop if the route
            // used is actually an anonymous route!
            <Redirect to="/dashboard" />
        )
    )}  />
);
const mapStateFromProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});
export default connect(mapStateFromProps)(AnonymousRoute);
