import React, { useEffect, useState } from 'react'
import useFetchData from './useFetchData'
import fetchData from './useFetchData'

function UserProfile({ name, email }) {

    //(url and amount of fetching items)
    const posts = useFetchData("https://jsonplaceholder.typicode.com/posts", 10)
    console.log(posts)
    return (

        <div className='container'>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <h3>Posts:</h3>
            <div>{posts.map((post) => {
                return <>
                    <h4 key={post.id}>{post.title}</h4>
                    <p>{post.body}</p>
                </>
            })}</div>
        </div>

    )
}

export default UserProfile
