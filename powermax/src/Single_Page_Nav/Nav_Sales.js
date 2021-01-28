import React, { Fragment } from 'react'
import {Link,withRouter} from "react-router-dom"

const Nav_Sales = ({isActive,props}) => {
    return (
        <Fragment>
               <li className="nav-item">
                <Link className="nav-link" data-toggle="dropdown" style={isActive(props.history,"#")}  to="#">
                    Sales<span className="caret"></span>
                </Link>
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <Link to="/">Sales</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Credit Note</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Receipt</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Receipt Adjustment</Link>
                    </li>
                </ul>
                </li>
        </Fragment>
    )
}

export default withRouter(Nav_Sales)
