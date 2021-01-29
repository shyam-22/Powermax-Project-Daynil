import React from 'react'
import {Link,withRouter} from "react-router-dom"

import "../CSS_STYLE/style.css"

import Nav_Account from '../Single_Page_Nav/Nav_Account'
import Nav_Button from '../Single_Page_Nav/Nav_Button'
import Nav_Enquiry from '../Single_Page_Nav/Nav_Enquiry'
import Nav_Home from '../Single_Page_Nav/Nav_Home'
import Nav_Installation from '../Single_Page_Nav/Nav_Installation'
import Nav_Inventory from '../Single_Page_Nav/Nav_Inventory'
import Nav_Purchase from '../Single_Page_Nav/Nav_Purchase'
import Nav_Report from '../Single_Page_Nav/Nav_Report'
import Nav_Sales from '../Single_Page_Nav/Nav_Sales'
import Nav_Stock from '../Single_Page_Nav/Nav_Stock'
import Nav_Timepass from '../Single_Page_Nav/Nav_Timepass'
import Nav_User from '../Single_Page_Nav/Nav_User'

const isActive = (history,path) => {
    if(history === path){
        return {color : "red"}
    }
    else{
        return {color : "yellow"}
    }
}

const Nav_Menu = (props) => {
    return (
        <div className="nav nav-tabs">

        <div className="header">
            <div className="wrapper">
                <div className="logo">
                    <Link className="logo">
                        <img src="../Images_files/download.png" alt="powermax"/>
                    </Link>
                </div>
            </div>
        </div>
        

            <div className="inline">
                <div id="top-bar">
                    <div className="wrapper cf" style={{alignContent:'center'}}>
                        <ul className="inline">
                            <li className="sep">
                                <strong>Welcome Shyam</strong>
                            </li>
                            <li className="sep">
                                <Link to="/user/changePass">Change Password</Link>
                            </li>
                            <li className="sep">
                                <Link to="user/logout">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        <div className="container mt-5">
        <ul className="nav navbar bg-dark m-0 p-0">
            <Nav_Home/>
            <Nav_Inventory/>
            <Nav_Enquiry/>
            <Nav_Stock/>
            <Nav_Purchase/>
            <Nav_Sales/>
            <Nav_Account/>
            <Nav_Installation/>
            <Nav_Report/>
            <Nav_User/>
            <Nav_Button isActive={isActive} props={props} Link={Link}/>                   
        </ul>
    </div> 
    </div>      
    
        
    )
}

export default withRouter(Nav_Menu);
