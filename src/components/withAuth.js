import React from 'react';
import { connect } from 'react-redux';
import { signUp, signIn, signOut } from '../state/actions';

const withAuth = WrappedComponent => {
    const EnhancedComponent = props => <WrappedComponent {...props} />;

    const mapStateToProps = state => ({
        isAuthenticated: state.auth.isAuthenticated,
        isLoading: state.auth.isLoading,
        error: state.auth.error
    });

    const mapDispatchToProps = {
        signUp,
        signIn,
        signOut
    };

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(EnhancedComponent);
};

export default withAuth;
