import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import { AuthContext } from '../contexts/AuthProvider';
import useBuyer from '../hooks/useBuyer';

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isUser, isUserLoading] = useBuyer(user?.email);
    const location = useLocation();
    if (loading || isUserLoading) {
        return <Loading></Loading>
    }
    if (user && isUser) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default BuyerRoute;