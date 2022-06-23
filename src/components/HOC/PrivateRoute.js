import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     return <Route {...rest} component={(props) => {
//         const token = window.localStorage.getItem('token');
//         if (token) {
//             return <Component {...props} />
//         }
//         return <Navigate to="/signin" />

//         // return <Redirect to={`/signin`} />

//     }} />
// }
function PrivateRoute({ children }) {
    const auth = window.localStorage.getItem('token');
    return auth ? children : <Navigate to="/signin" />;
}
export default PrivateRoute;