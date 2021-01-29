import React, { Fragment } from 'react'
import {Link,withRouter} from "react-router-dom"

const Nav_Report = () => {
    
    return (
        <Fragment>
             <li className="nav-item">
                <div>
                    <div className="dropdown">
                        <button className="dropbtn">Reports</button>
                            <div className="dropdown-content">
                            <li className="nav-item">
                        <Link to="/">Stock I-O Reports</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Sub Group Wise Ledger Balance</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Showroom Wise Ledger Balance</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Purchase Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Purchase Details</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Sales Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Sales Details</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Installation Details</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Service Details</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Complaints Details</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">AMC Contract Details</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Installation Service End Report</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Receipts Outstanding</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Payments Outstanding</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Trail Balance</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Balance Sheet</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Profit & Loss Accounts </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Reconciliation </Link>
                    </li>
                        </div>
                 </div>
            </div>
            </li>
        </Fragment>
    )
}

export default withRouter(Nav_Report)
