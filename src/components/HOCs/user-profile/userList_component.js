import React from 'react'
import useFetchData from './useFetchData';


function UserList() {

    const users = useFetchData("https://jsonplaceholder.typicode.com/users", 10)

    return (
        <div className='container'>
            <h1>User list:</h1>
            <h3>users:</h3>
            <div>{users.map((user) => {
                return <>
                    <h4 key={user.id}>{user.name}</h4>
                    <p>{user.email}</p>
                </>
            })}</div>
        </div>
    )
}



export default UserList
