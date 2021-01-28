import React from 'react'
import {Link,withRouter} from "react-router-dom"


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
import Nav_User from '../Single_Page_Nav/Nav_User'

const isActive = (history,path) => {
    if(history === path){
        return {color : "yellow"}
    }
    else{
        return {color : "white"}
    }
}

const Nav_Menu = (props) => {
    return (
        <div className="container-fluid mt-5">
        <ul className="nav nav-breadcrumbs bg-dark">
            <Nav_Home isActive={isActive} props={props}/>
            <Nav_Inventory isActive={isActive} props={props}/>
            <Nav_Enquiry isActive={isActive} props={props}/>
            <Nav_Stock isActive={isActive} props={props}/>
            <Nav_Purchase isActive={isActive} props={props}/>
            <Nav_Sales isActive={isActive} props={props}/>
            <Nav_Account isActive={isActive} props={props}/>
            <Nav_Installation isActive={isActive} props={props}/>
            <Nav_Report isActive={isActive} props={props}/>
            <Nav_User isActive={isActive} props={props}/>
            <Nav_Button Link={Link}/>                    
        </ul>
    </div>       
    )
}

export default withRouter(Nav_Menu);
