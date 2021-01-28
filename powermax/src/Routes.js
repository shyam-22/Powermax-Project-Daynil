import react from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom"

import Nav_Menu from "./ALL_core_component/Nav_Menu"

import Signup from "./USER related/Signup"
import Signin from "./USER related/Signin"
import Signout from "./USER related/Signout"
import Home from "./ALL_core_component/Home"

const Routes = () => {
    return (
        <BrowserRouter>
        <Nav_Menu/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signout" exact component={Signout}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;