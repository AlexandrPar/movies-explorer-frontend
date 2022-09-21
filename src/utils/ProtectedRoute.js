import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
    const token = localStorage.getItem('token');
    return (
        <Route>
            {
                token || (() => props.loggedIn) ? <Component {...props} /> : <Redirect to="/" />
            }
        </Route>
    )
}

export default ProtectedRoute;