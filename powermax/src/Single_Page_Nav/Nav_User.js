import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

const Nav_User = () => {
  return (
    <Fragment>
      <li className="nav-item">
        <div>
          <div className="dropdown">
            <button className="dropbtn">Users</button>
            <div className="dropdown-content">
              <li className="nav-item">
                <Link to="/">User</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Role</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Permission</Link>
              </li>
            </div>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default withRouter(Nav_User);
