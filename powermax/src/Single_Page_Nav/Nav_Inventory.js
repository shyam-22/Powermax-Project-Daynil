import React, { Fragment } from 'react'
import {Link,withRouter} from "react-router-dom"

const Nav_Inventory = ({isActive,props}) => {
    return (
        <Fragment>
             <li className="nav-item">
                <Link className="nav-link" data-toggle="dropdown" style={isActive(props.history,"#")} to="#">
                    Inventory<span className="caret"></span>
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link to="/brands" className="nav-link">Brands</Link>
                    </li>
                    <li>
                        <Link to="/products" className="nav-link">Products</Link>
                    </li>
                    <li>
                        <Link to="/categories" className="nav-link">Categories</Link>
                    </li>
                    <li>
                        <Link to="/items" className="nav-link">items</Link>
                    </li>
                </ul>
            </li>
        </Fragment>
    )
}

export default withRouter(Nav_Inventory) 
