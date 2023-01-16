import React from "react"
import { Link, redirect } from "react-router-dom"

const HomePage = () => {
    return (
        <div>
            <Link to='/login'>
                <button>Login</button>
            </Link>
        </div>
    )
}

export default HomePage
