import React from 'react';
import {connect} from 'react-redux';
import { Redirect , Route} from 'react-router-dom';

const PublicRoute = ({component : Component , isAuthenticated , ...rest}) => {
    return (
        <Route {...rest} component = {(props) => {
            return (
                (isAuthenticated) ? (
                    <Redirect to = '/dashboard' />
                ) : (
                    <Component {...props} />
                )
            );
        }} />
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated : !!state.auth.uid
    }
}
export default connect(mapStateToProps)(PublicRoute);