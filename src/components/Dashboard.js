import React from "react"
//import {Link} from 'react-router-dom'
import {Route, withRouter} from 'react-router-dom'
import Login from "./Login"
import UserData from "./UserData"
import PrivateRoute from "./PrivateRoute"

const Dashboard = (props) => {
    return (
        <div>
            {/* <Link to='/'>Login</Link>
            <Link to='/userdata'>UserData</Link> */}
            <Route path='/' component={Login} exact />
            <PrivateRoute path='/userdata' component={UserData} exact />
        </div>
    )
}

export default withRouter(Dashboard)