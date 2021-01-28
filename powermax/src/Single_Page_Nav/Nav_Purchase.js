import React, { Fragment } from 'react'
import {Link, withRouter } from 'react-router-dom'

const Nav_Purchase = ({isActive,props}) => {
    return (
        <Fragment>
             <li className="nav-item">
                <Link className="nav-link" data-toggle="dropdown" style={isActive(props.history,"#")}  to="#">
                    Purchase<span className="caret"></span>
                </Link>
                <ul className="dropdown-menu">
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
                </ul>
                </li>
        </Fragment>
    )
}

export default withRouter(Nav_Purchase)
