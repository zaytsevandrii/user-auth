import React from "react"
import { useDispatch } from "react-redux"
import { setUser } from "store/slices/userSlice"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import Form from "./Form"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user)
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.id,
                        token: user.accessToken,
                    })
                )
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            })
    }
    return (
        <div>
            <Form title="Sign In" handleClick={handleLogin} />
        </div>
    )
}

export default Login
