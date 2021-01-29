import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

const Nav_Sales = () => {
  return (
    <Fragment>
      <li className="nav-item">
        <div>
          <div className="dropdown">
            <button className="dropbtn">Sales</button>
            <div className="dropdown-content">
              <li className="nav-item">
                <Link to="/">Sales</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Credit Note</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Receipt</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Receipt Adjustment</Link>
              </li>
            </div>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default withRouter(Nav_Sales);
