import React, {useState, useEffect} from "react"
import UserList from "./UserList"
import axios from 'axios'
import swal from 'sweetalert'
import '../css/userdata.css'


const UserData = (props) => {
    const [user, setUser] = useState([])
    console.log(user)
    useEffect(() => {
        axios.get(`https://random-data-api.com/api/v2/users?size=5`)
            .then((response) => {
                const result = response.data 
                setUser(result)
            })
            .catch((err) => {
                swal(err.message)
            })
    }, [])

    const handleClick = () => {
        axios.get(`https://random-data-api.com/api/v2/users?size=1`)
            .then((response) => {
                const result = response.data 
                setUser([result, ...user])
            })
            .catch((err) => {
                swal(err.message)
            })
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        props.history.push('/')
    }

    return (
        <div className="app">
            <h1>User DashBoard</h1>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
            <div className="container">
                <button className="button" onClick={handleClick}><img className="container-button" src="https://cdn-icons-png.flaticon.com/512/2521/2521826.png" alt="" /></button>
                {user.map((data, i) => {
                    return (
                        <UserList key={i} data={data} />
                    )
                })}
            </div><br/>
        </div>
    )
}

export default UserData