import React, { Fragment } from 'react'

const Nav_Button = ({Link}) => {
    return (
        <Fragment>
            <li>
                <ul className="nav navbar-inline navbar-inverse nav-right">
                    <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                    <li><Link to="/signin"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
            </li>
        </Fragment>
    )
}

export default Nav_Button;
