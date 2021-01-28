import React, { Fragment } from 'react'
import {Link,withRouter} from "react-router-dom"

const Nav_Stock = ({isActive,props}) => {
    return (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" data-toggle="dropdown" style={isActive(props.history,"#")}  to="#">
                    Stock<span className="caret"></span>
                </Link>
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <Link to="/stock/item">Item Stock</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/stock/add">Add Item Stock</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/report/detail">Detailed Report</Link>
                    </li>
                    <li className="nav-item"> 
                        <Link to="/report/summary">Summary Report</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/transfer">Transfer</Link>
                    </li>
                </ul>
                </li>
        </Fragment>
    )
}

export default withRouter(Nav_Stock)
