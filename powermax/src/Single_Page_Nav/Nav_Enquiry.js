import React, { Fragment } from 'react'
import {Link,withRouter} from "react-router-dom"

const Nav_Enquiry = ({isActive,props}) => {
    return (
        <Fragment>
              <li className="nav-item">
                <Link className="nav-link" data-toggle="dropdown" style={isActive(props.history,"#")}  to="#">
                    Enquiry<span className="caret"></span>
                </Link>
                
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <Link to="/enquiry">Enquiry</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/enquiry/report">Enquiry Report</Link>
                    </li>
                </ul>
                
            </li>
        </Fragment>
    )
}

export default withRouter(Nav_Enquiry)
