import { createBrowserRouter } from "react-router-dom";
import ErrorRoute from "../Error/ErrorRoute";
import DashBoard from "../layouts/DashBoard";
import Main from "../layouts/Main";
import Care from "../Pages/Care/Care";
import AddProducts from "../Pages/DashBoard/AddProducts/AddProducts";
import Allseller from "../Pages/DashBoard/Allseller/Allseller";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import MyOrders from "../Pages/DashBoard/My Orders/MyOrders";
import MyProducts from "../Pages/DashBoard/MyProducts/MyProducts";
import Payment from "../Pages/DashBoard/Payment/Payment";
import ReportedItems from "../Pages/DashBoard/ReportedItems/ReportedItems";
import Food from "../Pages/Foods/Food";
import Home from "../Pages/Home/Home";
import Hotels from "../Pages/Hotels/Hotels";
import Login from "../Pages/Registration/Login";
import SignUp from "../Pages/Registration/SignUp";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorRoute></ErrorRoute>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
            ,
            {
                path: '/login',
                element: <Login></Login>
            }
            ,
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
            ,
            {
                path: '/food',
                element: <Food></Food>
            }
            ,
            {
                path: '/hotels',
                element: <Hotels></Hotels>
            }
            ,
            {
                path: '/care',
                element: <Care></Care>
            }
        ]
    }
    ,
    {
        path: '/dashboard',
        errorElement: <ErrorRoute></ErrorRoute>,
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            }
            ,
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            }
            ,
            {
                path: '/dashboard/addProducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><Allseller></Allseller></AdminRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: 'dashboard/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader: ({ params }) => fetch(` https://pet-shop-server.vercel.app/orders/${params.id}`)
            }
        ]
    }
])