import React, { Fragment } from 'react'
import {Link,withRouter} from "react-router-dom"

const Nav_Installation = ({isActive,props}) => {
    return (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" data-toggle="dropdown" style={isActive(props.history,"#")} to="#">
                    Installation<span className="caret"></span>
                </Link>
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <Link to="/">Installations</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Services</Link>
                    </li>
                    <li>
                        <Link to="/">AMCs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Complaints</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Party Details</Link>
                    </li>
                </ul>
                </li>
        </Fragment>
    )
}

export default withRouter(Nav_Installation)
