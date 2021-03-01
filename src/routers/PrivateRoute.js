import React from 'react';
import {connect} from 'react-redux';
import {Redirect , Route} from 'react-router-dom';
import Header from '../components/Header';

const PrivateRoute = ({isAuthenticated , component : Component , ...rest}) => {
    return (
        <Route {...rest} component = {(props) => {
            return (
                (isAuthenticated) ? (
                    <React.Fragment>
                        <Header />
                        <Component {...props} />
                    </React.Fragment>
                ) : (
                    <Redirect to = '/' />
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
export default connect(mapStateToProps)(PrivateRoute);