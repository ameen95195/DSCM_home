import React, {useContext, useEffect, useState} from 'react';

import Cart from "../Cart/Cart";

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import {Link, useNavigate} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import "./Navbar.scss";
import "../../app.scss"
import {AuthContext} from "../../AuthContext.jsx";


function Navbar() {
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);
    const {authKey, userInfo, logout} = useContext(AuthContext)

    return (
        <div className="navbar lg:ml-8 xl:ml-[135px]">
            <div className="wrapper">
                <div className="left">

                    <div className="logo">

                        <Link className="link" to="/">DSCM</Link>
                    </div>

                </div>

                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">
                            About
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/drugs/:id">Drugs</Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/stores/:id">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchOutlinedIcon/>
                        {authKey? <LogoutIcon onClick={logout}/>: <PersonOutlineOutlinedIcon onClick={() => {navigate("/login")}}/>}

                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <AddShoppingCartOutlinedIcon/>
                            <span>0</span>
                        </div>

                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    )
}

export default Navbar