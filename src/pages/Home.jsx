import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
        <h1>I am the Home / Landing Page!</h1>
        <Link to="register"> Register</Link>
        </>
    )
}

export default Home
