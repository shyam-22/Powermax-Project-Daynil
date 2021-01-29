import React, { Fragment } from 'react'
import {Link,withRouter} from "react-router-dom"

const Nav_Installation = () => {
    return (
      <Fragment>
        <li className="nav-item">
          <div>
            <div className="dropdown">
              <button className="dropbtn">Installation</button>
              <div className="dropdown-content">
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
              </div>
            </div>
          </div>
        </li>
      </Fragment>
    );
}

export default withRouter(Nav_Installation)
