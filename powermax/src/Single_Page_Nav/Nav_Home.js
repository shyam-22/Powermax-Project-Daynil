import React, { Fragment } from 'react'
import {Link,withRouter} from "react-router-dom"

const Nav_Home = ({isActive,props}) => {
    return (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/home">
                    <span class="material-icons">house</span>
                </Link>
            </li>
        </Fragment>
    )
}

export default withRouter(Nav_Home)
