import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import { AuthContext } from '../contexts/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        setLoading(false)
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;