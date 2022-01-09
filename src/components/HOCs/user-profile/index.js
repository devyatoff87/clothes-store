import React from 'react'
import UserProfile from './userProfile_component'
import UserList from './userList_component'
function index() {
    return (
        <div>
            <UserProfile name={"Viktor"} email={"viktor@v.vv"} />
            <UserList />
        </div>
    )
}

export default index
