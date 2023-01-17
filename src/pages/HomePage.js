import { useAuth } from "hooks/use-auth"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { removeUser } from "store/slices/userSlice"
const HomePage = () => {
    const dispatch = useDispatch()
    const { isAuth, email } = useAuth()
    return (
        <div>
            <h1>Welcome friend</h1>

            <button>Login</button>

            <Link to="/login">
                <button onClick={() => dispatch(removeUser())}>Logout</button>
            </Link>
        </div>
    )
}

export default HomePage
