import React, { Fragment } from 'react'
import {Link,withRouter} from "react-router-dom"

const Nav_Enquiry = () => {
    return (
        <Fragment>
             <li className="nav-item">
                <div>
                    <div className="dropdown">
                        <button className="dropbtn">Enquiry</button>
                            <div className="dropdown-content">
                            <li className="nav-item">
                                <Link to="/enquiry">Enquiry</Link>
                            </li>
                            <li className="nav-item">
                               <Link to="/enquiry/report">Enquiry Report</Link>
                            </li>
                        </div>
                 </div>
            </div>
            </li>
        </Fragment>
    )
}

export default withRouter(Nav_Enquiry)
