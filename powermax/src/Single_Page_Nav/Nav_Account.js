import React, { Fragment } from 'react'
import { Link,withRouter } from 'react-router-dom'

const Nav_Account = () => {
    return (

        <Fragment>
        <li className="nav-item">
           <div>
               <div className="dropdown">
                   <button className="dropbtn">Accounts</button>
                       <div className="dropdown-content">
                       <li className="nav-item">
                        <Link to="/">Showroom</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Headings</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Groups</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Sub Group</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Ledger</Link>
                    </li>
                    <li>
                        <Link to="/">Ledger Merge</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Customer Group</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Areas</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Parties</Link>
                    </li>
                    <li>
                        <Link to="/">Departments</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Vat Types</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Journal Entry</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Payments</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Receipt</Link>
                    </li>
                   </div>
            </div>
       </div>
       </li>
   </Fragment>
    )
}
export default withRouter(Nav_Account)

//         <Fragment>
//              <li className="nav-item">
//                 <Link className="nav-link" data-toggle="dropdown" style={isActive(props.history,"#")} to="#">
//                     Accounts<span className="caret"></span>
//                 </Link>
//                 <ul className="dropdown-menu">
//                     <li className="nav-item">
//                         <Link to="/">Showroom</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/">Headings</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/">Groups</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/">Sub Group</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/">Ledger</Link>
//                     </li>
//                     <li>
//                         <Link to="/">Ledger Merge</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/">Customer Group</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/">Areas</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/">Parties</Link>
//                     </li>
//                     <li>
//                         <Link to="/">Departments</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/">Employees</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/">Vat Types</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/">Journal Entry</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/">Payments</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/">Receipt</Link>
//                     </li>
//                 </ul>
//                 </li>
//         </Fragment>
//     )
// }

