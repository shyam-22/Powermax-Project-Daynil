import React, { Fragment } from 'react'
import {Link,withRouter} from "react-router-dom"

const Nav_User = ({isActive,props}) => {
    return (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" data-toggle="dropdown" style={isActive(props.history,"#")} to="#">
                    Users<span className="caret"></span>
                </Link>
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <Link to="/">User</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Role</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Permission</Link>
                    </li>
                </ul>
                </li>
        </Fragment>
    )
}

export default withRouter(Nav_User)
