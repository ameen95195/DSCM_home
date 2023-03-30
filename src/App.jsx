import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

import React, {useContext} from 'react';

import Home from './pages/Home/Home';
import Drugs from './pages/Drugs/Drugs';
import Drug from './pages/Drug/Drug';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Stores from './pages/Stores/Stores';
import Store from './pages/Store/Store';

import "./app.scss"
import {AuthContext, AuthProvider} from "./AuthContext.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";

const Layout = () => {

    return (
        <div className="app">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/drugs/:id",
                element: <Drugs/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: '/drug/:id',
                element: <Drug/>
            },
            {
                path: '/stores/:id',
                element: <Stores/>
            },
            {
                path: '/store/:id',
                element: <Store/>
            },
            {
                path: '/checkout',
                element: <Checkout/>
            },

        ]
    },

])

function App() {

    return (
        <div>
            <AuthProvider>
                <RouterProvider router={router}/>
            </AuthProvider>
        </div>
    )
}

export default App
