import React, { Fragment } from 'react'
import {Link,withRouter} from "react-router-dom"

const Nav_Stock = () => {

    return (
        <Fragment>
             <li className="nav-item">
                <div>
                    <div className="dropdown">
                        <button className="dropbtn">Stock</button>
                            <div className="dropdown-content">
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
                        </div>
                 </div>
            </div>
            </li>
        </Fragment>
    )
}

export default withRouter(Nav_Stock)
