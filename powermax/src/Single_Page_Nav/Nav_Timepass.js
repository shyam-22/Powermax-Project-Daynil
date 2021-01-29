import React from 'react'
import {Link,withRouter} from "react-router-dom"


const Nav_Timepass = () => {
    return (
        <div>
            <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
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
                </div>
            </div>
        </div>
    )
}

export default withRouter(Nav_Timepass)
