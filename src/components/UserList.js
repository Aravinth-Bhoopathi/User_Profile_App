import React from "react"
import '../css/userdata.css'

const UserList = (props) => {
    const {data} = props
    return (
        <div className="container-border">
            <img className="container-image" src={data.avatar} alt="" width="100px" />   
            <h3 className="name">{data.first_name} {data.last_name}</h3>   
            <p className="employment">{data.employment.title}</p> 
            <div className="card-details">
                <div>
                    <h3>{data.last_name.length}</h3>
                    <span>TASKS</span>
                </div>
                <div>
                    <h3>{data.first_name.length}</h3>
                    <span>WORK ORDERS</span>
                </div>
                <div>
                    <h3>{data.employment.title.length}</h3>
                    <span>ROLES</span>
                </div>
            </div>
            <button className="profile-button">View Profile</button>  
        </div>
    )
}

export default UserList
