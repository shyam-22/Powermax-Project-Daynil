import React, { Fragment } from 'react'
import {Link,withRouter} from "react-router-dom"

const Nav_Reconciliation = ({isActive,props}) => {
    return (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" data-toggle="dropdown" style={isActive(props.history,"#")} to="#">
                    Reconciliation<span className="caret"></span>
                </Link>
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <Link to="/add">Add</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/edit">Edit</Link>
                    </li>
                </ul>
                </li>
        </Fragment>
    )
}

export default withRouter(Nav_Reconciliation)
