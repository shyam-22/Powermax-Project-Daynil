import React, { Fragment } from 'react'
import {Link, withRouter } from 'react-router-dom'

const Nav_Purchase = () => {


    return (
        <Fragment>
             <li className="nav-item">
                <div>
                    <div className="dropdown">
                        <button className="dropbtn">Purchase</button>
                            <div className="dropdown-content">
                            <li className="unstyle">
                        <Link to="/purchaseorders">Purchase Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/purchase">Purchase</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/debitnotes">Debit Notes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/payment">Payment</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Paymentadjust">Payment Adjustment</Link>
                    </li>
                        </div>
                 </div>
            </div>
            </li>
        </Fragment>
    )
}

export default withRouter(Nav_Purchase)
