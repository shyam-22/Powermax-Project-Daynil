import React from 'react'
import {Link,withRouter} from "react-router-dom"


const Nav_Menu = () => {
    return (
        <div className="container">
            <div id="header" align="right">
            <div className="wrapper">
                <div className="logo">
                    <Link to="" align="center">
                        <img src="../Images_files/powermax.png" alt="powermax"/>
                    </Link>
                </div>
            </div>
            </div>

            <div align="right">
                <div id="top_bar">
                    <div className="wrapper" align="right">
                        <ul className="f11">
                            <li className="sep">
                                <strong>Welcome {}</strong>
                            </li>
                            <li className="sep">
                                <Link to="/user/change_pass">Change Password</Link>
                            </li>
                            <li className="sep">
                                <Link to="/user/signout">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="main">
                <div className="wrapper">
                    <div id="main section">
                        <ul id="breadcrumbs" className="xbreadcrumbs">
                            <li className="parent">
                                <Link to="/home">
                                    <img src="" alt="Home"/>
                                </Link>
                            </li>

                            <li className="parent hover">
                                <Link to="#">Inventory</Link>
                                <ul>
                                    <li>
                                        <Link to="/brands">Brands</Link>
                                    </li>
                                    <li>
                                        <Link to="/products">Products</Link>
                                    </li>
                                    <li>
                                        <Link to="/categories">Categories</Link>
                                    </li>
                                    <li>
                                        <Link to="/items">items</Link>
                                    </li>
                                </ul>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>

        </div>
       
    )
}

export default withRouter(Nav_Menu);
