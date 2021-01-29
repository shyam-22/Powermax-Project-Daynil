import React, { Fragment } from 'react'

const Nav_Button = ({isActive,props,Link}) => {
    return (
        <Fragment>
            <li>
                <ul className="nav navbar-inline navbar-inverse">
                    <li><Link style={isActive(props.history,"/signup")} to="/signup">
                        <span className="glyphicon glyphicon-user mr-2"></span> 
                            Sign Up
                        </Link>
                    </li>
                    <li><Link style={isActive(props.history,"/signin")} to="/signin">
                        <span className="glyphicon glyphicon-log-in mr-2"></span>
                            Login
                        </Link>
                    </li>
                </ul>
            </li>
        </Fragment>
    )
}

export default Nav_Button;
