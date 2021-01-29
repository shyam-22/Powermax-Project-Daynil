import React, { Fragment } from 'react'
import {Link,withRouter} from "react-router-dom"

const Nav_Inventory = () => {
    return (
        <Fragment>
             <li className="nav-item">
                <div>
                    <div className="dropdown">
                        <button className="dropbtn">Inventory</button>
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
                            <li>
                                <Link to="/items">Pending Sr.No Items</Link>
                            </li>
                        </div>
                 </div>
            </div>
            </li>
        </Fragment>
    )
}

export default withRouter(Nav_Inventory) 



